import {View, Text, Pressable} from 'react-native'
import React, {useContext} from 'react'
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {TimerContext} from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext)

  const handlePress = (duration: Number) => {
    setDuration(duration)
    router.back()
  }

  return (
    <View className={"flex-1 relative"}>
      <AppGradient colors={["#161p2e", "#084d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className={"absolute top-16 left-6 z-10"}
        >
          <AntDesign name={"leftcircleo"} size={50} color={"white"} />
        </Pressable>

        <View className={"justify-center h-4/5 mt-20"}>
          <Text className={"text-center font-bold text-3xl text-white mb-8"}>Adjust your meditation duration</Text>
          <CustomButton onPress={() => handlePress(10)} title={"10 Seconds"} containerStyles={"mb-5"} />
          <CustomButton onPress={() => handlePress(5 * 60)} title={"5 minutes"} containerStyles={"mb-5"} />
          <CustomButton onPress={() => handlePress(10 * 60)} title={"10 minutes"} containerStyles={"mb-5"} />
          <CustomButton onPress={() => handlePress(15 * 60)} title={"15 minutes"} containerStyles={"mb-5"} />
        </View>

      </AppGradient>
    </View>
  )
}
export default AdjustMeditationDuration
