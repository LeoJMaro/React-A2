import { Slot } from 'expo-router';
import { View } from 'react-native';
import NavBar from '../components/navbar';
import { useState } from 'react';
import gameData from '../assets/games.json';
import { GameContext } from '../components/GameContext'

export default function HomeLayout() {
    const [gameIndex, setGameIndex] = useState(0);

    return (
        <>
            <NavBar/>
            <GameContext.Provider value={{gameIndex, setGameIndex}}>
                <Slot />
            </GameContext.Provider>
        </>
    )
};