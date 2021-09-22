import React from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, SafeAreaView, TouchableOpacity } from 'react-native';

const Permission = () => {


    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permission Localisation Bluetooth',
              message: 'Requirement for Bluetooth',
              buttonNeutral: 'Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.item}>Try permissions</Text>
                <Button title="request permissions" onPress={requestCameraPermission} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%", margin: 10
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

export default Permission;