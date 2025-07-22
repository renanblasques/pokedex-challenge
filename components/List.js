import * as React from 'react';
import Constants from 'expo-constants';
import { ActivityIndicator, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Wrapper from './Wrapper';
import { Title1, Title2, Title3, Body, Dd, Dt, Display, Label, ItemButton, ListCell } from './Styles';

// Remove this list after the request to the API is complete
const mockList = [
  { id: '1', name: 'bulbasaur' },
  { id: '2', name: 'ivysaur' },
  { id: '3', name: 'venusaur' },
  { id: '4', name: 'charmander' },
  { id: '5', name: 'charmeleon' },
  { id: '6', name: 'charizard' },
  { id: '7', name: 'squirtle' },
  { id: '8', name: 'wartortle' },
  { id: '9', name: 'blastoise' },
  { id: '10', name: 'caterpie' },
  { id: '11', name: 'metapod' },
  { id: '12', name: 'butterfree' },
  { id: '13', name: 'weedle' },
  { id: '14', name: 'kakuna' },
  { id: '15', name: 'beedrill' },
  { id: '16', name: 'pidgey' },
  { id: '17', name: 'pidgeotto' },
  { id: '18', name: 'pidgeot' },
  { id: '19', name: 'rattata' },
  { id: '20', name: 'raticate' },
];

export default function List(props) {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      setList(mockList);
      setLoading(false);
    }, 500);
  });

  return (
    <View>
      {loading && <ActivityIndicator size={'large'} />}
      {list.map((i) => {
        return (
          <View key={i.id} style={{ padding: 8 }}>
              <ListCell onPress={() => 
                navigation.navigate('Detalhes', { id: i.id, name: i.name })}
              >
                <Title3>{i.id}. {i.name}</Title3>
              </ListCell>
          </View>
        );
      })}
    </View>
  );
}
