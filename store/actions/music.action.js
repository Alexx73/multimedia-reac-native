import { changePic } from '../../data/index'
import * as FileSystem from 'expo-file-system'

export const SELECT_MUSIC = 'SELECT_MUSIC'

export const USER_PIC = 'USER_PIC'


export const musicCategory = (id) => ({
    type: SELECT_MUSIC,
    musicID: id,
})


export const userPic =  ( image) => {
    return async dispatch => {
        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename

        try {
            await FileSystem.moveAsynch({
                from: image,
                to: Path,
            })

            const result = await changePic (
                Path,
            )          
            
            console.log(result)
            dispatch ({
                type: USER_PIC,
                pic: result.rows+_array,
            })
        } catch(error) { throw error }      
    }
}





