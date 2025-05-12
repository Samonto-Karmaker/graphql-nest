import { Args, Int, Parent, Query } from "@nestjs/graphql"
import { Resolver, ResolveField } from "@nestjs/graphql"
import { User } from "../model/User"
import { mockUsers } from "src/data/mockUsers"
import { UserPreference } from "../model/UserPreference"
import { mockUserPreference } from "src/data/mockUserPreference"

@Resolver(() => User)
export class UserResolver {
    @Query(() => [User])
    getUsers() {
        return mockUsers
    }

    @Query(() => User, { nullable: true })
    getUserById(@Args("id", { type: () => Int }) id: number) {
        return mockUsers.find(user => user.id === id)
    }

    /**
     * Resolves the `preference` field for the `User` type.
     * This method fetches the `UserPreference` object associated with the given user.
     *
     * In a database scenario, this resolver may not be necessary if a join query
     * can fetch both the user and their preferences in one step. However, it is
     * useful when resolving fields dynamically or when data comes from separate sources.
     */
    @ResolveField(() => UserPreference, { nullable: true, name: "preference" })
    getUserPreference(@Parent() user: User): UserPreference | null {
        const userPreference = mockUserPreference.find(
            preference => preference.userId === user.id
        )
        return userPreference || null
    }
}
