import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import clsx from "clsx";

import { icons } from "../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View className="w-full">
        <Text className="text-lg font-regular text-secondary">Hello James</Text>
        <Text className="text-xl font-bold text-primary mt-2">
          Find your perfect job
        </Text>
      </View>
      <View className="justify-center items-center flex-row mt-[20] h-[50px]">
        <View className="flex-1 bg-white mr-12 justify-center rounded-lg h-full">
          <TextInput
            className="font-regular w-full h-full p-x-4"
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity className="w-[50px] h-full bg-tertiary rounded-xl justify-center items-center">
          <Image
            source={icons.search}
            resizeMode="contain"
            className="w-1/2 h-1/2 font-white-900"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full mt-4 flex-row">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={clsx(
                "px-[12px] py-[6px] rounded-3xl border border-black ",
                activeJobType === item ? "text-secondary" : "text-gray2"
              )}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={clsx(
                  "font-medium",
                  activeJobType === item ? "text-blue" : "text-gray2"
                )}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 12 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
