export interface Auth{
    email: string;
    password: string;
    token: Token;
}
export interface Token{
    token: string;
}