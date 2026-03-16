import { View, Text, FlatList, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import ReceiptRow from "../components/ReceiptRow";
import PrimaryButton from "../components/PrimaryButton";

const dummyReceipts = [
  { id: "1", issuer: "Oslo Taxi", date: "12 Mar", amount: "345 NOK" },
  { id: "2", issuer: "Clas Ohlson", date: "03 Jun", amount: "1299 NOK" },
  { id: "3", issuer: "Power", date: "01 Jan", amount: "599 NOK" },
];

export default function ArchiveScreen({ navigation }: any) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Arkiv</Text>

      <FlatList
        data={dummyReceipts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReceiptRow
            receipt={item}
            onPress={() => navigation.navigate("Detail")}
          />
        )}
      />

      <PrimaryButton
        title="Ny kvittering"
        onPress={() => navigation.navigate("Info")}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
});
