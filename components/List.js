import * as React from 'react';
import { ActivityIndicator, View, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Txt from './textStyles'; 
import { SearchBar } from './searchStyles';
import { ListCellContainer, ListCell, PokemonSprite, HorizontalDivisionBar } from './listStyles';

export default function List() {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [filteredList, setFilteredList] = React.useState([]);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Lista de Pokémon',
      headerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 0, // Android
        shadowOpacity: 0, // iOS
      },
      headerTintColor: '#000',
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: 'Overpass',
        fontSize: 20,
        fontWeight: '600',
      },
    });
  }, [navigation]);

  React.useEffect(() => {
    const filtered = list.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filtered);
  }, [search, list]);


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const json = await response.json();
        const resultsWithId = json.results.map((item, index) => ({
          id: (index + 1).toString(),
          name: item.name,
        }));
        setList(resultsWithId);
        setFilteredList(resultsWithId);
      } catch (error) {
        console.error('Erro ao buscar pokemons: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <SafeAreaView>
      {loading && <ActivityIndicator size={'large'} />}
        <SearchBar
          placeholder="Busque pelo nome do Pokémon"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
        
      <FlatList
        data={filteredList}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item: pokemon }) => (
          <View>
            <ListCellContainer onPress={() => navigation.navigate('Detalhes', { id: pokemon.id, name: pokemon.name })}>
              <ListCell>
                <PokemonSprite source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} resizeMode="contain"/>
                <Txt.T3>{pokemon.id}. {pokemon.name}</Txt.T3>
              </ListCell>
            </ListCellContainer>
            <HorizontalDivisionBar />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
