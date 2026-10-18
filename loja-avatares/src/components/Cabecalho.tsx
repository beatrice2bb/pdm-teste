import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type PropsCabecalho = {
  fotoPerfil: string;
};

export default function Cabecalho({fotoPerfil}: PropsCabecalho) {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.titulo}>Bem-vindo de volta</Text>
        <Text style={styles.subtitulo}>Descubra avatares</Text>
      </View>

      <Image source={{uri: fotoPerfil}} style={styles.foto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 32,
    backgroundColor: '#0F1626',
  },

  textos: {
    gap: 4,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f3f3f3',
  },

  subtitulo: {
    fontSize: 16,
    color: '#dadada',
  },

  foto: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});