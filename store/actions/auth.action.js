export const SIGN_UP = "SIGN_UP"
import { SIGNUP_API_URL } from "../../data/Database"


export const signUp = (email, password) => {
    return async dispatch => {
        console.log(email, password)
        const response = await fetch(SIGNUP_API_URL, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password, 
                returnSecureToken: true,
            })
        })

        const data = await response.json()
        console.log(data)
        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        })

    }
}