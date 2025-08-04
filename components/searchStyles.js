import styled from 'styled-components';
import { TextInput, View, Image } from 'react-native';

export const SearchBar = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #000000;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 8px 12px 10px 12px;
  margin: 8px 32px;

  shadow-color: #000;
  shadow-offset: 3px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;

  elevation: 3;
`;

export const SearchIcon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  font-family: 'Overpass';
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;