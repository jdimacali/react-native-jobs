import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../hooks/useFetch";
import NearbyJobCard from "../common/NearbyJobCard";
import { COLORS, SIZES } from "../../constants";
import { JobData } from "../../types/types";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  });

  return (
    <View className="mt-6">
      <View className="flex-row justify-between align-center">
        <Text className="text-xl font-medium text-primary">Jobs Near You</Text>
        <TouchableOpacity>
          <Text className="font-medium text-md text-gray"> Show All </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text> Something Went Wrong</Text>
        ) : (
          data?.map((job: JobData) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
