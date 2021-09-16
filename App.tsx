/**
 * Main Entry App
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './app/bluetooth/stack';
import COLORS from './app/bluetooth/constants/colors';


const App: () => any = () => {

  const SplashScreen = () => {
    const logo = require('./assets/bootsplash_logo.png');
     // getting width according to device screen size for fitting loading image on screen
     const width = Dimensions.get('window').width * 0.5;
    return (
        <TouchableOpacity style={styles.indexContainer}>
          <Image
              source={logo}
              style={[
                  {
                      resizeMode: 'cover'
                  }, {
                      alignSelf: 'center'
                  }, {
                      width: width
                  }, {
                      height: 200
                  }
              ]} />
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color={COLORS.$_orange_web} />
              </View>
              <Text>TEST</Text>
      </TouchableOpacity>
    );
  }

  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  // const Drawer = createDrawerNavigator();
  const init = async () => {
    setTimeout(async () => {
      setIsLoadingSplash(false);
    }, 2000);
  };


  useEffect(() => {
    init().finally(() => {
      // do something
    });
  }, []);

  
  return (
    <>
    {isLoadingSplash && <SplashScreen />}
    {!isLoadingSplash && (
      <NavigationContainer>
        <StackScreen/>
      </NavigationContainer>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  indexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcometxt: {
      textAlign: 'center',
      fontSize: 20,
      color: '#10598F'
  },

  container: {
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
