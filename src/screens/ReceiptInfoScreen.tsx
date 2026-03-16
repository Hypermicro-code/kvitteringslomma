import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import FieldInput from "../components/FieldInput";
import PrimaryButton from "../components/PrimaryButton";

export default function ReceiptInfoScreen({ navigation }: any) {
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <ScreenContainer>
      <Text style={styles.title}>Kvitteringsinfo</Text>

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

      <PrimaryButton
        title="Lagre"
        onPress={() => navigation.navigate("Archive")}
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
