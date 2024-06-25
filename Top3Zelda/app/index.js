import { useContext } from 'react';
import { GameContext } from '../components/GameContext';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Game from '../components/games.js';
import Button from '../components/button.js';
import Games from '../assets/games.json';

export default function App() {
	const { gameIndex, setGameIndex } = useContext(GameContext);
	const handleGamePress = (index) => {
		setGameIndex(index);
	}

	const selectGame = Games[gameIndex];
	const buttonList = Games.map((game, i) => {
		return <Button key={i} label={game.name} selected={i === gameIndex} onPress={() => handleGamePress(i)}/>;
	});

	console.log(gameIndex, buttonList, "test")
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