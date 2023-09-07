import { Dispatch, SetStateAction } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import clsx from "clsx";

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

interface TabsProps {}

function TabButton({ name, activeTab, onHandleSearchType }: TabButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        "py-4 px-6 rounded-2xl ml-[2px] mediumShadow shadow-white",
        name === activeTab ? "bg-primary" : "bg-[#F3F4F8]"
      )}
      onPress={onHandleSearchType}
    >
      <Text
        className={clsx(
          "font-medium text-sm",
          name === activeTab ? "text-[#F3F4F8]" : "text-primary"
        )}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <View className="mt-3 mb-1.5">
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: 6 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
