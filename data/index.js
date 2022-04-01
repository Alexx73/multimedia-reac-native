import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('address.db')

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
               `CREATE TABLE IF NOT EXISTS address (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , 
                name TEXT NOT NULL ,
                image TEXT NOT NULL ,
                city TEXT NOT NULL ,
                country TEXT  NOT NULL,
                access TEXT NOT NULL ,
                favorites TEXT NOT NULL
                )`,
                [],
                () => { resolve() } , 
                (_, err) => { reject(err) } ,                
            )
        } );
    } )
    return promise;
}

// -----------------

export const changePic = ( pic ) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
               `
              UPDATE address
              SET image = ${ pic}
               
               `,
                [ 'address', image ],
                (_, result) => { resolve(result) } , 
                (_, err) => { reject(err) } ,                
            )
        } );
    } )
    return promise;
}

// -----------------

export const loadData = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
               `
                SELECT * FROM address
               `,
                [],
                (_, result) => { resolve(result) } , 
                (_, err) => { reject(err) } ,                
            )
        } );
    } )
    return promise;
}

// -----------------

export const insertData3 = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
               `
               
               `,
                [],
                () => { resolve() } , 
                (_, err) => { reject(err) } ,                
            )
        } );
    } )
    return promise;
}

