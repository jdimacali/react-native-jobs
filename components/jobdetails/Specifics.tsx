import React from "react";
import { View, Text } from "react-native";

interface SpecificsProps {
  title: "Qualifications" | "Responsibilities";
  points: [];
}

const Specifics = ({ title, points }: SpecificsProps) => {
  return (
    <View className="mt-5 bg-[#FFF] rounded-[16px] p-4">
      <Text className="text-xl text-primary font-bold">{title}:</Text>

      <View className="my-3">
        {points.map((item, index) => (
          <View
            className="flex-row justify-start items-start my-[9.6px]"
            key={item + index}
          >
            <View className="w-[6px] h-[6px] rounded-[6px] bg-gray2 mt-[6px]" />
            <Text className="text-[14px] text-gray font-regular ml-3">
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
