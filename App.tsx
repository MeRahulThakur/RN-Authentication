import { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme, Appearance } from './hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/colors';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors[colorScheme ?? 'light'].primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors[colorScheme ?? 'light'].primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors[colorScheme ?? 'light'].primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken)
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, [])

  useEffect(()=>{
    if(!isTryingLogin){
      //Hide the splash screen
      SplashScreen.hideAsync();
    }
  },[isTryingLogin])

  if(isTryingLogin){
   return null;
  }

  return <Navigation />
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
