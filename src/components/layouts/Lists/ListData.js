import React from 'react';
import {FlatList} from 'react-native';

/**
 * Esse componente serve como funcionalidade de lista básica, que será utilizada em toda aplicação, além
 * de mascarar o uso do FlatList do react native
 *
 * @param   {Function} renderItem         Função de renderização do item
 * @param   {Array} data                  Array de dados
 * @param   {Object} style                Objeto de estilização do componente
 * @returns {React.Component}
 */
const ListData = ({renderItem, data, style}) => {
  const flatList = () => {
    return (
      <FlatList
        contentContainerStyle={style}
        data={data}
        keyExtractor={(i, index) => index.toString()}
        renderItem={renderItem}
      />
    );
  };

  return flatList();
};

export default ListData;
