import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaLoginHBG() {
  // Credenciais cadastradas previamente no código
  const [emailCadastradoHBG] = useState<string>('hbg@loja.com');
  const [senhaCadastradaHBG] = useState<string>('123456');

  const [emailHBG, setEmailHBG] = useState<string>('');
  const [senhaHBG, setSenhaHBG] = useState<string>('');
  const [erroHBG, setErroHBG] = useState<string>('');
  const [sucessoHBG, setSucessoHBG] = useState<boolean>(false);

  function verificarLoginHBG() {
    setSucessoHBG(false);

    if (emailHBG.trim() === '' || senhaHBG.trim() === '') {
      setErroHBG('Preencha o e-mail e a senha para continuar.');
      return;
    }
    if (emailHBG.trim() !== emailCadastradoHBG) {
      setErroHBG('E-mail incorreto. Confira e tente novamente.');
      return;
    }
    if (senhaHBG !== senhaCadastradaHBG) {
      setErroHBG('Senha incorreta. Confira e tente novamente.');
      return;
    }

    setErroHBG('');
    setSucessoHBG(true); // Depois vamos trocar isso por ir para a lista de avatares
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
          <Text style={estilosHBG.iconeHBG}>✉️</Text>
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
          <Text style={estilosHBG.iconeHBG}>🔒</Text>
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
        {sucessoHBG && <Text style={estilosHBG.sucessoHBG}>Login realizado com sucesso!</Text>}

        <TouchableOpacity style={estilosHBG.botaoHBG} onPress={verificarLoginHBG}>
          <Text style={estilosHBG.textoBotaoHBG}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilosHBG = StyleSheet.create({
  containerHBG: { flex: 1, backgroundColor: '#B8D4F0' },
  areaImagemHBG: { flex: 1, overflow: 'hidden' },
  imagemHBG: { width: '100%', height: '100%' },
  painelHBG: {
    flex: 1,
    backgroundColor: '#DDEBFA',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  campoHBG: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#1F4E9C',
    borderRadius: 30,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  iconeHBG: { fontSize: 20 },
  entradaHBG: { flex: 1, paddingVertical: 14, paddingLeft: 10, fontSize: 15, color: '#1B3A6B' },
  erroHBG: { color: '#B3261E', fontSize: 14, textAlign: 'center', marginBottom: 12 },
  sucessoHBG: { color: '#1E7B34', fontSize: 14, textAlign: 'center', marginBottom: 12 },
  botaoHBG: { backgroundColor: '#1F4E9C', borderRadius: 30, paddingVertical: 16, alignItems: 'center', marginTop: 8 },
  textoBotaoHBG: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});