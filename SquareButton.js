import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';

const SquareButton = ({ btnObj}) => {
  const { bgColor, text, width, height, logo, textColor, borderColor, borderWidth } = btnObj;
 
  return (
    <View style={[styles.mainContainer, {width:width,height:height}]}>




      <TouchableOpacity onPress={() => { }} style={[styles.btnContainer,{backgroundColor:bgColor, borderColor: borderColor, borderWidth: borderWidth}]}>
        <View>
          <Text style={[styles.btnText,{color:textColor}]}>{logo} {text}</Text>
        </View>
      </TouchableOpacity>


    </View>
  )
}

const styles = {
  mainContainer: {
    flexDirection: 'row',
    margin: 10
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
  btnContainer: {
    padding: 10,
    width: '100%',
    height: '100%',
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default SquareButton;