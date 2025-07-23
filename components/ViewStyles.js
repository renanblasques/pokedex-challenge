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
  z-index: 10;
`;

export const PokemonSprite = styled(Image)`
  height: 48px;
  width: 48px;
  margin: 8px 16px 0 2px;
`;

export const CardInfo = styled(View)`
  background-color: #FFFFFF;
  position: absolute;
  top: 140px;
  border-radius: 24px; 
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const SizeSection = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const SizeInfo = styled(View)`
  padding: 10px;
  align-items: center;
  padding: 0 32px;
`;

export const BaseStatsSection = styled(View)`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  margin-top: 32px;
  gap: 32px;
`;

export const BaseStats = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BaseType = styled(View)`
  width: 20%;
  align-items: left;
  justify-content: center;
`;

export const BaseBar = styled(View)`
  width: 70%;
`;

export const BaseValue = styled(View)`
  align-items: right;
  justify-content: center;
`;

export const VerticalDivisionBar = styled(View)`
  background-color: #E5E5E5;
  width: 1px;
  height: 65px;
`;

export const HorizontalDivisionBar = styled(View)`
  background-color: #E5E5E5;
  width: 100vw;
  height: 1px;
  margin: 0 32px;
`;
