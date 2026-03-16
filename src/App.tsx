import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArchiveScreen from "./src/screens/ArchiveScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ReceiptInfoScreen from "./src/screens/ReceiptInfoScreen";
import CameraScreen from "./src/screens/CameraScreen";
import PreviewScreen from "./src/screens/PreviewScreen";
import { initDatabase } from "./src/data/receiptsRepo";

export type RootStackParamList = {
  Camera: undefined;
  Preview: { imageUri: string };
  Info: { imageUri?: string } | undefined;
  Archive: { refresh?: number } | undefined;
  Detail: { receiptId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    initDatabase().catch((error) => {
      console.error("Kunne ikke initialisere database:", error);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Kvitteringslomma" }}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={{ title: "Forhåndsvisning" }}
        />
        <Stack.Screen
          name="Info"
          component={ReceiptInfoScreen}
          options={{ title: "Kvitteringsinfo" }}
        />
        <Stack.Screen
          name="Archive"
          component={ArchiveScreen}
          options={{ title: "Arkiv" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Kvittering" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
