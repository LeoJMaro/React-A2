import React, {useState} from 'react';
import { Image, Text, StyleSheet } from 'react-native';

const images = [
	require("../assets/zelda-majora-s-mask-logo.png"),
	require("../assets/legend-of-zelda-ocarina-of-time-logo-crop.png"),
	require("../assets/A_Link_Between_Worlds_Logo.png"),
];

const styles = StyleSheet.create({
	stretch: {
		resizeMode: ('center'),
		height: 200,
	}});

export default function Game({name, year, image}) {
	let imgSrc = images[image] || images[0];

	return (
		<>
			<Text>{name}</Text>
			<Text>{year}</Text>
			<Image style={styles.stretch} source={imgSrc}/>
		</>
	);
};