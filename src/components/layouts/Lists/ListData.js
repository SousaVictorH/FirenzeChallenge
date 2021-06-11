import React from 'react';
import {FlatList} from 'react-native';

const ListData = ({
  renderItem,
  data,
  ListHeaderComponent,
  ListFooterComponent,
  style,
}) => {
  const flatList = () => {
    return (
      <FlatList
        contentContainerStyle={style}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    );
  };

  return flatList();
};

export default ListData;
