import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Star from '../Star';

export default function Stars({
  quantidade: quantidadeAntiga,
  editing = false,
  big = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderStar = () => {
    const starList = [];
    for (let i = 0; i < 5; i++) {
      starList.push(
        <Star
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editing}
          full={i < quantidade}
          big={big}
        />,
      );
    }
    return starList;
  };

  return (
    <View style={styles.stars}>
      <RenderStar />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});
