import { Text, TextInput, StyleSheet} from 'react-native';
import Button from '../components/button';
import { GameContext } from '../components/GameContext';
import { useContext, useState } from 'react';
import Games from '../assets/games.json';

export default function Page() {
  const { gameIndex } = useContext(GameContext);
  const selectGame = Games[gameIndex];
  const [gameName, setGameName] = useState(selectGame.name);
  const [gameYear, setGameYear] = useState(selectGame.year);
  const [gamePosterIndex, setGamePosterIndex] = useState(selectGame.image);
  const [displayPosterValue, setDisplayPosterValue] = useState(selectGame.image.toString());

  const updateGameInfo = () => {
        selectGame.name = gameName;
        selectGame.year = gameYear;
        selectGame.image = gamePosterIndex;
  }

  const updateGamePosterIndex = (text) => {
     setDisplayPosterValue(text);
     if( !isNaN(text) && text != "") {
        setGamePosterIndex(parseInt(text));
     }
  }


  return (
    <>
        <Text>Game Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={setGameName}
            value={gameName}
        />
        <Text>Game Year</Text>
        <TextInput
            style={styles.input}
            onChangeText={setGameYear}
            value={gameYear}
        />
        <TextInput
            style={styles.input}
            onChangeText={updateGamePosterIndex}
            value={displayPosterValue}
        />
        <Button
            label={"Update"}
            onPress={updateGameInfo}
        />
    </>
    )
}

const styles = StyleSheet.create( {
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        	alignItems: 'center',
        	justifyContent: 'center',
    },
});
