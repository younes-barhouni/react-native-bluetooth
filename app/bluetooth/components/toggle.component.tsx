import React from 'react';  
import { View, Text, Switch, StyleSheet } from 'react-native';

const Toggle = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ props.value ? 'On' : 'Off' }</Text>
            <Switch style={styles.switch}
                value={props.value}
                onValueChange={props.onValueChange}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1
    },
    switch: {
        width: 50
    }
});

export default Toggle;