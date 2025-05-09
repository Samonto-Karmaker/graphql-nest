import { Query } from "@nestjs/graphql"
import { Resolver } from "@nestjs/graphql"
import { User } from "../model/User"

@Resolver()
export class UserResolver {
    @Query(() => [User])
    getUsers() {
        return [
            {
                id: 1,
                name: "John Doe",
                displayName: "John",
            },
            {
                id: 2,
                name: "Jane Doe",
                displayName: "Jane",
            },
        ]
    }
}
