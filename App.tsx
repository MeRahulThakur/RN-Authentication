import { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useColorScheme } from './hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/colors';
import AuthContextProvider, { AuthContext } from './store/context/auth-context';
import IconButton from './components/UI/IconButton';
import ThemeProvider, { useTheme } from './hooks/useTheme';
import ActivateCase from './screens/ActivateCase';
import PatientDashboard from './screens/PatientDashboard';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

function AuthStack() {
  //const colorScheme = useColorScheme();
  const {colorScheme} = useTheme();
  console.log('AuthStack theme', colorScheme)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
  //const colorScheme = useColorScheme();
  const {colorScheme} = useTheme();

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
      <Stack.Screen
        name="ActivateCase"
        component={ActivateCase}
      />
      <Stack.Screen
        name="PatientDashboard"
        component={PatientDashboard}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
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

  useEffect(() => {
    if (!isTryingLogin) {
      //Hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [isTryingLogin])

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
