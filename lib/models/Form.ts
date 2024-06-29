import mongoose, { Schema, Document } from 'mongoose';

export interface IForm extends Document {
    name: string;
    email: string;
    message: string;
}

const FormSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Form || mongoose.model<IForm>('Form', FormSchema);