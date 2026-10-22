import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, } from 'react-native';

type PropsCardHBG = {
  imagem: ImageSourcePropType;
  nome: string;
  preco: number;
  onPress?: () => void;
};

export default function CardItemLojaHBG({
  imagem: imagemHBG,
  nome: nomeHBG,
  preco: precoHBG,
  onPress: onPressHBG,
}: PropsCardHBG) {
  return (
    <TouchableOpacity
      style={estilosHBG.containerHBG}
      onPress={onPressHBG}
      activeOpacity={0.85}
    >
      <Image
        source={imagemHBG}
        style={estilosHBG.imagemCardHBG}
        resizeMode="contain"
      />

      <Text style={estilosHBG.textoCardHBG} numberOfLines={1}>
        {nomeHBG}
      </Text>

      <Text style={estilosHBG.precoHBG}>
        {precoHBG} moedas
      </Text>
    </TouchableOpacity>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: {
    width: '48%',
    padding: 10,
    backgroundColor: '#100022',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  imagemCardHBG: {
    width: '100%',
    height: 130,
    backgroundColor: '#1FB6E0',
    borderRadius: 8,
  },

  textoCardHBG: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  precoHBG: {
    fontSize: 14,
    color: '#ffd900',
    fontWeight: 'bold',
  },
});