import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View className="mt-6">
      <View className="flex-row justify-between align-center">
        <Text className="text-xl font-medium text-primary">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="font-medium text-md text-gray"> Show All </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text> Something Went Wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
