import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './Home';
import Profile from './Profile';

// const HomeRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Leaderboard</Text>;

const DashBoard = ({}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home',
    },
    {key: 'leaderboard', title: 'Leaderboard', focusedIcon: 'medal'},
    {key: 'profile', title: 'Profile', focusedIcon: 'account'},
    // {
    //   key: 'notifications',
    //   title: 'Notifications',
    //   focusedIcon: 'bell',
    //   unfocusedIcon: 'bell-outline',
    // },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    leaderboard: RecentsRoute,
    profile: Profile,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: 'white'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor="gray"
    />
  );
};

export default DashBoard;
