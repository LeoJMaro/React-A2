import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/games.js';
import Button from './components/button.js';
import Games from './assets/games.json';git

console.pp = (obj) => {
	console.log(JSON.stringify(obj, null, '  '));
}

export default function App() {
	const [gameIndex, setGameIndex] = useState(0);
	const handleGamePress = (index) => {
		setGameIndex(index);
	}

	const selectGame = Games[gameIndex];

	const buttonList = Games.map((game, i) => {
		return <Button key={i} labal={game.name} onPress={() => handleGamePress(i)} />;
	});

console.log(selectGame.image, gameIndex)
	return (
		<View style={styles.container}>
			<Game name={selectGame.name} year={selectGame.year} image={selectGame.image} />

			{buttonList}
			<StatusBar style="auto"/>
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
});