import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ImageIcon from '../../../../components/layouts/ImageIcon';

import {utils} from '../../../../resources/icons';
import {black} from '../../../../resources/colors';

const Content = ({comment}) => {
  return (
    <View style={styles.container}>
      <ImageIcon icon={utils.quotMarks.icon} height={26} width={26} />
      <Text style={styles.comment}>{comment}</Text>
      <ImageIcon icon={utils.invertQuotMarks.icon} height={26} width={26} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    color: black,
    fontSize: 23,
    fontWeight: '300',
    textAlign: 'center',
    width: 300,
    paddingTop: 40,
  },
});
