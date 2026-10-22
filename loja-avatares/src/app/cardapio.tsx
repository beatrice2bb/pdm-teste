
import { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ImageBackground,
  Pressable,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

import Cabecalho from '../components/Cabecalho';
import CardItemLoja from '../components/CardItemLoja';
import CardDetalhesItemHBG from '../components/CardDetalhesItem';
import { itens as itensHBG } from '../data/itens';

const imagemFundoHBG = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm95FMKOs5cztSKKOa3_3tyrcrGqzse8POfL5YrxwEugqPpYC1O1hH1W8&s=10',
};

const fotoPerfilHBG =
  'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png';

const filtrosHBG = [
  'Todos',
  'Até 300',
  '301–500',
  'Acima de 500',
];

export default function CardapioHBG() {
  const routerHBG = useRouter();

  const [pesquisaHBG, setPesquisaHBG] = useState('');
  const [filtroHBG, setFiltroHBG] = useState('Todos');

  const [hbgItemSelecionado, setHbgItemSelecionado] =
    useState<(typeof itensHBG)[number] | null>(null);

  const itensFiltradosHBG = useMemo(() => {
    return itensHBG.filter((itemHBG) => {
      const nomeCombina = itemHBG.nome
        .toLowerCase()
        .includes(pesquisaHBG.trim().toLowerCase());

      const preco = Number(itemHBG.preco);

      let precoCombina = true;

      if (filtroHBG === 'Até 300') {
        precoCombina = preco <= 300;
      } else if (filtroHBG === '301–500') {
        precoCombina = preco >= 301 && preco <= 500;
      } else if (filtroHBG === 'Acima de 500') {
        precoCombina = preco > 500;
      }

      return nomeCombina && precoCombina;
    });
  }, [pesquisaHBG, filtroHBG]);

  return (
    <ImageBackground
      source={imagemFundoHBG}
      style={estilosHBG.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={estilosHBG.overlay}>
        <Cabecalho fotoPerfil={fotoPerfilHBG} />

        {hbgItemSelecionado ? (
          <View style={estilosHBG.detalhesContainer}>
            <CardDetalhesItemHBG
              imagem={hbgItemSelecionado.imagem}
              nome={hbgItemSelecionado.nome}
              descricao={
                'descricao' in hbgItemSelecionado
                  ? String(hbgItemSelecionado.descricao ?? '')
                  : 'Confira os detalhes deste item.'
              }
              preco={Number(hbgItemSelecionado.preco)}
              fotoPerfil={fotoPerfilHBG}
              onVoltar={() => setHbgItemSelecionado(null)}
              onComprar={() => {
                // Adicione aqui a lógica de compra.
              }}
            />
          </View>
        ) : (
          <>
            <View style={estilosHBG.tituloContainer}>
              <View>
                <Text style={estilosHBG.subtitulo}>
                  COLEÇÃO EXCLUSIVA
                </Text>

                <Text style={estilosHBG.titulo}>
                  Loja <Text style={estilosHBG.tituloDestaque}>HBG</Text>
                </Text>

                <Text style={estilosHBG.descricao}>
                  Encontre seu próximo item favorito.
                </Text>
              </View>

              <View style={estilosHBG.iconeLoja}>
                <Text style={estilosHBG.iconeLojaTexto}>✦</Text>
              </View>
            </View>

            <View style={estilosHBG.pesquisaContainer}>
              <Text style={estilosHBG.iconePesquisa}>⌕</Text>

              <TextInput
                style={estilosHBG.inputPesquisa}
                placeholder="Buscar na loja..."
                placeholderTextColor="#8393AA"
                value={pesquisaHBG}
                onChangeText={setPesquisaHBG}
                autoCapitalize="none"
                clearButtonMode="while-editing"
              />
            </View>

            <View style={estilosHBG.cabecalhoProdutos}>
              <View>
                <Text style={estilosHBG.tituloSecao}>
                  Explorar itens
                </Text>

                <Text style={estilosHBG.contagem}>
                  {itensFiltradosHBG.length}{' '}
                  {itensFiltradosHBG.length === 1
                    ? 'item encontrado'
                    : 'itens encontrados'}
                </Text>
              </View>
            </View>

            <View style={estilosHBG.filtrosContainer}>
              <FlatList
                horizontal
                data={filtrosHBG}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={estilosHBG.listaFiltros}
                renderItem={({ item }) => {
                  const ativo = filtroHBG === item;

                  return (
                    <Pressable
                      onPress={() => setFiltroHBG(item)}
                      style={[
                        estilosHBG.botaoFiltro,
                        ativo && estilosHBG.botaoFiltroAtivo,
                      ]}
                    >
                      <Text
                        style={[
                          estilosHBG.textoFiltro,
                          ativo && estilosHBG.textoFiltroAtivo,
                        ]}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>

            <FlatList
              style={estilosHBG.listaPrincipal}
              data={itensFiltradosHBG}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
              columnWrapperStyle={estilosHBG.linha}
              contentContainerStyle={estilosHBG.listaProdutos}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CardItemLoja
                  imagem={item.imagem}
                  nome={item.nome}
                  preco={item.preco}
                  onPress={() => setHbgItemSelecionado(item)}
                />
              )}
              ListEmptyComponent={
                <View style={estilosHBG.vazio}>
                  <Text style={estilosHBG.vazioIcone}>⌕</Text>
                  <Text style={estilosHBG.vazioTitulo}>
                    Nenhum item encontrado
                  </Text>
                  <Text style={estilosHBG.vazioDescricao}>
                    Tente outro nome ou filtro de preço.
                  </Text>
                </View>
              }
            />
          </>
        )}

        <View style={estilosHBG.navegacao}>
          <Pressable
            style={estilosHBG.itemNavegacao}
            onPress={() => routerHBG.push('/')}
          >
            <Text style={estilosHBG.iconeNavegacao}>⌂</Text>
            <Text style={estilosHBG.textoNavegacao}>Início</Text>
          </Pressable>

          <Pressable
            style={[
              estilosHBG.itemNavegacao,
              estilosHBG.itemNavegacaoAtivo,
            ]}
            onPress={() => setHbgItemSelecionado(null)}
          >
            <Text style={estilosHBG.iconeAtivo}>▦</Text>
            <Text style={estilosHBG.textoAtivo}>Loja</Text>
          </Pressable>

          <Pressable
            style={estilosHBG.itemNavegacao}
            onPress={() => routerHBG.push('/favoritos')}
          >
            <Text style={estilosHBG.iconeNavegacao}>♡</Text>
            <Text style={estilosHBG.textoNavegacao}>Favoritos</Text>
          </Pressable>

          <Pressable
            style={estilosHBG.itemNavegacao}
            onPress={() => routerHBG.push('/perfil')}
          >
            <Text style={estilosHBG.iconeNavegacao}>◎</Text>
            <Text style={estilosHBG.textoNavegacao}>Perfil</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const estilosHBG = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07111F',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 13, 27, 0.88)',
  },

  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  subtitulo: {
    color: '#38D9F5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2.5,
    marginBottom: 7,
  },

  titulo: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
  },

  tituloDestaque: {
    color: '#38D9F5',
  },

  descricao: {
    color: '#9AAAC0',
    fontSize: 13,
    marginTop: 6,
  },

  iconeLoja: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: 'rgba(56, 217, 245, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(56, 217, 245, 0.30)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeLojaTexto: {
    color: '#38D9F5',
    fontSize: 31,
  },

  pesquisaContainer: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 23,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#111F32',
    borderWidth: 1,
    borderColor: '#26374D',
  },

  iconePesquisa: {
    color: '#38D9F5',
    fontSize: 29,
    marginRight: 10,
  },

  inputPesquisa: {
    flex: 1,
    height: '100%',
    color: '#F8FAFC',
    fontSize: 14,
  },

  cabecalhoProdutos: {
    marginHorizontal: 20,
    marginBottom: 14,
  },

  tituloSecao: {
    color: '#F8FAFC',
    fontSize: 19,
    fontWeight: '800',
  },

  contagem: {
    color: '#8393AA',
    fontSize: 12,
    marginTop: 5,
  },

  filtrosContainer: {
    marginBottom: 15,
  },

  listaFiltros: {
    paddingHorizontal: 16,
    gap: 9,
  },

  botaoFiltro: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#111F32',
    borderWidth: 1,
    borderColor: '#26374D',
  },

  botaoFiltroAtivo: {
    backgroundColor: '#38D9F5',
    borderColor: '#38D9F5',
  },

  textoFiltro: {
    color: '#B5C2D4',
    fontSize: 12,
    fontWeight: '700',
  },

  textoFiltroAtivo: {
    color: '#07111F',
  },

  listaPrincipal: {
    flex: 1,
  },

  listaProdutos: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 20,
    gap: 14,
  },

  linha: {
    justifyContent: 'space-between',
    gap: 12,
  },

  vazio: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  vazioIcone: {
    color: '#38D9F5',
    fontSize: 45,
    marginBottom: 10,
  },

  vazioTitulo: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '800',
  },

  vazioDescricao: {
    color: '#8393AA',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
  },

  navegacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0B1728',
    borderTopWidth: 1,
    borderTopColor: '#24354A',
    paddingTop: 9,
    paddingBottom: 12,
    paddingHorizontal: 5,
  },

  itemNavegacao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 7,
    borderRadius: 12,
  },

  itemNavegacaoAtivo: {
    backgroundColor: 'rgba(56, 217, 245, 0.09)',
  },

  iconeNavegacao: {
    color: '#8596AD',
    fontSize: 23,
  },

  iconeAtivo: {
    color: '#38D9F5',
    fontSize: 23,
  },

  textoNavegacao: {
    color: '#8596AD',
    fontSize: 10,
    fontWeight: '600',
  },

  textoAtivo: {
    color: '#38D9F5',
    fontSize: 10,
    fontWeight: '800',
  },

  detalhesContainer: {
    flex: 1,
  },
});
