import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { icons } from "../../constants";
import useFetch from "../../hooks/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

// TODO: create function for handling press when the top right share icon is presssed to share with people

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
    extended_publisher_details: "true",
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    if (data != undefined) {
      switch (activeTab) {
        case "Qualifications":
          return (
            <Specifics
              title="Qualifications"
              points={
                data[0]?.["job_highlights"]?.["Qualifications"] ?? ["N/A"]
              }
            />
          );

        case "About":
          return (
            <JobAbout
              info={data[0]?.["job_description"] ?? "No data provided"}
            />
          );

        case "Responsibilities":
          return (
            <Specifics
              title="Responsibilities"
              points={
                data[0]?.["job_highlights"]?.["Responsibilities"] ?? ["N/A"]
              }
            />
          );

        default:
          return null;
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} handlePress={() => {}} />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#312651" />
          ) : error ? (
            <Text> Something Went Wrong</Text>
          ) : !data || data.length === 0 ? (
            <Text> No Data </Text>
          ) : (
            <View className="p-4 pb-[100px]">
              <Company
                companyLogo={data[0]?.["employer_logo"]}
                jobTitle={data[0]?.["job_title"]}
                companyName={data[0]?.["employer_name"]}
                location={data[0]?.["job_country"]}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
          <JobFooter
            url={
              data[0]?.["job_google_link"] ??
              "https://careers.google.com/jobs/results/"
            }
          />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};
export default JobDetails;
