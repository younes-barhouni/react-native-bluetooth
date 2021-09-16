import React from 'react';
import HomeScreen, { HomeScreenOptions } from './screens/home'
import DevicesScreen from './screens/devices';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const StackScreen = () => {
    const homeScreenOptions: any  = HomeScreenOptions({});
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeScreenOptions}
        />
        <Stack.Screen name="Devices" component={DevicesScreen} />
      </Stack.Navigator>
    );
  };

export default StackScreen;