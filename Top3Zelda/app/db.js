import * as SQLite from 'expo-sqlite';

async function initializeDB() {
	const db = await SQLite.openDatabaseAsync('games.db');
	await db.runAsync(`
	CREATE TABLE IF NOT EXISTS games (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		imageURL TEXT, 
		year TEXT
		)
		`);
	const result = await db.getAllAsync(`SELECT * FROM games`);
	if (result.length === 0) {
		await db.runAsync(`
	INSERT INTO games (name, imageURL, year) 
	VALUES("Zelda Majora's Mask",
	"https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg" ,
	'1999')
	`);
	}
}

export async function selectGames(db) {
	return await db.getAllAsync(`SELECT id, name, imageURL, year FROM games`);
}

export async function insertGame(db, gameName, gameYear, gameImageURL) {
	const result = await db.runAsync(`INSERT INTO games (name, year, imageURL) VALUES(?, ?, ?)`, gameName, gameYear, gameImageURL);
	return result.lastInsertRowId;
}

export async function deleteGameById(db, id) {
	await db.runAsync(`DELETE FROM games WHERE id = ?`, id);
}

export async function updateGame(db, gameName, gameYear, imageURL) {

	await db.runAsync(`UPDATE games SET name = ?, imageURL = ?, year = ? WHERE id = ?`, gameName, imageURL, gameYear, id);
}
