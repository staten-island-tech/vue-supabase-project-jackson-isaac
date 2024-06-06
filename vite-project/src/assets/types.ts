export type SessionData = {
    access_token: string;
    refresh_token: string;
    token_type: string;
    authenticated: boolean;
    id: string;
    email: string | undefined;
    newPlayer: boolean;
}
