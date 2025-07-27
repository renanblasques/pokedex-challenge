import styled from 'styled-components';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { typeColors } from './typeColors';

export const ShareButton = styled(TouchableOpacity)`
  margin: 64px 12px;
  background-color: ${({ type }) => typeColors[type.toLowerCase()] || typeColors.default};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;