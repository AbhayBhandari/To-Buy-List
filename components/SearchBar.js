import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../app/config/colors";

export default function SearchBar() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <Ionicons name="search" style={styles.searchBoxSearchIcon} />
          <TextInput
            placeholder="Search Item"
            style={styles.textBox}
            value={text}
            onChangeText={(value) => setText(value)}
          />
          <TouchableOpacity
            style={styles.parentClearIcon}
            onPress={() => setText("")}
          >
            <MaterialIcons name="clear" style={styles.clearIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 20,
  },

  clearIcon: {
    fontSize: 30,
    color: colors.red,
  },

  header: {
    height: 60,
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  parentClearIcon: {
    marginRight: 20,
  },

  searchBox: {
    backgroundColor: colors.lightGrey,
    height: 45,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },

  searchBoxSearchIcon: {
    fontSize: 20,
    color: colors.darkGrey,
    marginLeft: 10,
  },

  textBox: {
    width:"75%",
    marginLeft: 10,
    fontSize: 15,
  },
});
