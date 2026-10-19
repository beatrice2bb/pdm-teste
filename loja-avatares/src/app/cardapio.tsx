import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';

import Cabecalho from '../components/Cabecalho';
import CardItemLoja from '../components/CardItemLoja';

const itens = [
  {
    id: '1',
    imagem: require('../../assets/Kogama1.png'),
    nome: 'Menino',
    preco: 480,
  },
  {
    id: '2',
    imagem: require('../../assets/Kogama2.png'),
    nome: 'Labubu',
    preco: 320,
  },
  {
    id: '3',
    imagem: require('../../assets/Kogama3.png'),
    nome: 'Zumbi',
    preco: 550,
  },
  {
    id: '4',
    imagem: require('../../assets/Kogama4.png'),
    nome: 'CLT',
    preco: 700,
  },
  {
    id: '5',
    imagem: require('../../assets/Kogama5.png'),
    nome: 'Arara do DB',
    preco: 850,
  },
  {
    id: '6',
    imagem: require('../../assets/Kogama6.png'),
    nome: 'Chapeuzinho',
    preco: 1000,
  },
];

const imagemFundo = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm95FMKOs5cztSKKOa3_3tyrcrGqzse8POfL5YrxwEugqPpYC1O1hH1W8&s=10',
};

export default function Cardapio() {
  const [pesquisa, setPesquisa] = useState('');

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.trim().toLowerCase())
  );

  return (
    <ImageBackground
      source={imagemFundo}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.conteudo}>
        <Cabecalho
          fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png"
        />

        <View style={styles.containerPesquisa}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar itens..."
            placeholderTextColor="#94A3B8"
            value={pesquisa}
            onChangeText={setPesquisa}
            autoCapitalize="none"
            clearButtonMode="while-editing"
          />
        </View>

        <FlatList
          data={itensFiltrados}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.linha}
          contentContainerStyle={styles.lista}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <CardItemLoja
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F4E9C',
  },

  conteudo: {
    flex: 1,
    backgroundColor: 'rgba(5, 14, 65, 0.2)',
  },

  containerPesquisa: {
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

  inputPesquisa: {
    height: 46,
    fontSize: 16,
    color: '#610000',
  },

  lista: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    gap: 12,
  },

  linha: {
    justifyContent: 'space-between',
  },
});