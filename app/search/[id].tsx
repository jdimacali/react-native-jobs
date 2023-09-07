import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { icons } from "../../constants";

import { RAPID_API_KEY } from "@env";
import { JobData } from "../../types/types";

const rapidApiKey = RAPID_API_KEY;

const JobSearch = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState<JobData[]>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState();
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error: any) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: "left" | "right") => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() =>
              router.push(`/job-details/${item?.["job_id"]}`)
            }
          />
        )}
        keyExtractor={(item) => item?.["job_id"]}
        contentContainerStyle={{ padding: 16, rowGap: 16 }}
        ListHeaderComponent={() => (
          <>
            <View className="w-full">
              <Text className="font-bold text-2xl text-primary">
                {params.id}
              </Text>
              <Text className="mt-[2px] font-medium text-sm text-primary">
                Job Opportunities
              </Text>
            </View>
            <View className="mt-4">
              {searchLoader ? (
                <ActivityIndicator size="large" color="#312651" />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="mt-3 justify-center items-center flex-row gap-[10px]">
            <TouchableOpacity
              className="w-7 h-7 rounded-[5px] justify-center items-center bg-tertiary"
              onPress={() => handlePagination("left")}
            >
              <Image
                source={icons.chevronLeft}
                className="w-3/5 h-3/5"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-7 h-7 rounded-[2px] justify-center items-center bg-white">
              <Text className="font-bold text-[16px] text-primary">{page}</Text>
            </View>
            <TouchableOpacity
              className="w-7 h-7 rounded-[5px] justify-center items-center bg-tertiary"
              onPress={() => handlePagination("right")}
            >
              <Image
                source={icons.chevronRight}
                className="w-3/5 h-3/5"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
