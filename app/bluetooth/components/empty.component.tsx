import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Empty = (props: any) => {
    return (
        <View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18
    }
});

export default Empty;