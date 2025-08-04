import styled from 'styled-components';
import { Text } from 'react-native';

export const Title = styled(Text)`
  font-family: 'Overpass';
  color: #000000;
  font-weight: 600;
`;

export const Header = styled(Title)`
  font-size: 20px;
  text-align: center;
`;

export const T1 = styled(Title)`
  font-size: 20px;
  textTransform: lowercase;
`;

export const T2 = styled(Title)`
  font-size: 16px;
`;

export const T3 = styled(Title)`
  font-size: 14px;
  textTransform: lowercase;
`;

export const Display = styled(Title)`
  font-size: 32px;
`;

export const BodyText = styled(Text)`
  font-family: 'OpenSans';
  font-size: 14px;
  color: #343838;
  font-weight: 400;
`;

export const Dt = styled(BodyText)`
  letter-spacing: 0.7px;
`;

export const Dd = styled(BodyText)`
  font-weight: 600;
  letter-spacing: 0.7px;
`;

export const Label = styled(Text)`
  font-family: 'OpenSans';
  font-size: 12px;
  font-weight: 400;
  textTransform: uppercase;
  letter-spacing: 0.6px;
  color: #000000;
`;