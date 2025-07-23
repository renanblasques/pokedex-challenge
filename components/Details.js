import * as React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Title1, Title2, Title3, BodyText, Dd, Dt, Display, Label, ShareButton } from './Styles';
import { Main, BadgeSection, Badge, CardSection, PokemonImg, CardInfo, SizeSection, SizeInfo, VerticalDivisionBar, BaseStatsSection, BaseStats, BaseType, BaseBar, BaseValue } from './ViewStyles';
import { ProgressBar, MD3Colors } from 'react-native-paper';
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

//<Display>{id}. {name}</Display>
  return (
    <Main>
      <BadgeSection>
        <Badge>
          <Label style={{ color: `#FFFFFF` }}>Tipo 1</Label>
        </Badge>
        <Badge>
          <Label style={{ color: `#FFFFFF` }}>Tipo 2</Label>
        </Badge>
      </BadgeSection>
      <CardSection>
        <PokemonImg source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}/>
        <CardInfo>
          <SizeSection>
            <SizeInfo>
              <Display>0.7 m</Display>
              <Label>HEIGHT</Label>
            </SizeInfo>
            <VerticalDivisionBar></VerticalDivisionBar>
            <SizeInfo>
              <Display>6.9 kg</Display>
              <Label>WEIGHT</Label>
            </SizeInfo>
          </SizeSection>
          <BaseStatsSection>
            <Title2>Base stats</Title2>
            <BaseStats>
              <BaseType><Dt>Hp</Dt></BaseType>
              <BaseBar><ProgressBar progress={0.46} color='green'/></BaseBar>
              <BaseValue><Dd>46</Dd></BaseValue>
            </BaseStats>
            <BaseStats>
              <BaseType><Dt>Attack</Dt></BaseType>
              <BaseBar><ProgressBar progress={0.32} color='green'/></BaseBar>
              <BaseValue><Dd>32</Dd></BaseValue>
            </BaseStats>
            <BaseStats>
              <BaseType><Dt>Defense</Dt></BaseType>
              <BaseBar><ProgressBar progress={0.78} color='green'/></BaseBar>
              <BaseValue><Dd>78</Dd></BaseValue>
            </BaseStats>
          </BaseStatsSection>
          <ShareButton>
            <BodyText style={{ color: `#FFFFFF`, fontWeight: 600 }}>Compartilhar</BodyText>
          </ShareButton>
        </CardInfo>
      </CardSection>
    </Main>
  );
}