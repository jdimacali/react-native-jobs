import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../hooks/useFetch";
import PopularJobCard from "../common/PopularJobCard";
import { JobData } from "../../types/types";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "Javascript ",
    page: "1",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState<string>("");

  const handleCardPress = (item: JobData) => {
    router.push(`/job-details/${item?.["job_id"]}`);
    setSelectedJob(item?.["job_id"]);
  };

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
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text> Something Went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item: JobData) => item.job_id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
