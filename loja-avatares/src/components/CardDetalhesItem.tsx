import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

type PropsDetalhesHBG = {
  imagem: ImageSourcePropType;
  nome: string;
  descricao: string;
  preco: number;
  fotoPerfil: string;
  onVoltar: () => void;
  onComprar?: () => void;
};

export default function CardDetalhesItemHBG({
  imagem: imagemHBG,
  nome: nomeHBG,
  descricao: descricaoHBG,
  preco: precoHBG,
  fotoPerfil: fotoPerfilHBG,
  onVoltar: onVoltarHBG,
  onComprar: onComprarHBG,
}: PropsDetalhesHBG) {
  return (
    <View style={estilosHBG.containerHBG}>
      <View style={estilosHBG.areaImagemHBG}>
        <Image source={imagemHBG} style={estilosHBG.imagemHBG} resizeMode="contain" />

        <TouchableOpacity style={estilosHBG.botaoVoltarHBG} onPress={onVoltarHBG}>
          <Text style={estilosHBG.textoVoltarHBG}>←</Text>
        </TouchableOpacity>

        <Image source={{ uri: fotoPerfilHBG }} style={estilosHBG.fotoHBG} />
      </View>

      <View style={estilosHBG.infoHBG}>
        <Text style={estilosHBG.nomeHBG}>{nomeHBG}</Text>
        <Text style={estilosHBG.descricaoHBG}>{descricaoHBG}</Text>
        <Text style={estilosHBG.precoHBG}>{precoHBG} moedas</Text>

        <TouchableOpacity
          style={estilosHBG.botaoComprarHBG}
          onPress={onComprarHBG}
          activeOpacity={0.85}
        >
          <Text style={estilosHBG.textoComprarHBG}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: {
    flex: 1,
    backgroundColor: '#100022',
  },

  areaImagemHBG: {
    height: '55%',
    backgroundColor: '#1FB6E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemHBG: {
    width: '100%',
    height: '100%',
  },

  botaoVoltarHBG: {
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

  textoVoltarHBG: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  fotoHBG: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
  },

  infoHBG: {
    flex: 1,
    padding: 20,
    gap: 10,
  },

  nomeHBG: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  descricaoHBG: {
    fontSize: 16,
    color: '#dadada',
  },

  precoHBG: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd900',
  },

  botaoComprarHBG: {
    marginTop: 'auto',
    backgroundColor: '#ffd900',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoComprarHBG: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#100022',
  },
});