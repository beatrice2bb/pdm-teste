
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native';

type PropsCard = {
  imagem: ImageSourcePropType;
  nome: string;
  preco: number;
  onPress?: () => void;
};

export default function CardItemLoja({
  imagem,
  nome,
  preco,
  onPress,
}: PropsCard) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={imagem}
        style={styles.imagemCard}
        resizeMode="contain"
      />

      <Text style={styles.textoCard} numberOfLines={1}>
        {nome}
      </Text>

      <Text style={styles.preco}>
        {preco} moedas
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    padding: 10,
    backgroundColor: '#100022',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  imagemCard: {
    width: '100%',
    height: 130,
    backgroundColor: '#1FB6E0',
    borderRadius: 8,
  },

  textoCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  preco: {
    fontSize: 14,
    color: '#ffd900',
    fontWeight: 'bold',
  },
});
