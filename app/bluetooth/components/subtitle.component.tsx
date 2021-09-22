import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subtitle = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.line}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 15,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'gray'
    },
    line: {
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        flex: 1,
        borderColor: '#eceff1'
    }
});

export default Subtitle;