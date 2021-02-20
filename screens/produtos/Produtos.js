import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';

export default function Produtos() {
  return (
    <ScrollView style={styles.container}>
      <Text>Produtos</Text>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/fogão.jpg')} />
        <Text style={styles.textArtigos}>Fogão</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$ 1.800,00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/geladeira.jpg')} />
        <Text style={styles.textArtigos}>Geladeira</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$ 3.400,00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/lava-louça.jpg')} />
        <Text style={styles.textArtigos}>Lava Louça</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$ 5.990,00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/lavadora.jpg')} />
        <Text style={styles.textArtigos}>Lavadora</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$ 2.500,00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/microondas.jpg')} />
        <Text style={styles.textArtigos}>Microondas</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$ 800,00</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardArtigos: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'teal',
      width: 340,
      height: 450,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    imgArtigos: {
      width: 300,
      height: 300,
    },
    textArtigos: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    textArtigosP: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    line:{
      width: '90%',
      height: 3,
      backgroundColor: 'black',
    }
  });