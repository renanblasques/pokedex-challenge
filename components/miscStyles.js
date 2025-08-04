import styled from 'styled-components';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { typeColors } from './typeColors';

export const ShareButton = styled(TouchableOpacity)`
  margin: 64px 12px;
  background-color: ${({ type }) => typeColors[type] || typeColors.default};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;

  elevation: 3;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;