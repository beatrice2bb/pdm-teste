import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

type PropsDetalhes = {
  imagem: ImageSourcePropType;
  nome: string;
  descricao: string;
  preco: number;
  fotoPerfil: string;
  onVoltar: () => void;
  onComprar?: () => void;
};

export default function CardDetalhesItem({
  imagem,
  nome,
  descricao,
  preco,
  fotoPerfil,
  onVoltar,
  onComprar,
}: PropsDetalhes) {
  return (
    <View style={styles.container}>
      <View style={styles.areaImagem}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain" />

        <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
          <Text style={styles.textoVoltar}>←</Text>
        </TouchableOpacity>

        <Image source={{ uri: fotoPerfil }} style={styles.foto} />
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{preco} moedas</Text>

        <TouchableOpacity
          style={styles.botaoComprar}
          onPress={onComprar}
          activeOpacity={0.85}
        >
          <Text style={styles.textoComprar}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100022',
  },

  areaImagem: {
    height: '55%',
    backgroundColor: '#1FB6E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagem: {
    width: '100%',
    height: '100%',
  },

  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(16, 0, 34, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoVoltar: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  foto: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
  },

  info: {
    flex: 1,
    padding: 20,
    gap: 10,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  descricao: {
    fontSize: 16,
    color: '#dadada',
  },

  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd900',
  },

  botaoComprar: {
    marginTop: 'auto',
    backgroundColor: '#ffd900',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoComprar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#100022',
  },
});