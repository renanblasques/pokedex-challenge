import styled from 'styled-components';
import Constants from 'expo-constants';
import { View, TouchableOpacity, Image } from 'react-native';

export const Main = styled(View)`
  flex: 1;
  background-color: #8BD9A0;
`;

export const BadgeSection = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

export const Badge = styled(View)`
  margin-right: 15px;
  padding: 10px;
  background-color: #478070;
  border-radius: 8px;
`;

export const CardSection = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
`;

export const PokemonImg = styled(Image)`
  height: 190px;
  width: 190px;
  position: absolute;
  top: 30px;
  z-index: 10;
`;

export const CardInfo = styled(View)`
  background-color: #FFFFFF;
  margin-top: 170px;
  border-radius: 24px; 
  width: 100%;
  height: 100%;
  padding: 15px;
`;