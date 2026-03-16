import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import ScreenContainer from "../components/ScreenContainer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Camera">;

export default function CameraScreen({ navigation }: Props) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  async function handleTakePicture() {
    if (!cameraRef.current || isCapturing) return;

    try {
      setIsCapturing(true);

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
      });

      if (!photo?.uri) return;

      navigation.navigate("Preview", { imageUri: photo.uri });
    } catch (error) {
      console.error("Kunne ikke ta bilde:", error);
    } finally {
      setIsCapturing(false);
    }
  }

  if (!permission) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <Text style={styles.infoText}>Laster kameratilgang…</Text>
        </View>
      </ScreenContainer>
    );
  }

  if (!permission.granted) {
    return (
      <ScreenContainer>
        <View style={styles.centered}>
          <Text style={styles.infoText}>
            Kvitteringslomma trenger tilgang til kamera for å ta bilde av kvitteringer.
          </Text>

          <Pressable style={styles.primaryButton} onPress={requestPermission}>
            <Text style={styles.primaryButtonText}>Gi kameratilgang</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate("Archive")}>
            <Text style={styles.secondaryButtonText}>Gå til arkiv</Text>
          </Pressable>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <View style={styles.screen}>
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />

      <View style={styles.topBar}>
        <Pressable style={styles.topButton} onPress={() => navigation.navigate("Archive")}>
          <Text style={styles.topButtonText}>Arkiv</Text>
        </Pressable>
      </View>

      <View style={styles.bottomBar}>
        <Pressable
          style={[styles.captureButton, isCapturing && styles.captureButtonDisabled]}
          onPress={handleTakePicture}
          disabled={isCapturing}
        >
          <View style={styles.captureInner} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  topBar: {
    position: "absolute",
    top: 60,
    right: 16,
    left: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  topButton: {
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  topButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  bottomBar: {
    position: "absolute",
    bottom: 36,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  captureButton: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  captureButtonDisabled: {
    opacity: 0.6,
  },
  captureInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "white",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "#222",
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: "#2b7cff",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 10,
    minWidth: 180,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 10,
    minWidth: 180,
    alignItems: "center",
    backgroundColor: "white",
  },
  secondaryButtonText: {
    color: "#222",
    fontWeight: "500",
    fontSize: 16,
  },
});
