import {StyleSheet, View, Text} from 'react-native';
import Button from '../components/button';
import { useState, useContext, useEffect, } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { updateGame, insertGame } from './db'
import {TextInput}from "react-native-paper"


export default function Page({selectGame}) {
	const db = useSQLiteContext();
	const [gameID, setGameID] = useState(selectGame?.id||'');
	const [gameName, setGameName] = useState(selectGame?.name || '');
	const [gameYear, setGameYear] = useState(selectGame?.year || '');
	const [gameImageURL, setGameImageURL] = useState(selectGame?.imageURL|| '');

	const addGame = async () => {
		await insertGame(db, gameName, gameYear, gameImageURL)
	}

	const updateGameInfo = async (gameName, gameYear, gameImageURL) => {

		selectGame.name = gameName;
		selectGame.year = gameYear;
		selectGame.imageURL = gameImageURL;
		await updateGame(db,selectGame.name, selectGame.year, selectGame.imageURL)
	};

	return (
		<View style={styles.container}>
			<Text>Game Name</Text>
			<TextInput
				style={styles.input}
				onChangeText={setGameName}
				value={gameName}
			/>
			<Text >Game Year</Text>
			<TextInput
				style={styles.input}
				onChangeText={setGameYear}
				value={gameYear}
			/>
			<Text>Game Image URL</Text>
			<TextInput
				style={styles.input}
				onChangeText={setGameImageURL}
				value={gameImageURL}
			/>
		<Button
				label={"Add Game"}
				onPress={addGame}
				style={styles.container}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input:
		{
		height: 40,
		width: 100,

		borderWidth: 1,

		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});