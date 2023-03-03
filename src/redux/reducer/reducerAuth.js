import { INCREMENT, DECREMENT, RESET } from "../type/type"
// 2) create reducer for set state and change it
export const reducerAuth = (state = { isLog: true }, action) => {

    if (action.type === 'IsLogin') {
        return { isLog: true }
    }

    if (action.type === 'NotLogin') {
        return { isLog: false }
    }

    return state;
}