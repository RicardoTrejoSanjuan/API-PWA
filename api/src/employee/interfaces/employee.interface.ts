import { Document } from 'mongoose'

export interface employee extends Document {
    readonly name:       string;
    readonly email:      string;
    readonly role:       string;
    readonly birdate:    string;
    readonly adress:     string;
    readonly skill:      string;
}