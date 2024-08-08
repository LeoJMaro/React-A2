import {Image, StyleSheet, Text} from 'react-native';

const images = [
	"https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg",
	"https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
	"https://upload.wikimedia.org/wikipedia/en/1/1b/The_Legend_of_Zelda_A_Link_Between_Worlds_NA_cover.jpg",
	"https://upload.wikimedia.org/wikipedia/fr/thumb/9/90/The_Legend_of_Zelda_Breath_of_the_Wild_Logo.png/978px-The_Legend_of_Zelda_Breath_of_the_Wild_Logo.png",
];
// just used to store urls to input into box

const styles = StyleSheet.create({
	stretch: {
		objectFit: "contain", height: 300, width: "90%",
	}
});

export default function Game({gameId, name, year, imageURL}) {
	return (<>
		<Text>{name}</Text>
		<Text>{year}</Text>
		<Image resizeMode="cover" style={styles.stretch} source={{uri: imageURL}}/>
	</>);
};
