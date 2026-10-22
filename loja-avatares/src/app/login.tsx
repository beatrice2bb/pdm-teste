import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';

import Cabecalho from '../components/Cabecalho';
import CardItemLoja from '../components/CardItemLoja';
import { itens as itensHBG } from '../data/itens';

const imagemFundoHBG = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm95FMKOs5cztSKKOa3_3tyrcrGqzse8POfL5YrxwEugqPpYC1O1hH1W8&s=10',
};

export default function CardapioHBG() {
  const routerHBG = useRouter();
  const [pesquisaHBG, setPesquisaHBG] = useState('');

  const itensFiltradosHBG = itensHBG.filter((itemHBG) =>
    itemHBG.nome.toLowerCase().includes(pesquisaHBG.trim().toLowerCase())
  );

  return (
    <ImageBackground
      source={imagemFundoHBG}
      style={estilosHBG.containerHBG}
      resizeMode="cover"
    >
      <View style={estilosHBG.conteudoHBG}>
        <Cabecalho fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png" />

        <View style={estilosHBG.containerPesquisaHBG}>
          <TextInput
            style={estilosHBG.inputPesquisaHBG}
            placeholder="Pesquisar itens..."
            placeholderTextColor="#94A3B8"
            value={pesquisaHBG}
            onChangeText={setPesquisaHBG}
            autoCapitalize="none"
            clearButtonMode="while-editing"
          />
        </View>

        <FlatList
          data={itensFiltradosHBG}
          keyExtractor={(itemHBG) => itemHBG.id}
          numColumns={2}
          columnWrapperStyle={estilosHBG.linhaHBG}
          contentContainerStyle={estilosHBG.listaHBG}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item: itemHBG }) => (
            <CardItemLoja
              imagem={itemHBG.imagem}
              nome={itemHBG.nome}
              preco={itemHBG.preco}
              onPress={() =>
                routerHBG.push({ pathname: '/detalhes', params: { id: itemHBG.id } })
              }
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: {
    flex: 1,
    backgroundColor: '#1F4E9C',
  },
  conteudoHBG: {
    flex: 1,
    backgroundColor: 'rgba(5, 14, 65, 0.2)',
  },
  containerPesquisaHBG: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  inputPesquisaHBG: {
    height: 46,
    fontSize: 16,
    color: '#610000',
  },
  listaHBG: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    gap: 12,
  },
  linhaHBG: {
    justifyContent: 'space-between',
  },
});