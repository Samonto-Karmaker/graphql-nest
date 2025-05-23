import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateUserInput {
    @Field()
    name: string

    @Field()
    email: string

    @Field({ nullable: true })
    displayName?: string
}
