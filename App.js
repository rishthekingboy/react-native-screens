import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyTabs from "./components/BottomNavigations";
import SpotifySearch from "./screens/SpotifySearch";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <SpotifySearch />
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View> */}
      <MyTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : 0,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// for handling 3 fingure touch warnings
console.reportErrorsAsExceptions = false;
