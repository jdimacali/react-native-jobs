import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { ImageSourcePropType } from "../../types/types";

interface ScreenHeaderBtn {
  iconUrl: ImageSourcePropType;
  handlePress: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, handlePress }: ScreenHeaderBtn) => {
  return (
    <TouchableOpacity
      className="w-[40px] h-[40px] bg-white justify-center rounded-[9.6px] items-center overflow-hidden"
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        className={`max-h-full max-w-full rounded-[9.6px] object-contain`}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
