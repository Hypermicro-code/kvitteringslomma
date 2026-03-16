import { Pressable, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress }: any) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2b7cff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
