import { View, Text } from "react-native";

interface AboutProps {
  info: string;
}

const About = ({ info }: AboutProps) => {
  return (
    <View className="mt-5 bg-[#FFF] rounded-[16px] p-4">
      <Text className="text-xl text-primary font-bold">About the job:</Text>

      <View className="my-3">
        <Text className="text-[14px] text-gray my-[9.6px]">{info}</Text>
      </View>
    </View>
  );
};

export default About;
