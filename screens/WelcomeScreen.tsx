import { useContext } from 'react';

import { FlatList } from 'react-native';
import { AuthContext } from '../store/context/auth-context';
import ProfileCard from '../components/UI/ProfileCard';
import { cases } from '../data/data';

function WelcomeScreen() {
  //const [fetchedMessage, setFetchedMesssage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  // useEffect(() => {}, [token]);
  /* <Dropdown dataSet={countries} keyData='country' placeHolder='Select Country' /> */

  function renderMealItem(itemData) {
    const item = itemData.item;

    const profileCardProps = {
      caseID: item.caseID,
      name: item.name,
      surgery: item.surgery,
      duration: item.duration,
      profileImage: item.profileImage,
      status: item.status,
      age: item.age,
      gender: item.gender,
      hospital: item.hospital
    };
    return <ProfileCard {...profileCardProps} />
  }


  return (
      <FlatList
        data={cases}
        //keyExtractor={(item) => item.caseID}
        renderItem={renderMealItem}
      />
  );
}

export default WelcomeScreen;