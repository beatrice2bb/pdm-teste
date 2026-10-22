
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function FavoritosHBG() {
  const routerHBG = useRouter();

  return (
    <View style={estilosHBG.containerHBG}>
      <Text style={estilosHBG.tituloHBG}>Favoritos</Text>

      <TouchableOpacity
        style={estilosHBG.botaoHBG}
        onPress={() => routerHBG.replace('/cardapio')}
        activeOpacity={0.8}
      >
        <Text style={estilosHBG.textoBotaoHBG}>
          Voltar ao cardápio
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: {
    flex: 1,
    backgroundColor: '#071426',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  tituloHBG: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
  },

  botaoHBG: {
    backgroundColor: '#0284C7',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  textoBotaoHBG: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
