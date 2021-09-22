import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export interface DeviceItem {
    id: string;
    key: string;
    name: string;
    onDevicePress: any;
}

const Device = (props: DeviceItem) => {
    const bt_icon = require('../../../icons/bt_icon.png');
    const connect_icon = require('../../../icons/connect.png');
    const devicePress = () => {
        console.log(props.name);
        props.onDevicePress();
    };

    return (
        <TouchableOpacity style={styles.wrapper} onPress={devicePress}>
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={bt_icon}/>
            </View>
            <View style={styles.wrapperName} >
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.id}>{props.id}</Text>
            </View>
            <Image style={styles.iconRight} source={connect_icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between"
    },
    wrapperLeft: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLeft: {
        width: 20,
        height: 20
    },
    wrapperName: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15
    },
    name: {
    
    },
    id: {
        fontSize: 12,
        color: 'grey'
    },
    iconRight: {
        width: 35,
        height: 35
    }
});

export default Device;