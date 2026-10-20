import React from 'react';
import { useRouter } from 'expo-router';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeHBG() {
    const routerHBG = useRouter();

  return (
    <View style={estilosHBG.containerHBG}>
      <StatusBar barStyle="dark-content" />

      <View style={estilosHBG.areaImagemHBG}>
        <Image
          source={require('../../assets/images/avatar-splash.png')}
          style={estilosHBG.imagemHBG}
          resizeMode="contain"
        />
      </View>

      <View style={estilosHBG.areaTextoHBG}>
        <Text style={estilosHBG.tituloHBG}>Mil possibilidades, um só lugar.</Text>
        <Text style={estilosHBG.subtituloHBG}>
          Explore diferentes personagens, descubra novos estilos e encontre seu próximo avatar favorito na Avatar Studio!
        </Text>

        <View style={estilosHBG.pontosHBG}>
          <View style={estilosHBG.pontoHBG} />
          <View style={estilosHBG.pontoHBG} />
          <View style={estilosHBG.pontoAtivoHBG} />
        </View>

        <TouchableOpacity style={estilosHBG.botaoHBG} onPress={() => routerHBG.push('/login')}>
          <Text style={estilosHBG.textoBotaoHBG}>Começar</Text>
        </TouchableOpacity>

        <Image
          source={require('../components/avatares/panda.png')}
          style={estilosHBG.avatarRodapeHBG}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: { flex: 1, backgroundColor: '#ecf0b8' },
  areaImagemHBG: { flex: 1.3, justifyContent: 'center', alignItems: 'center' },
  imagemHBG: { width: '100%', height: '100%', transform: [{ scale: 1.20 }] },
  areaTextoHBG: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },
  tituloHBG: { color: '#1B3A6B', fontSize: 30, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtituloHBG: { color: '#2F4D77', fontSize: 18, lineHeight: 22 },
  pontosHBG: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 28 },
  pontoHBG: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#7FA3CC', marginHorizontal: 3 },
  pontoAtivoHBG: { width: 22, height: 6, borderRadius: 3, backgroundColor: '#F4C430', marginHorizontal: 3 },
  botaoHBG: { backgroundColor: '#1F4E9C', borderRadius: 30, paddingVertical: 16, alignItems: 'center' },
  textoBotaoHBG: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  avatarRodapeHBG: { width: 80, height: 50, alignSelf: 'center', marginTop: 16 },
});