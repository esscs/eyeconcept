import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// Import the JSON data

const lensData = {
  essilor_single_vision_lens: {
    options: {
      single_vision_standard: 148,
      eyezan: 248,
      stellest_w_crizal_rock: 650,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      tl16_max_4: 80,
      tl167_max_7: 190,
      tl174_max_4: 210,
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
      solid_tint_gradient_tint: {
        solid_tint: 70,
        gradient_tint: 90,
      },
      solid_polarized_gradient_polarized: {
        solid_polarized: 149,
        gradient_polarized: 209,
      },
      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
      extras: {
        high_cyl: 40,
        prism_charge: 60,
        any_custom_shape_sizing: 50,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 80,
        custom_polarized_clip_on: 169,
      },
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
      tl16_max_4: 80,
      tl167_max_7: 190,
      tl174_max_4: 210,
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
      solid_tint_gradient_tint: {
        solid_tint: 70,
        gradient_tint: 90,
      },
      solid_polarized_gradient_polarized: {
        solid_polarized: 149,
        gradient_polarized: 209,
      },
      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
      extras: {
        high_cyl: 40,
        prism_charge: 60,
        any_custom_shape_sizing: 50,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 80,
        custom_polarized_clip_on: 169,
      },
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
      tl16_max_4: 80,
      tl167_max_7: 190,
    },
    coatings: {
      crizal_rock: 249,
      crizal_prevencia: 298,
    },
    add_ons: {
      solid_tint_gradient_tint: {
        solid_tint: 70,
        gradient_tint: 90,
      },
      solid_polarized_gradient_polarized: {
        solid_polarized: 149,
        gradient_polarized: 209,
      },
      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      "transitions_xtractive_2.0": 198,
      extras: {
        high_cyl: 40,
        prism_charge: 60,
        any_custom_shape_sizing: 50,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 80,
        custom_polarized_clip_on: 169,
      },
    },
  },
  essilor_computer_progressive_lens: {
    options: {
      distinctive_computer: 298,
      varilux_digitime: 448,
    },
    hi_index_material: {
      "polycarbonate_1.59": 50,
      tl16_max_4: 80,
      tl167_max_7: 190,
      tl174_max_4: 210,
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
      extras: {
        high_cyl: 40,
        prism_charge: 60,
        any_custom_shape_sizing: 50,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 80,
        custom_polarized_clip_on: 169,
      },
    },
  },
  "essilor_line_bi-focal_lens": {
    ft_28: 219,
    ft_35: 219,
    round_seg: 219,
    hi_index_material: {
      "polycarbonate_1.59": 50,
      tl16_max_4: 80,
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
      solid_tint_gradient_tint: {
        solid_tint: 70,
        gradient_tint: 90,
      },
      solid_polarized_gradient_polarized: {
        solid_polarized: 149,
        gradient_polarized: 209,
      },
      any_custom_tints_colors: 130,
      transitions_gen_s: 149,
      extras: {
        high_cyl: 40,
        prism_charge: 60,
        any_custom_shape_sizing: 50,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 80,
        custom_polarized_clip_on: 169,
      },
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
      transitions_gen_s: {
        gray_black_brown: 200,
        special_colors: 300,
      },
      custom_engraving: {
        "2_letters": 100,
        "4_letters": 150,
        more_than_4_letters: 200,
        colour_in_engraving_gold_silver: 50,
      },
      extras: {
        high_cyl: 80,
        prism_charge: 100,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 100,
      },
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
      transitions_gen_s: {
        gray_black_brown: 200,
        special_colors: 300,
      },
      custom_engraving: {
        "2_letters": 100,
        "4_letters": 150,
        more_than_4_letters: 200,
        colour_in_engraving_gold_silver: 50,
      },
      extras: {
        high_cyl: 80,
        prism_charge: 100,
        patient_own_frame_lab_charge_edging_mounting: 50,
        patient_own_frame_lab_charge_drilling_mounting: 100,
      },
    },
  },
};

export default function Shop({ navigation }) {
  const [selectedLens, setSelectedLens] = useState(null);

  const handleLensSelect = (lens) => {
    setSelectedLens(lens);
    navigation.navigate("Lens", [lens]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require("../assets/EyeconceptLogo.png")}
        style={styles.image}
      >
        <Text style={styles.heading}>Select Lens:</Text>
        {Object.keys(lensData).map((lensType) => (
          <TouchableOpacity
            key={lensType}
            style={{
              alignItems: "center",
              backgroundColor: "rgba(223, 223, 223, 0.56)",

              width: "100%",
              padding: 20,
            }}
            onPress={() => handleLensSelect(lensType)}
          >
            <Text>{lensType}</Text>
          </TouchableOpacity>
          // <Button
          //   key={lensType}
          //   title={lensType}
          //   color="#841584"
          //   onPress={() => handleLensSelect(lensType)}
          // />
        ))}
        {selectedLens && (
          <View>
            <Text style={styles.selectedLens}>
              Selected Lens: {selectedLens}
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectedLens: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
