import { Pressable, Text, StyleSheet } from "react-native";

export default function SecondaryButton({ title, onPress }: any) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
