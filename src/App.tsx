import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArchiveScreen from "./src/screens/ArchiveScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ReceiptInfoScreen from "./src/screens/ReceiptInfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Archive" component={ArchiveScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Info" component={ReceiptInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
