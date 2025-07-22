import * as React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Title1, Title2, Title3, Body, Dd, Dt, Display, Label } from './Styles';
import { Main, BadgeSection, Badge, CardSection, PokemonImg, CardInfo } from './ViewStyles';
//import Wrapper from './Wrapper';

export default function Details(props) {
  const route = useRoute();
  const { id, name } = route.params;
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Main>
      <Display>{id}. {name}</Display>
      <BadgeSection>
        <Badge>
          <Label>Tipo 1</Label>
        </Badge>
        <Badge>
          <Label>Tipo 2</Label>
        </Badge>
      </BadgeSection>
      <CardSection>
        <PokemonImg source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}/>
        <CardInfo>
          <Title1>Teste</Title1>
        </CardInfo>
      </CardSection>
    </Main>
  );
}