import { Image, Text } from 'react-native';

export default function Games( props ) {

    return (
        <>
            <Text>{props.games.name}</Text>
            <Image source={props.imageList[props.gamesIndex]}  />
            <Text>{props.games.year}</Text>
            {
                props.games.actors.map( (actor) => {
                    return <Text key={actor}>{actor}</Text>
                })
            }
        </>
    );
}