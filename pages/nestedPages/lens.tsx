import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import CheckBox from "expo-checkbox";
// LensData object from your code
const lensData = {
  essilor_single_vision_lens: {
    options: {
      single_vision_standard: 148,
      eyezan: 248,
      stellest_w_crizal_rock: 650,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      "TL 1.6": 80,
      "TL 1.67": 190,
      "TL 1.74": 210,
    },
    coatings: {
      hard_coat_hc: 49,
      hmc_ec_anti_glare_anti_scratch: 98,
      hmc_ec_blue_capture: 148,
      crizal_easy_pro: 198,
      crizal_rock: 249,
      crizal_prevencia: 298,
      crizal_mirror_coating_hmc_sun: 298,
    },
    add_ons: {
      solid_tint: 70,
      gradient_tint: 90,
      solid_polarized: 149,
      gradient_polarized: 209,
      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
    },
    extras: {
      high_cyl: 40,
      prism_charge: 60,
      any_custom_shape_sizing: 50,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 80,
      custom_polarized_clip_on: 169,
    },
  },
  essilor_progressive_lens: {
    options: {
      ds_one: 298,
      distinctive_expand_iv: 398,
      distinctive_superior: 498,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      "TL 1.6": 80,
      "TL 1.67": 190,
      "TL 1.74": 210,
    },
    coatings: {
      hard_coat_hc: 49,
      hmc_ec_anti_glare_anti_scratch: 98,
      hmc_ec_blue_capture: 148,
      crizal_easy_pro: 198,
      crizal_rock: 249,
      crizal_prevencia: 298,
      crizal_mirror_coating_hmc_sun: 298,
    },
    add_ons: {
      solid_tint: 70,
      gradient_tint: 90,

      solid_polarized: 149,
      gradient_polarized: 209,

      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
    },
    extras: {
      high_cyl: 40,
      prism_charge: 60,
      any_custom_shape_sizing: 50,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 80,
      custom_polarized_clip_on: 169,
    },
  },
  essilor_varilux_progressive_lens: {
    options: {
      "varilux_physio_3.0": 598,
      varilux_e_series: 698,
      varilux_x_series: 898,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      "TL 1.6": 80,
      "TL 1.67": 190,
    },
    coatings: {
      crizal_rock: 249,
      crizal_prevencia: 298,
    },
    add_ons: {
      solid_tint: 70,
      gradient_tint: 90,

      solid_polarized: 149,
      gradient_polarized: 209,

      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
    },
    extras: {
      high_cyl: 40,
      prism_charge: 60,
      any_custom_shape_sizing: 50,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 80,
      custom_polarized_clip_on: 169,
    },
  },
  essilor_computer_progressive_lens: {
    options: {
      distinctive_computer: 298,
      varilux_digitime: 448,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      "TL 1.6": 80,
      "TL 1.67": 190,
      "TL 1.74": 210,
    },
    coatings: {
      hard_coat_hc: 49,
      hmc_ec_anti_glare_anti_scratch: 98,
      hmc_ec_blue_capture: 148,
      crizal_easy_pro: 198,
      crizal_rock: 249,
      crizal_prevencia: 298,
      crizal_mirror_coating_hmc_sun: 298,
    },
    add_ons: {
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
    },
    extras: {
      high_cyl: 40,
      prism_charge: 60,
      any_custom_shape_sizing: 50,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 80,
      custom_polarized_clip_on: 169,
    },
  },
  "essilor_line_bi-focal_lens": {
    options: {
      "FT 28": 219,
      "FT 35": 219,
      "Round Seg": 219,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      "TL 1.6": 80,
    },
    coatings: {
      hard_coat_hc: 49,
      hmc_ec_anti_glare_anti_scratch: 98,
      hmc_ec_blue_capture: 148,
      crizal_easy_pro: 198,
      crizal_rock: 249,
      crizal_prevencia: 298,
      crizal_mirror_coating_hmc_sun: 298,
    },
    add_ons: {
      solid_tint: 70,
      gradient_tint: 90,
      solid_polarized: 149,
      gradient_polarized: 209,

      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
    },
    extras: {
      high_cyl: 40,
      prism_charge: 60,
      any_custom_shape_sizing: 50,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 80,
      custom_polarized_clip_on: 169,
    },
  },
  custom_cartier_single_vision_lens: {
    options: {
      custom_single_vision_non_diamond_cut_less_2: 550,
      custom_single_vision_diamond_cut_less_2: 750,
    },
    hi_index_material: {
      hi_index_thinner_lenses_2_to_4: 150,
      hi_index_thinner_lenses_4_to_6: 200,
      hi_index_thinner_lenses_greater_6: 250,
    },
    coatings: {
      ar_coating: 150,
    },
    add_ons: {
      gray_black_brown: 200,
      special_colors: 300,

      "custom_engraving 2_letters": 100,
      "custom_engraving 4_letters": 150,
      "custom_engraving more_than_4_letters": 200,
      colour_in_engraving_gold_silver: 50,
    },
    extras: {
      high_cyl: 80,
      prism_charge: 100,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 100,
    },
  },
  custom_cartier_progressive_lens: {
    options: {
      custom_progressive_standard_non_diamond_cut_less_2: 1100,
      "custom_progressive_varilux_physio_3.0_non_diamond_cut_less_2": 1400,
      custom_progressive_standard_diamond_cut_less_2: 1200,
      "custom_progressive_varilux_physio_3.0_diamond_cut_less_2": 1500,
    },
    hi_index_material: {
      hi_index_thinner_lenses_2_to_4: 150,
      hi_index_thinner_lenses_4_to_6: 200,
      hi_index_thinner_lenses_greater_6: 250,
    },
    coatings: {
      ar_coating: 150,
    },
    add_ons: {
    
      transitions_gen_s_gray_black_brown: 200,
      transitions_gen_s_special_colors: 300,
      

      "custom_engraving 2_letters": 100,
      "custom_engraving 4_letters": 150,
      "custom_engraving more_than_4_letters": 200,
      colour_in_engraving_gold_silver: 50,
    },
    extras: {
      high_cyl: 80,
      prism_charge: 100,
      patient_own_frame_lab_charge_edging_mounting: 50,
      patient_own_frame_lab_charge_drilling_mounting: 100,
    },
  },
};

export default function Lens({ navigation, route }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceOption, setTotalPriceOption] = useState(0);
  const [totalPriceMat, setTotalPriceMat] = useState(0);
  const [totalPriceCoating, setTotalPriceCoating] = useState(0);
  const [totalPriceAddons, setTotalPriceAddons] = useState(0);
  const [totalPriceExtra, setTotalPriceExtra] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedOptionsMat, setSelectedOptionsMat] = useState({});
  const [selectedOptionsCoating, setSelectedOptionsCoating] = useState({});
  const [selectedOptionsAddons, setSelectedOptionsAddons] = useState({});
  const [selectedOptionsExtra, setSelectedOptionsExtra] = useState({});

  const lensType = route.params;

  // Function to handle checkbox change
  const handleCheckBoxChange = (option, price) => {
    const updatedOptions = {
      ...selectedOptions,
      [option]: !selectedOptions[option],
    };
    setSelectedOptions(updatedOptions);

    // Calculate total price based on selected options
    let newTotalPrice = 0;
    Object.entries(updatedOptions).forEach(([opt, isSelected]) => {
      if (isSelected) {
        newTotalPrice += lensData[lensType].options[opt];
      }
    });
    setTotalPriceOption(newTotalPrice);
  };

  const handleCheckBoxChangeMaterial = (option, price) => {
    const updatedOptionsMat = {
      ...selectedOptionsMat,
      [option]: !selectedOptionsMat[option],
    };
    setSelectedOptionsMat(updatedOptionsMat);

    // Calculate total price based on selected options
    let newTotalPrice = 0;
    Object.entries(updatedOptionsMat).forEach(([opt, isSelected]) => {
      if (isSelected) {
        newTotalPrice += lensData[lensType].hi_index_material[opt];
      }
    });
    setTotalPriceMat(newTotalPrice);
  };

  const handleCheckBoxChangeCoating = (option, price) => {
    const updatedOptionsCoating = {
      ...selectedOptionsCoating,
      [option]: !selectedOptionsCoating[option],
    };
    setSelectedOptionsCoating(updatedOptionsCoating);

    // Calculate total price based on selected options
    let newTotalPrice = 0;
    Object.entries(updatedOptionsCoating).forEach(([opt, isSelected]) => {
      if (isSelected) {
        newTotalPrice += lensData[lensType].coatings[opt];
      }
    });
    setTotalPriceCoating(newTotalPrice);
  };

  const handleCheckBoxChangeAddons = (option, price) => {
    const updatedOptionsAddons = {
      ...selectedOptionsAddons,
      [option]: !selectedOptionsAddons[option],
    };
    setSelectedOptionsAddons(updatedOptionsAddons);

    // Calculate total price based on selected options
    let newTotalPrice = 0;
    Object.entries(updatedOptionsAddons).forEach(([opt, isSelected]) => {
      if (isSelected) {
        newTotalPrice += lensData[lensType].add_ons[opt];
      }
    });
    setTotalPriceAddons(newTotalPrice);
  };

  const handleCheckBoxChangeExtra = (option, price) => {
    const updatedOptionsExtra = {
      ...selectedOptionsExtra,
      [option]: !selectedOptionsExtra[option],
    };
    setSelectedOptionsExtra(updatedOptionsExtra);

    // Calculate total price based on selected options
    let newTotalPrice = 0;
    Object.entries(updatedOptionsExtra).forEach(([opt, isSelected]) => {
      if (isSelected) {
        newTotalPrice += lensData[lensType].extras[opt];
      }
    });
    setTotalPriceExtra(newTotalPrice);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Selected Lens Type: {lensType}</Text>

      {/* Render options based on selected lens type */}
      {lensData[lensType] && (
        <View>
          <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5 }}>
            Option:
          </Text>
          {Object.entries(lensData[lensType].options).map(([option, price]) => (
            <View
              key={option}
              style={{
                flexDirection: "row",
                paddingBottom: 7,
                backgroundColor: "#DDDDDD",
                borderBottomColor: "black",
                borderWidth: 1,
                width: "100%",
              }}
            >
              <CheckBox
                value={selectedOptions[option]}
                onValueChange={() => handleCheckBoxChange(option, price)}
                style={{
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                {option}
              </Text>
              <Text
                style={{
                  fontSize: 18,

                  marginLeft: "auto",
                  marginRight: 5,
                }}
              >
                ${price}
              </Text>
            </View>
          ))}
          <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5 }}>
            Hi Index / Material:
          </Text>
          {Object.entries(lensData[lensType].hi_index_material).map(
            ([option, price]) => (
              <View
                key={option}
                style={{
                  flexDirection: "row",
                  paddingBottom: 7,
                  backgroundColor: "#DDDDDD",
                  borderBottomColor: "black",
                  borderWidth: 1,
                  width: "100%",
                }}
              >
                <CheckBox
                  value={selectedOptionsMat[option]}
                  onValueChange={() =>
                    handleCheckBoxChangeMaterial(option, price)
                  }
                  style={{
                    alignContent: "center",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    alignSelf: "center",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  {option}
                </Text>
                <Text
                  style={{
                    fontSize: 18,

                    marginLeft: "auto",
                    marginRight: 5,
                  }}
                >
                  ${price}
                </Text>
              </View>
            )
          )}
          <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5 }}>
            Coating:
          </Text>
          {Object.entries(lensData[lensType].coatings).map(
            ([option, price]) => (
              <View
                key={option}
                style={{
                  flexDirection: "row",
                  paddingBottom: 7,
                  backgroundColor: "#DDDDDD",
                  borderBottomColor: "black",
                  borderWidth: 1,
                  width: "100%",
                }}
              >
                <CheckBox
                  value={selectedOptionsCoating[option]}
                  onValueChange={() =>
                    handleCheckBoxChangeCoating(option, price)
                  }
                  style={{
                    alignContent: "center",
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    alignSelf: "center",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  {option}
                </Text>
                <Text
                  style={{
                    fontSize: 18,

                    marginLeft: "auto",
                    marginRight: 5,
                  }}
                >
                  ${price}
                </Text>
              </View>
            )
          )}
          <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5 }}>
            add ons:
          </Text>
          {Object.entries(lensData[lensType].add_ons).map(([option, price]) => (
            <View
              key={option}
              style={{
                flexDirection: "row",
                paddingBottom: 7,
                backgroundColor: "#DDDDDD",
                borderBottomColor: "black",
                borderWidth: 1,
                width: "100%",
              }}
            >
              <CheckBox
                value={selectedOptionsAddons[option]}
                onValueChange={() => handleCheckBoxChangeAddons(option, price)}
                style={{
                  alignContent: "center",
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  textAlign: "center",
                  width: "80%",
                }}
              >
                {option}
              </Text>
              <Text
                style={{
                  fontSize: 18,

                  marginLeft: "auto",
                  marginRight: 5,
                }}
              >
                ${price}
              </Text>
            </View>
          ))}
          <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5 }}>
            Extras:
          </Text>
          {Object.entries(lensData[lensType].extras).map(([option, price]) => (
            <View
              key={option}
              style={{
                flexDirection: "row",
                paddingBottom: 7,
                backgroundColor: "#DDDDDD",
                borderBottomColor: "black",
                borderWidth: 1,
                width: "100%",
              }}
            >
              <CheckBox
                value={selectedOptionsExtra[option]}
                onValueChange={() => handleCheckBoxChangeExtra(option, price)}
                style={{
                  alignContent: "center",
                }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: 18,
                  width: "80%",
                }}
              >
                {option}
              </Text>
              <Text
                style={{
                  fontSize: 18,

                  marginLeft: "auto",
                  marginRight: 5,
                }}
              >
                ${price}
              </Text>
            </View>
          ))}
        </View>
      )}

      <Text style={{ fontSize: 20, paddingBottom: 25 }}>
        Total Price:$
        {totalPriceOption +
          totalPriceCoating +
          totalPriceMat +
          totalPriceAddons +
          totalPriceExtra}
      </Text>
    </ScrollView>
  );
}
