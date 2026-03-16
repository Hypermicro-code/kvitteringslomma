import { useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import FieldInput from "../components/FieldInput";
import PrimaryButton from "../components/PrimaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Info">;

export default function ReceiptInfoScreen({ navigation, route }: Props) {
  const imageUri = route.params?.imageUri;

  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  function handleSave() {
    console.log("TODO save receipt", {
      imageUri,
      issuer,
      date,
      amount,
      note,
    });

    navigation.navigate("Archive");
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

      <PrimaryButton title="Lagre" onPress={handleSave} />
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
