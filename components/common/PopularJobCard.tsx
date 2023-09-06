import clsx from "clsx";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../utils";
import { JobData } from "../../types/types";

interface PopularJobCardProps {
  item: any;
  selectedJob: "string" | undefined;
  handleCardPress: (item: JobData) => void;
}

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      className={clsx(
        "w-[250px] p-5",
        selectedJob === item.job_id
          ? "bg-primary"
          : "bg-[#FFF] rounded-xl justify-center shadow-white"
      )}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        className={clsx(
          "w-[50px] h-[50px] rounded-lg justify-center items-center",
          selectedJob === item.job_id ? "bg-[#FFF]" : "bg-white"
        )}
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-4/5 h-4/5 object-contain"
        />
      </TouchableOpacity>
      <Text
        className="text-md font-regular text-[#B3AEC6] mt-2"
        numberOfLines={1}
      >
        {item.employer_name}
      </Text>
      <View className="mt-5">
        <Text
          className={clsx(
            "text-lg font-medium",
            selectedJob === item.job_id ? "text-white" : "text-primary"
          )}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text className="text-[14px] font-bold text-[#B3AEC6]">
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
