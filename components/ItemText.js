import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../app/config/colors';

export default function ItemText({children, style}) {
    return (
        <View>
            <Text style={[styles.textStyle, style]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textTransform: "capitalize",
        color: colors.black,
        fontSize: 25,
    },
});