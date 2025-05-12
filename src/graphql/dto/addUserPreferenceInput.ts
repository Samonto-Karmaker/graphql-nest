import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class AddUserPreferenceInput {
    @Field(() => Int)
    userId: number

    @Field({ defaultValue: false })
    isDarKTheme: boolean

    @Field({ defaultValue: false })
    isEmailEnable: boolean

    @Field({ defaultValue: false })
    isPushEnable: boolean
}
