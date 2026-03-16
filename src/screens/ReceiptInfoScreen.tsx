import { useState } from "react";
import { Text, StyleSheet, Image, View, Alert } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import FieldInput from "../components/FieldInput";
import PrimaryButton from "../components/PrimaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";
import { copyImageToReceiptsDir } from "../utils/storage";
import { saveReceipt } from "../data/receiptsRepo";

type Props = NativeStackScreenProps<RootStackParamList, "Info">;

export default function ReceiptInfoScreen({ navigation, route }: Props) {
  const imageUri = route.params?.imageUri;

  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave() {
    if (!imageUri || isSaving) return;

    try {
      setIsSaving(true);

      const permanentImagePath = await copyImageToReceiptsDir(imageUri);

      const receiptId = `receipt_${Date.now()}`;
      const createdAt = new Date().toISOString();

      await saveReceipt({
        id: receiptId,
        image_path: permanentImagePath,
        issuer: issuer.trim(),
        date: date.trim(),
        amount: amount.trim(),
        note: note.trim(),
        created_at: createdAt,
      });

      navigation.navigate("Archive", { refresh: Date.now() });
    } catch (error) {
      console.error("Kunne ikke lagre kvittering:", error);
      Alert.alert("Feil", "Kunne ikke lagre kvitteringen.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>Kvitteringsinfo</Text>

      {imageUri ? (
        <View style={styles.previewWrapper}>
          <Image source={{ uri: imageUri }} style={styles.previewImage} resizeMode="cover" />
        </View>
      ) : null}

      <FieldInput
        label="Utsteder"
        value={issuer}
        onChangeText={setIssuer}
        placeholder="f.eks. Elkjøp"
      />

      <FieldInput
        label="Dato"
        value={date}
        onChangeText={setDate}
        placeholder="dd.mm.åååå"
      />

      <FieldInput
        label="Beløp"
        value={amount}
        onChangeText={setAmount}
        placeholder="f.eks. 349.00"
      />

      <FieldInput
        label="Notat"
        value={note}
        onChangeText={setNote}
        placeholder="valgfritt"
      />

      <PrimaryButton title={isSaving ? "Lagrer..." : "Lagre"} onPress={handleSave} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  previewWrapper: {
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: 16,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
});
