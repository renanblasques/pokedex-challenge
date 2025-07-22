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

export const ItemContainer = styled(View)`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const ItemButton = styled(TouchableOpacity)`
  padding: 12px;
  background-color: #3498db;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
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

export const Body = styled(Text)`
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
  margin-bottom: 24px;
  letter-spacing: 0.7px;
`;

export const Dd = styled(Text)`
  font-family: 'OpenSans';
  font-size: 14px;
  color: #343838;
  font-weight: 600;
  margin-bottom: 24px;
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
  color: #FFFFFF;
`;

export const ListCell = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  padding: 2px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin-top: 2px;
  height: 40px;
`;


