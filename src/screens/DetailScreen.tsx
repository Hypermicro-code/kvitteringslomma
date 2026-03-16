import { View, Text, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";

export default function DetailScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Kvittering</Text>

      <Text>Utsteder: Oslo Taxi</Text>
      <Text>Dato: 12.03.2026</Text>
      <Text>Beløp: 345 NOK</Text>
      <Text>Notat: Flyplass</Text>

      <View style={{ height: 20 }} />

      <PrimaryButton title="Eksporter PDF" onPress={() => {}} />

      <View style={{ height: 10 }} />

      <PrimaryButton title="Del bilde" onPress={() => {}} />
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
