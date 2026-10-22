import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

import CardDetalhesItem from '../components/CardDetalhesItem';
import { itens as itensHBG } from '../data/itens';

export default function DetalhesHBG() {
  const routerHBG = useRouter();
  const { id: idHBG } = useLocalSearchParams<{ id: string }>();

  const itemHBG = itensHBG.find((iHBG) => iHBG.id === idHBG);

  if (!itemHBG) return null;

  return (
    <CardDetalhesItem
      imagem={itemHBG.imagem}
      nome={itemHBG.nome}
      descricao={itemHBG.descricao}
      preco={itemHBG.preco}
      fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png"
      onVoltar={() => routerHBG.back()}
      onComprar={() => console.log('Comprou', itemHBG.nome)}
    />
  );
}