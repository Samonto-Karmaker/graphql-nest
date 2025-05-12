import { Args, Int, Query } from "@nestjs/graphql"
import { Resolver } from "@nestjs/graphql"
import { User } from "../model/User"
import { mockUsers } from "src/data/mockUsers"

@Resolver()
export class UserResolver {
    @Query(() => [User])
    getUsers() {
        return mockUsers
    }

    @Query(() => User, { nullable: true })
    getUserById(@Args("id", { type: () => Int }) id: number) {
        return mockUsers.find(user => user.id === id)
    }
}
