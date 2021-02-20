import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} >
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.label2}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnC}>
          <Text style={styles.label2}>Cadastre-se</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    label: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    label2: {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    card: {
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f2f2f2',
      width: '95%',
      height: 380,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    btn: {
      marginBottom: 20,
      width: 100,
      height: 40,
      borderRadius: 5,
      backgroundColor: '#fff',
      borderColor: 'gray', 
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnC: {
      marginBottom: 20,
      width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });