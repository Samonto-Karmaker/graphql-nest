import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { UserPreference } from "../model/UserPreference"
import { AddUserPreferenceInput } from "../dto/addUserPreferenceInput"
import { mockUserPreference } from "src/data/mockUserPreference"
import { mockUsers } from "src/data/mockUsers"

@Resolver(() => UserPreference)
export class UserPreferenceResolver {
    private userPreferenceId = (mockUserPreference.length ?? 0) + 1

    @Mutation(() => UserPreference || null)
    addUserPreference(
        @Args("userPreference") userPreference: AddUserPreferenceInput
    ) {
        const { userId, isDarkTheme, isEmailEnable, isPushEnable } =
            userPreference
        const newUserPreference: UserPreference = {
            id: this.userPreferenceId++,
            userId,
            isDarkTheme,
            isEmailEnable,
            isPushEnable,
        }

        // Check if the userId is valid
        const userExists = mockUsers.some(user => user.id === userId)
        if (!userExists) {
            return null
        }

        // Check if the user preference already exists
        const existingPreference = mockUserPreference.find(
            preference => preference.userId === userId
        )
        if (existingPreference) {
            mockUserPreference.splice(
                mockUserPreference.indexOf(existingPreference),
                1
            )
        }

        mockUserPreference.push(newUserPreference)
        return newUserPreference
    }
}
