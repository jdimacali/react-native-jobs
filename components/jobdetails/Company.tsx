import { View, Text, Image } from "react-native";

import { icons } from "../../constants";
import { checkImageURL } from "../../utils";

interface CompanyProps {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
}

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}: CompanyProps) => {
  return (
    <View className="my-4 justify-center items-center">
      <View className="w-20 h-20 justify-center items-center bg-[#FFF] rounded-[20px]">
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          className="w-4/5 h-4/5"
        />
      </View>

      <View className="mt-3">
        <Text className="text-lg text-primary font-bold text-center">
          {jobTitle}
        </Text>
      </View>

      <View className="mt-1.5 flex-row justify-center items-center">
        <Text className="text-[14px] text-primary font-medium">
          {companyName} /
        </Text>
        <View className="flex-row justify-center items-center">
          <Image
            source={icons.location}
            resizeMode="contain"
            className="w-[14px] h-[14px]"
          />
          <Text className="text-[14px] text-gray ml-[2px]">{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
