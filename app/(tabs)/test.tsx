import Calendar from "@/components/test-packages/MyBigCalendar";
import Constants from "expo-constants";
import * as Device from "expo-device";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Test() {
  return (
    <View>
      <View>
        <Text>My Calenar</Text>
        <Calendar />
      </View>

    </View>
  );
}
