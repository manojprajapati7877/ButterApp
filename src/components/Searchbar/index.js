import * as React from "react";
import { Searchbar, useTheme } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { colors } = useTheme();

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{
        backgroundColor: "white",
        width: 365,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
      inputStyle={{ color: colors.text }}
      placeholderTextColor={colors.placeholder}
    />
  );
};

export default Search;
