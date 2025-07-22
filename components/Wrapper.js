import * as React from 'react';
import styled from 'styled-components';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight};
  background-color: #ecf0f1;
  padding: 8px;
`;

export default Wrapper;