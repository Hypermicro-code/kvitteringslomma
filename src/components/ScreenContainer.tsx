import { SafeAreaView, StyleSheet, View } from "react-native";

export default function ScreenContainer({ children }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
