import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import { getReceiptById } from "../data/receiptsRepo";
import type { Receipt } from "../models/Receipt";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { receiptId } = route.params;
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  useEffect(() => {
    async function loadReceipt() {
      try {
        const data = await getReceiptById(receiptId);
        setReceipt(data);
      } catch (error) {
        console.error("Kunne ikke hente kvittering:", error);
      }
    }

    loadReceipt();
  }, [receiptId]);

  if (!receipt) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Kvittering</Text>
        <Text>Laster...</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>Kvittering</Text>

      <Text style={styles.label}>Utsteder</Text>
      <Text style={styles.value}>{receipt.issuer || "Kvittering"}</Text>

      <Text style={styles.label}>Dato</Text>
      <Text style={styles.value}>{receipt.date || "Uten dato"}</Text>

      <Text style={styles.label}>Beløp</Text>
      <Text style={styles.value}>{receipt.amount || "Ikke angitt"}</Text>

      <Text style={styles.label}>Notat</Text>
      <Text style={styles.value}>{receipt.note || "Ingen notat"}</Text>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: receipt.image_path }} style={styles.image} resizeMode="contain" />
      </View>

      <PrimaryButton title="Eksporter PDF" onPress={() => Alert.alert("Kommer snart")} />

      <View style={{ height: 10 }} />

      <PrimaryButton title="Del bilde" onPress={() => Alert.alert("Kommer snart")} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#666",
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  imageWrapper: {
    height: 260,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 16,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
