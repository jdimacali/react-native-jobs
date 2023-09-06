import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../utils";

interface NearbyJobCardProps {
  job: any;
  handleNavigate: () => void;
}

const NearbyJobCard = ({ job, handleNavigate }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity
      className="flex-1 justify-between align-center flex-row p-[16px] rounded-lg bg-[#FFF] mb-4 shadow-sm"
      onPress={handleNavigate}
    >
      <TouchableOpacity className="w-[50px] h-[50px] rounded-lg justify-center items-center">
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-4/5 h-4/5 object-contain"
        />
      </TouchableOpacity>

      <View className="flex-1 mx-4">
        <Text
          className="text-[16px] font-DMBold text-primary"
          numberOfLines={1}
        >
          {job?.job_title}
        </Text>

        <Text className="text-[14px] font-DMRegular text-gray mt-3 capitalize">
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
