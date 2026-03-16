import { Image, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Preview">;

export default function PreviewScreen({ route, navigation }: Props) {
  const { imageUri } = route.params;

  return (
    <ScreenContainer>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.buttonGroup}>
        <SecondaryButton title="Ta nytt" onPress={() => navigation.goBack()} />
        <View style={styles.spacer} />
        <PrimaryButton
          title="Fortsett"
          onPress={() => navigation.navigate("Info", { imageUri })}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonGroup: {
    paddingBottom: 8,
  },
  spacer: {
    height: 10,
  },
});
