import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  View,
  FlatList,
} from "react-native";
import SearchBar from "./components/SearchBar";
import colors from "./app/config/colors";
import Header from "./components/Header";
import AddList from "./components/AddList";
import React, { useState } from "react";
import ToBuyItems from "./components/ToBuyItems";

export default function App() {
  const list = [
    {
      id: "1",
      text: "Milk",
    },
    {
      id: "2",
      text: "Coffee",
    },
  ];

  const [toBuy, setToBuy] = useState(list);

  const submitHandler = (text) => {
    setToBuy((preToBuy) => {
      return [
        { text: text, key: Math.random().toString() },
        ...preToBuy
      ];
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View animation="slideInRight">
        <SearchBar />
      </View>

      <Header title="Your List" />
      <View style={styles.addList}>
        <AddList submitHandler={submitHandler} />
      </View>

      <View style={styles.list}>
        <FlatList
          data={toBuy}
          renderItem={({ item }) => <ToBuyItems item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  addList: {
    alignSelf: "center",
    marginHorizontal:20,
  },

  list: {
    padding: 20,
    bottom: 40,
  },
});
