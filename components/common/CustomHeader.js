import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {styleGeneral} from '../../assets/css';

import {COLORS, SIZES} from '../../constants';

const CustomHeader = ({title, subtitle, type}) => {
  return (
    <Fragment>
      {type === 'secondary' && (
        <View style={styleGeneral.secondaryHeaderTextContainer}>
          <Text style={styleGeneral.secondaryHeaderText}>{title}</Text>
          <Text style={styleGeneral.secondaryHeaderParagraph}>{subtitle}</Text>
        </View>
      )}
      {type === 'primary' && (
        <View style={styleGeneral.generalHeaderTextContainer}>
          <Text style={styleGeneral.generalHeaderText}>{title}</Text>
          <Text style={styleGeneral.generalHeaderParagraph}>{subtitle}</Text>
        </View>
      )}
    </Fragment>
  );
};
export default CustomHeader;
