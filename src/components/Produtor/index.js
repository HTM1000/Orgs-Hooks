import React, {useReducer, useMemo} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Stars from '../Stars';

const DistanceMetro = distance => {
  return `${distance}m`;
};

export default function Produtor({name, image, distance, stars}) {
  const [select, invertSelected] = useReducer(select => !select, false);

  const distanceText = useMemo(() => DistanceMetro(distance), [distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={invertSelected}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />

      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantidade={stars} editavel={select} grande={select} />
        </View>
        <Text style={styles.distance}>{distanceText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
