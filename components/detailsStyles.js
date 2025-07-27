import styled from 'styled-components';
import { typeColors, typeColorsBackground } from './typeColors';
import { View, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export const Main = styled(View)`
  flex: 1;
`;

export const ScreenArea = styled(SafeAreaView)`
  background-color: ${({ type }) => typeColorsBackground[type.toLowerCase()] || typeColorsBackground.default};
  height: 110%;
`;

export const BadgeSection = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

export const Badge = styled(View)`
  margin-right: 15px;
  padding: 10px;
  background-color: ${({ type }) => typeColors[type.toLowerCase()] || typeColors.default};
  border-radius: 8px;
`;

export const CardSection = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 1;
`;

export const PokemonImg = styled(Image)`
  height: 190px;
  width: 190px;
  z-index: 10;
`;

export const CardInfo = styled(View)`
  background-color: #FFFFFF;
  margin-top: -30px;
  border-radius: 24px; 
  width: 100%;
  height: 200%;
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
  padding: 0 16px;
  width: 55%;
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

export const BaseBarLenght = styled(ProgressBar)`
  background-color: #E5E5E5;
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

export const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

