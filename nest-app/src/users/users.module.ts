import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserShema } from "./schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([ { name: User.name, schema: UserShema } ])]
})

export class UserModule {}