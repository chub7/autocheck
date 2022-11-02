import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
           if(action.payload === 'up') {
               return [...state.sort((a, b) => {
                   if (a.name > b.name) {
                       return 1
                   } else return -1
               })]
           } else if (action.payload === 'down') {
               return [...state.sort((a, b) => {
                   if (a.name < b.name) {
                       return 1
                   } else return -1
               })]
           } else return state

           // need to fix
        }
        case 'check': {

            return [...state.sort((a, b) => {
                if (a.age > b.age) {
                    return 1
                } else return -1
            }).filter(e=>e.age>=18)]
        }

        default:
            return state
    }
}
