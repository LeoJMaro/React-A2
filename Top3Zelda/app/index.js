import { useContext, useEffect, useState} from 'react';
import { GameContext } from '../components/GameContext';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Game from '../components/games.js';
import Button from '../components/button.js';
import {selectGames} from './db';
import { useSQLiteContext } from 'expo-sqlite';
export default function App() {
	const db = useSQLiteContext();
	const { games, setGames, selectedGame, setSelectedGame } = useContext(GameContext);
	useEffect(() => {(
		async function () {
				const results = await selectGames(db);
				if (selectedGame === null) {
					setSelectedGame(results[0]);
				}
				setGames(results);
			})
		();
		},
		[]
	);
	if( games === null) {
		return (
			<Text>Loading...</Text>
		)
	}
	const handleGamePress = (index) => {
		setSelectedGame(games[index]);
	}
	const buttonList = games.map((game, i) => {
		return <Button
			key={game.id}
			label={game.name}
			selected={game.id === selectedGame.id}
			onPress={() => handleGamePress(i)}
		/>
	});
	return (

		<View style={styles.container}>
			<Game
				gameId={selectedGame.id}
				name={selectedGame.name}
				year={selectedGame.year}
				imageURL={selectedGame.imageURL}
			/>
			<ScrollView>
			{buttonList}
			</ScrollView>
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
