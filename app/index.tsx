import { HelloWave } from "@/components/HelloWave";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HelloWave></HelloWave>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
