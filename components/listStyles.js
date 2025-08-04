import styled from 'styled-components';
import { View, TouchableOpacity, Image } from 'react-native';

export const ListCellContainer = styled(TouchableOpacity)`
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 4px 32px;
  height: 40px;
  z-index: 1;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;

  elevation: 3;
`;

export const ListCell = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const PokemonSprite = styled(Image)`
  height: 48px;
  width: 48px;
  margin: 8px 16px 0 2px;
  overflow: hidden;
`;

export const HorizontalDivisionBar = styled(View)`
  background-color: #E5E5E5;
  width: 100vw;
  height: 1px;
  margin: 0 32px;
`;