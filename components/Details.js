import * as React from 'react';
import { Alert, Share, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import * as Txt from './textStyles'; 
import * as Detail from './detailsStyles';
import { ShareButton, LoadingIndicator } from './miscStyles';
import { typeColors } from './typeColors';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const { id, name } = route.params;

  const [loading, setLoading] = React.useState(true);
  const [pokemonDetails, setPokemonDetails] = React.useState(null);
  const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const pokemonApiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Txt.Header>{name}</Txt.Header>,
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
    });
  }, [navigation, name]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pokemonApiURL);
        const json = await response.json();

        const height = json.height / 10;
        const weight = json.weight / 10;

        const types = json.types.map(i => i.type.name);
        const mainType = json.types[0].type.name;

        const stats = { hp: 0, attack: 0, defense: 0 };
        
        json.stats.forEach(base => {
          if (base.stat.name == "hp") {
              stats.hp = base.base_stat;
          } else if (base.stat.name == "attack") {
              stats.attack = base.base_stat;
          } else if (base.stat.name == "defense") {
              stats.defense = base.base_stat;
          }
        });

        setPokemonDetails({height, weight, types, mainType, stats});
      } catch (error) {
        console.error('Erro ao buscar detalhes: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonApiURL]);

  const [pokeLoading, setpokeLoading] = React.useState(true);

  const sharePokemon = async () =>  {
    try {
      const pokemonNameUpper = name[0].toUpperCase() + name.slice(1);
      const pokemonTypeUpper = pokemonDetails.mainType[0].toUpperCase() + 
        pokemonDetails.mainType.slice(1);
      await Share.share({
        message:
          `Ei, olha só esse Pokémon que acabei de capturar!

Nome: ${pokemonNameUpper} (ID: ${id})
Tipo principal: ${pokemonTypeUpper}
Altura: ${pokemonDetails.height} m | Peso: ${pokemonDetails.weight} kg
Foto: ${pokemonSprite}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Detail.Main>
      { loading ? ( <LoadingIndicator size="large" /> ) :
        (
          <Detail.ScreenArea type={pokemonDetails.mainType}>
            <ScrollView>

              <Detail.BadgeSection>

                {pokemonDetails.types.map((type, i) => (
                  <Detail.Badge key={i} type={type}>
                    <Txt.Label style={{ color: '#FFFFFF' }}>{type}</Txt.Label>
                  </Detail.Badge>
                ))}

              </Detail.BadgeSection>

              <Detail.CardSection>
                {pokeLoading && <Detail.LoadingIndicator size="large" />}
                <Detail.PokemonImg
                  source={{ uri: pokemonSprite}} 
                  onLoadEnd={() => setpokeLoading(false)}
                />

                <Detail.CardInfo>
                  <Detail.SizeSection>

                    <Detail.SizeInfo>
                      <Txt.Display>{pokemonDetails.height} m</Txt.Display>
                      <Txt.Label>HEIGHT</Txt.Label>
                    </Detail.SizeInfo>

                    <Detail.VerticalDivisionBar />

                    <Detail.SizeInfo>
                      <Txt.Display>{pokemonDetails.weight} kg</Txt.Display>
                      <Txt.Label>WEIGHT</Txt.Label>
                    </Detail.SizeInfo>

                  </Detail.SizeSection>

                  <Detail.BaseStatsSection>
                    <Txt.T2>Base stats</Txt.T2>
                    
                    {
                      [
                        { base_name: 'HP', value: pokemonDetails.stats.hp },
                        { base_name: 'Attack', value: pokemonDetails.stats.attack },
                        { base_name: 'Defense', value: pokemonDetails.stats.defense },
                      ].map(({ base_name, value }, i) => (
                      <Detail.BaseStats key={i}>
                        <Detail.BaseType>
                          <Txt.Dt>{base_name}</Txt.Dt>
                        </Detail.BaseType>
                        <Detail.BaseBar>
                          <Detail.BaseBarLenght 
                            progress={value / 100}
                            color={value > 100 ? '#FF0000' : typeColors[pokemonDetails.mainType]}
                          />
                        </Detail.BaseBar>
                        <Detail.BaseValue>
                          <Txt.Dd
                            style={{
                              color: value > 100 ? '#FF0000' : '#000000',
                            }}
                          >
                            {value}
                          </Txt.Dd>
                        </Detail.BaseValue>
                      </Detail.BaseStats>
                    ))}
                    
                  </Detail.BaseStatsSection>

                  <ShareButton 
                    onPress={sharePokemon} 
                    type={pokemonDetails.mainType}
                  >
                    <Txt.BodyText 
                      style={{ color: '#FFFFFF', fontWeight: 600 }}
                    >Compartilhar
                    </Txt.BodyText>
                  </ShareButton>

                </Detail.CardInfo>
              </Detail.CardSection>

            </ScrollView>
          </Detail.ScreenArea>
        )
      }
    </Detail.Main>
  );
}