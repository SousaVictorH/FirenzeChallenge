import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ImageIcon from '../../../../components/layouts/ImageIcon';

import {utils} from '../../../../resources/icons';
import {black} from '../../../../resources/colors';

const Content = ({comment}) => {
  return (
    <View style={styles.container}>
      <ImageIcon icon={utils.quotMarks.icon} height={18} width={18} />
      <Text style={styles.comment}>{comment}</Text>
      <ImageIcon icon={utils.invertQuotMarks.icon} height={18} width={18} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    color: black,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.8,
    width: 300,
    paddingTop: 30,
    paddingHorizontal: 5,
  },
});
