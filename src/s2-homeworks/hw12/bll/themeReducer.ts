const initState = {
    themeId: 1,
}
export type InitType = {
    themeId: number
}

type ActionType = ReturnType<typeof changeThemeId>

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            debugger
        return {themeId: Number(action.themeId)}

        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => {
    return {
        type: 'SET_THEME_ID',
        themeId: id } as const
} // fix any
