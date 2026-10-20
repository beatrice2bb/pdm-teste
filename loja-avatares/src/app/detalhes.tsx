import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

import CardDetalhesItem from '../components/CardDetalhesItem';
import { itens } from '../data/itens';

export default function Detalhes() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = itens.find((i) => i.id === id);

  if (!item) return null;

  return (
    <CardDetalhesItem
      imagem={item.imagem}
      nome={item.nome}
      descricao={item.descricao}
      preco={item.preco}
      fotoPerfil="https://voxnews.com.br/wp-content/uploads/2017/04/unnamed-300x300.png"
      onVoltar={() => router.back()}
      onComprar={() => console.log('Comprou', item.nome)}
    />
  );
}