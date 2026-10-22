import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginHBG() {
  const routerHBG = useRouter();

  const [emailCadastradoHBG] = useState<string>('hbg@loja.com');
  const [senhaCadastradaHBG] = useState<string>('123456');

  const [emailHBG, setEmailHBG] = useState<string>('');
  const [senhaHBG, setSenhaHBG] = useState<string>('');
  const [erroHBG, setErroHBG] = useState<string>('');

  function verificarLoginHBG() {
    if (emailHBG.trim() === '' || senhaHBG.trim() === '') {
      setErroHBG('Preencha o e-mail e/ou senha para continuar.');
      return;
    }
    if ((emailHBG.trim() !== emailCadastradoHBG) || (senhaHBG !== senhaCadastradaHBG)) {
      setErroHBG('E-mail e/ou senha incorretos.');
      return;
    }

    setErroHBG('');
    routerHBG.replace('/cardapio');
  }

  return (
    <View style={estilosHBG.containerHBG}>
      <StatusBar barStyle="dark-content" />

      <View style={estilosHBG.areaImagemHBG}>
        <Image
          source={require('../../assets/images/pagina-2.png')}
          style={estilosHBG.imagemHBG}
          resizeMode="cover"
        />
      </View>

      <View style={estilosHBG.painelHBG}>
        <View style={estilosHBG.campoHBG}>
          <Image
            style={estilosHBG.iconeHBG}
            source={require("../../assets/images/Vector.png")}
            resizeMode="cover"
          />
          <TextInput
            style={estilosHBG.entradaHBG}
            placeholder="Email"
            placeholderTextColor="#7FA3CC"
            autoCapitalize="none"
            keyboardType="email-address"
            value={emailHBG}
            onChangeText={setEmailHBG}
          />
        </View>

        <View style={estilosHBG.campoHBG}>
          <Image
            style={estilosHBG.iconeHBG}
            source={require("../../assets/images/Lock.png")}
            resizeMode="cover"
          />
          <TextInput
            style={estilosHBG.entradaHBG}
            placeholder="Senha"
            placeholderTextColor="#7FA3CC"
            secureTextEntry
            value={senhaHBG}
            onChangeText={setSenhaHBG}
          />
        </View>

        {erroHBG !== '' && <Text style={estilosHBG.erroHBG}>{erroHBG}</Text>}

        <TouchableOpacity style={estilosHBG.botaoHBG} onPress={verificarLoginHBG}>
          <Text style={estilosHBG.textoBotaoHBG}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: { flex: 1, backgroundColor: '#ecf0b8' },
  areaImagemHBG: { overflow: 'visible', height:'60%' },
  imagemHBG: { width: '100%', height: '100%' },
  painelHBG: { height:'40%', backgroundColor: '#ecf0b8', paddingHorizontal: 24, paddingTop: 80 },
  campoHBG: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 2.5, 
              borderColor: '#1F4E9C', borderRadius: 30, paddingHorizontal: 16, marginBottom: 16 },
  iconeHBG: {  },
  entradaHBG: { flex: 1, paddingVertical: 14, paddingLeft: 10, fontSize: 15, color: '#1B3A6B'},
  erroHBG: { color: '#B3261E', fontSize: 14, textAlign: 'center', marginBottom: 12 },
  botaoHBG: { backgroundColor: '#1F4E9C', borderRadius: 30, paddingVertical: 16, alignItems: 'center',
              marginTop: 8 },
  textoBotaoHBG: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});