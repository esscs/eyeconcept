import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from "react-native";
// Import the JSON data
import lensData from "../assets/lensData";




export default function Shop({ navigation }) {
  const [selectedLens, setSelectedLens] = useState(null);

  const handleLensSelect = (lens) => {
    setSelectedLens(lens);
    navigation.navigate("Lens", [lens]);
  };



  const currentStyles = darkStyles ;

  return (
    <View style={currentStyles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require("../assets/EyeconceptLogo.png")}
        style={currentStyles.image}
      >
        <View style={currentStyles.header}>
          <Text style={currentStyles.heading}>Select Lens:</Text>
        </View>
        {Object.keys(lensData).map((lensType) => (
          <TouchableOpacity
            key={lensType}
            style={currentStyles.button}
            onPress={() => handleLensSelect(lensType)}
          >
            <Text style={currentStyles.buttonText}>{lensType}</Text>
          </TouchableOpacity>
        ))}
        {selectedLens && (
          <View>
            <Text style={currentStyles.selectedLens}>
              Selected Lens: {selectedLens}
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  heading: {
    fontSize: 20,
    color: "#ffffff",
    marginBottom: 10,
  },
  selectedLens: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#ffffff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(88, 88, 88, 0.56)",
    width: "100%",
    padding: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: "#ffffff",
  },
});
