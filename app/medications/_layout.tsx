import { Stack } from "expo-router";
import { translations } from "@/constants/translations";

export default function MedicationsLayout() {
  return (
    <Stack>
      <Stack.Screen name="add" options={{ headerShown: true }} />
      <Stack.Screen name="[id]" options={{ headerShown: true }} />
    </Stack>
  );
}
