import { SQLite } from 'expo-sqlite'
import { resolve } from 'path-browserify'

const db = SQLite.openDatabase('address.db')

export const init = () => {

    const promise = new Promise((resolve, eject) => {
        db.transaction((tx) => {
            
        } )
    } )
}

