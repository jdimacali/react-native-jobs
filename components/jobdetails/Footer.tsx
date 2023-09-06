import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "../../constants";

interface FooterProps {
  url: string;
}

const Footer = ({ url }: FooterProps) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 p-3 bg-[#FFF] justify-between items-center flex-row">
      <TouchableOpacity className="w-[55px] h-[55px] border-[1px] border-[#F37453] rounded-[16px] justify-center items-center">
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          className="w-2/5 h-2/5"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 bg-[#FE7654] h-full justify-center items-center ml-4 rounded-2xl"
        onPress={() => Linking.openURL(url)}
      >
        <Text className="text-[16px] text-white font-bold">Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
