import { Field, Int, ObjectType } from "@nestjs/graphql"
import { UserPreference } from "./UserPreference"

@ObjectType()
export class User {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    email: string

    @Field({ nullable: true })
    displayName?: string

    @Field({ nullable: true })
    preference?: UserPreference
}
