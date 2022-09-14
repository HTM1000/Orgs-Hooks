import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Star({onPress, disabled = true, full, big = false}) {
  const styles = stylesFC(big);

  const getImage = () => {
    if (full) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
}

const stylesFC = big =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
      marginRight: 2,
    },
  });
