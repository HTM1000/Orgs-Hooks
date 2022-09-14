import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {loadTop} from '../../services/loadData';
import Logo from '../../assets/logo.png';

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      legenda: '',
    },
  };

  atualizaTop() {
    const retorno = loadTop();
    this.setState({top: retorno});
  }

  componentDidMount() {
    this.atualizaTop();
  }

  render() {
    return (
      <View style={styles.topo}>
        <Image source={Logo} style={styles.imagem} />
        <Text style={styles.welcome}>{this.state.top.welcome}</Text>
        <Text style={styles.legenda}>{this.state.top.legenda}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 16,
    color: '#A3A3A3',
  },
});

export default Top;
