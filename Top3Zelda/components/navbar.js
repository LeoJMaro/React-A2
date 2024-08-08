import {View} from 'react-native';
import {router} from 'expo-router';
import Button from './button';

export default function NavBar() {
	const handleHome = () => {
		router.navigate('/');
	}

	const handleUpdate = () => {
		router.navigate('/update');
	}

	return (<View style={{justifyContent: "center", paddingTop: 40, paddingLeft: 15, paddingRight: 10, backgroundColor: '#000000'}}>
		<Button label={"Game"} onPress={handleHome}/>
		<Button label={"Update"} onPress={handleUpdate}/>
	</View>);
}
