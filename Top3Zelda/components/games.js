import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	stretch: {
		width: 300,
		resizeMode: ('scale', 'center')
	}});

export default function Game({name, year, image}) {
console.log(image)
	return (
		<>
			<Text>{name}</Text>
			<Text>{year}</Text>
			<Image source={{uri: image}}/>
		</>
	);
}