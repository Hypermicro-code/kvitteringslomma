import { Pressable, Text, StyleSheet, View } from "react-native";

export default function ReceiptRow({ receipt, onPress }: any) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View>
        <Text style={styles.issuer}>{receipt.issuer || "Kvittering"}</Text>
        <Text style={styles.date}>{receipt.date}</Text>
      </View>

      <Text style={styles.amount}>{receipt.amount}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  issuer: {
    fontWeight: "600",
    fontSize: 16,
  },
  date: {
    color: "#777",
  },
  amount: {
    fontWeight: "600",
  },
});
