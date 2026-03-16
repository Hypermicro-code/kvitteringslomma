import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import { getReceiptById } from "../data/receiptsRepo";
import type { Receipt } from "../models/Receipt";
import { shareImage, shareReceiptPdf } from "../utils/export";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { receiptId } = route.params;
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [isSharingImage, setIsSharingImage] = useState(false);
  const [isSharingPdf, setIsSharingPdf] = useState(false);

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

  async function handleShareImage() {
    if (!receipt || isSharingImage) return;

    try {
      setIsSharingImage(true);
      await shareImage(receipt.image_path);
    } catch (error) {
      console.error("Kunne ikke dele bilde:", error);
      Alert.alert("Feil", "Kunne ikke dele bildet.");
    } finally {
      setIsSharingImage(false);
    }
  }

  async function handleSharePdf() {
    if (!receipt || isSharingPdf) return;

    try {
      setIsSharingPdf(true);
      await shareReceiptPdf(receipt);
    } catch (error) {
      console.error("Kunne ikke dele PDF:", error);
      Alert.alert("Feil", "Kunne ikke lage eller dele PDF.");
    } finally {
      setIsSharingPdf(false);
    }
  }

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

      <PrimaryButton
        title={isSharingPdf ? "Lager PDF..." : "Del PDF"}
        onPress={handleSharePdf}
      />

      <View style={{ height: 10 }} />

      <PrimaryButton
        title={isSharingImage ? "Deler bilde..." : "Del bilde"}
        onPress={handleShareImage}
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
