import { useCallback, useState } from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ScreenContainer from "../components/ScreenContainer";
import ReceiptRow from "../components/ReceiptRow";
import PrimaryButton from "../components/PrimaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import { getReceipts } from "../data/receiptsRepo";
import type { Receipt } from "../models/Receipt";

type Props = NativeStackScreenProps<RootStackParamList, "Archive">;

export default function ArchiveScreen({ navigation }: Props) {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  async function loadReceipts() {
    try {
      const data = await getReceipts();
      setReceipts(data);
    } catch (error) {
      console.error("Kunne ikke hente kvitteringer:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadReceipts();
    }, [])
  );

  return (
    <ScreenContainer>
      <Text style={styles.title}>Arkiv</Text>

      {receipts.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Ingen kvitteringer lagret ennå</Text>
          <Text style={styles.emptyText}>Ta første bilde for å komme i gang.</Text>
        </View>
      ) : (
        <FlatList
          data={receipts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReceiptRow
              receipt={{
                issuer: item.issuer || "Kvittering",
                date: item.date || "Uten dato",
                amount: item.amount || "",
              }}
              onPress={() => navigation.navigate("Detail", { receiptId: item.id })}
            />
          )}
        />
      )}

      <PrimaryButton
        title="Ny kvittering"
        onPress={() => navigation.navigate("Camera")}
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
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});
