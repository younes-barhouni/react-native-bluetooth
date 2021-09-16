import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../constants/colors';


const HomeScreen = ({ navigation, route }: any) => {
  
  const [status, setStatus] = React.useState('off');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Discover Devices"
        onPress={() => navigation.navigate('Devices')}
      />

      <Button
        title="Connected Device"
        onPress={() => navigation.navigate('Control')}
      />

      <View>
          <Text>Status: {status}</Text>
          <Text>Preview:</Text>
      </View>

    </View>
  );
};

const LogoTitle = (props: any) => {
  const homeIcon = require('../../../icons/home.png')
  return (
    <>
      <View style={styles.homeNavigation}>
        <Image style={styles.homeIcon} source={homeIcon} />
        <Text style={styles.homeText}>Home</Text>
      </View>
    </>
  );
}
export const HomeScreenOptions = ({ navigation, route }: any) => ({
  headerTitle: (props: any) => <LogoTitle {...props} />,
  title: 'My home',
  headerStyle: {
    backgroundColor: COLORS.$_orange_web,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '',
  },
});

const styles = StyleSheet.create({
  homeNavigation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    justifyContent: "flex-start"
  },
  homeIcon: {
    width: 30,
    height: 30,
  },
  homeText: {
    padding: 5
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

export default HomeScreen;