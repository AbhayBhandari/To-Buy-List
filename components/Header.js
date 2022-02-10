import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 30,
  },
  heading: {
    fontFamily:
      Platform.OS === "android"
        ? "sans-serif-condensed"
        : "AmericanTypewriter-CondensedLight",
    color: colors.heading,
    fontSize: 60,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
