import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UserPreference {
    @Field(() => Int)
    id: number

    @Field(() => Int)
    userId: number

    @Field()
    isDarKTheme: boolean

    @Field()
    isEmailEnable: boolean

    @Field()
    isPushEnable: boolean
}
