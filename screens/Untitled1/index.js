import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.DtwZqKxl}>
      <CheckBox style={_styles.HEzqdrgK} title="Checkbox Title"></CheckBox><Slider style={_styles.hzLeHFFn} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><RadioGroup style={_styles.TVxaBzcn} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  DtwZqKxl: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  HEzqdrgK: {
    left: 105,
    top: 77,
    position: "absolute",
    width: 183,
    height: 69
  },
  hzLeHFFn: {
    left: 91,
    top: 191,
    position: "absolute",
    width: 150,
    height: 40
  },
  TVxaBzcn: {
    left: 55,
    top: 332,
    position: "absolute",
    width: 120,
    height: 70
  }
});