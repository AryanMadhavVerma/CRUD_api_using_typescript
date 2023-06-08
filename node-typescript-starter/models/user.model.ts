import mongoose, {Schema, Model, Document} from 'mongoose';
import { StringLiteral } from 'typescript';

type UserDocument = Document & {
    fullName: string;
    email: string;
    password: string;
    enabled: string;
    role: string;
};

type UserInput = {
    fullName: UserDocument['fullName'];
    email: UserDocument['email'];
    password: UserDocument['password'];
    enabled: UserDocument['enabled'];
    role: UserDocument['role'];
  };

const userSchema = new Schema(
    {
        fullname: {
            type: Schema.Types.String,
            required: true,
        },
        email: {
            type: Schema.Types.String,
            required: true,
            unique: true,
            index: true,
        },
        password: {
            type: Schema.Types.String,
            required: true,
        },
        enabled: {
            type: Schema.Types.Boolean,
            default: true,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
            index: true,

        },

    },
    {
        collection: 'users',
        timestamps: true,
    }
)

const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema)

export {User, UserInput, UserDocument};
