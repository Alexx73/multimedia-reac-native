export const SIGN_IN = "SIGN_IN"

import { SIGNIN_API_URL } from "../../data/Database"

export const signIn = (email, password) => {
    return async dispatch => {
        console.log(email, password)
        const response = await fetch(SIGNIN_API_URL, {
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
            type: SIGN_IN,
            token: data.idToken,
            userId: data.localId,
        })

    }
}
