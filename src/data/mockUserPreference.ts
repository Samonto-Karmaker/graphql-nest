import { UserPreference } from "../graphql/model/UserPreference"

export const mockUserPreference: UserPreference[] = [
    {
        id: 1,
        userId: 1,
        isDarkTheme: true,
        isEmailEnable: true,
        isPushEnable: true,
    },
    {
        id: 2,
        userId: 3,
        isDarkTheme: false,
        isEmailEnable: false,
        isPushEnable: false,
    },
    {
        id: 3,
        userId: 2,
        isDarkTheme: true,
        isEmailEnable: false,
        isPushEnable: true,
    },
]
