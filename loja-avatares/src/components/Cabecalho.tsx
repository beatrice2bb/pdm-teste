import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type PropsCabecalhoHBG = {
  fotoPerfil: string;
};

export default function CabecalhoHBG({fotoPerfil: fotoPerfilHBG}: PropsCabecalhoHBG) {
  return (
    <View style={estilosHBG.containerHBG}>
      <View style={estilosHBG.textosHBG}>
        <Text style={estilosHBG.tituloHBG}>Bem-vindo de volta</Text>
        <Text style={estilosHBG.subtituloHBG}>Descubra avatares</Text>
      </View>

      <Image source={{uri: fotoPerfilHBG}} style={estilosHBG.fotoHBG} />
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 32,
    backgroundColor: '#0F1626',
  },

  textosHBG: {
    gap: 4,
  },

  tituloHBG: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f3f3',
  },

  subtituloHBG: {
    fontSize: 16,
    color: '#dadada',
  },

  fotoHBG: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});