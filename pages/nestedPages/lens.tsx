import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import lensData from "../../assets/lensData";
import CheckBox from "expo-checkbox";
// LensData object from your code


// LensData object from your code

export default function Lens({ navigation, route }) {
  const [totalPriceOption, setTotalPriceOption] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState({});

  const lensType = route.params;

  const handleCheckBoxChange = (heading,option, price) => {
    const updatedOptions = {
      ...selectedOptions,
      [option]: !selectedOptions[option],
    };
    setSelectedOptions(updatedOptions);
 
    let newTotalPrice = 0;
    console.log(option,price, selectedOptions)
    Object.entries(lensData[lensType]).forEach(([headings, data]) =>{
      Object.entries(updatedOptions).forEach(([opt, isSelected]) => {
        console.log(lensData[lensType][headings][opt])
        
        if (isSelected && lensData[lensType][headings][opt] != undefined) {
          newTotalPrice += lensData[lensType][headings][opt];
        }
      });
  

    }  )
    setTotalPriceOption(newTotalPrice);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Selected Lens Type: {lensType}</Text>
      {Object.entries(lensData[lensType]).map(([heading, price]) => (
        <View key={heading}>
              <Text style={styles.sectionHeading}>{heading}:</Text>


           {   Object.entries(lensData[lensType][heading]).map(([option, price]) => (
            <View key={option} style={styles.optionContainer}>
              <CheckBox
                value={selectedOptions[option]}
                onValueChange={() => handleCheckBoxChange(heading,option, price)}
                style={styles.checkBox}
              />
              <Text style={styles.optionText}>{option}</Text>
              <Text style={styles.priceText}>${price}</Text>
            </View>
          ))}
            </View>
          ))}

      <Text style={styles.totalPrice}>
        Total Price:$
        {totalPriceOption }
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    color: "#ffffff",
  },
  sectionHeading: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#ffffff",
  },
  optionContainer: {
    flexDirection: "row",
    paddingBottom: 7,
    backgroundColor: "#1e1e1e",
    borderBottomColor: "#333333",
    borderWidth: 1,
    width: "100%",
  },
  checkBox: {
    alignSelf: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center",
    textAlign: "center",
    width: "80%",
  },
  priceText: {
    fontSize: 18,
    color: "#ffffff",
    marginLeft: "auto",
    marginRight: 5,
  },
  totalPrice: {
    fontSize: 20,
    paddingBottom: 25,
    color: "#ffffff",
  },
});
