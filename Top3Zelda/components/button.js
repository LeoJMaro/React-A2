import {StyleSheet, View, Pressable} from 'react-native';
import * as React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import {Text, TouchableRipple } from 'react-native-paper';



const styles = StyleSheet.create({
  buttonContainer: {
    width: 320, height: 68, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', padding: 3,
  }, button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#2e2c2c'
  }, buttonIcon: {
    paddingRight: 8,
  }, buttonLabel: {
    color: '#FFF', fontSize: 16,
  }, buttonLabelSelected: {
    color: '#CCC',


  }, buttonSelected: {
    backgroundColor: '#182c56'

  },
});

export default function Button({label, onPress, selected}) {
  return (<View style={styles.buttonContainer}>

    <PaperButton mode="contained" onPress={onPress}>
      <Text style={[styles.buttonLabel, selected ? styles.buttonLabelSelected : null ]}>{label}</Text>
    </PaperButton>
    </View>

  );
}
