import {Slot} from 'expo-router';
import React, {useState} from 'react';
import {SQLiteProvider} from 'expo-sqlite';
import NavBar from '../components/navbar';
import {GameContext} from '../components/GameContext';
import {PaperProvider} from 'react-native-paper';

export default function HomeLayout() {
	const [games, setGames] = useState(null);
	const [selectedGame, setSelectedGame] = useState(null);
	return (<PaperProvider>
			<SQLiteProvider
				databaseName="games2.db"
				assetSource={{assetId: require('./games.db'), forceOverwrite: false}}>
				<NavBar/>
				<GameContext.Provider value={{games, setGames, selectedGame, setSelectedGame}}>
					<Slot/>
				</GameContext.Provider>
			</SQLiteProvider>
		</PaperProvider>);
}
