import styled from 'styled-components';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity } from 'react-native';

export const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: #ecf0f1;
  padding: 8px;
`;

export const Title1 = styled(Text)`
  font-family: 'Overpass';
  font-size: 20px;
  color: #000000;
  font-weight: 600;
  textTransform: lowercase;
`;

export const Title2 = styled(Text)`
  font-family: 'Overpass';
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

export const Title3 = styled(Text)`
  font-family: 'Overpass';
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  textTransform: lowercase;
`;

export const BodyText = styled(Text)`
  font-family: 'OpenSans';
  font-size: 14px;
  color: #343838;
  font-weight: 400;
`;

export const Dt = styled(Text)`
  font-family: 'OpenSans';
  font-size: 14px;
  color: #343838;
  font-weight: 400;
  letter-spacing: 0.7px;
`;

export const Dd = styled(Text)`
  font-family: 'OpenSans';
  font-size: 14px;
  color: #343838;
  font-weight: 600;
  letter-spacing: 0.7px;
`;

export const Display = styled(Text)`
  font-family: 'Overpass';
  font-size: 32px;
  color: #000000;
  font-weight: 600;
`;

export const Label = styled(Text)`
  font-family: 'OpenSans';
  font-size: 12px;
  font-weight: 400;
  textTransform: uppercase;
  letter-spacing: 0.6px;
  color: #000000;
`;

export const ListCell = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 4px 32px;
  height: 40px;
  z-index: 1;
  overflow: hidden;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 2px;

  elevation: 3;
`;

export const ShareButton = styled(TouchableOpacity)`
  margin: 64px 0;
  background-color: #478070;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

