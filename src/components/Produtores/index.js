import React from 'react';

import {Text, FlatList, StyleSheet} from 'react-native';

import Produtor from '../Produtor';

import useProdutores from '../../hooks/useProdutores';

export function Produtores({top: Top}) {
  const [title, list] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Top />
        <Text style={styles.titulo}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtract={({name}) => name}
      ListHeaderComponent={<TopoLista />}
    />
  );
}

export const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
