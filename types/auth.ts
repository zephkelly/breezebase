export type Provider = 'google' | 'github' | 'credentials';

interface BaseUser {
    picture?: string;
}

export interface UnregisteredUser extends BaseUser {
    provider: Provider;
    email: string;
    registered: false;
}

export interface RegisteredUser extends BaseUser {
    id: string;
    display_name: string;
}

export type BackendUser = RegisteredUser & Pick<UnregisteredUser, 'email' | 'provider'>;

interface BaseUserSession {
    loggedInAt: number;
    extended?: any;
    secure?: Record<string, unknown>;
}

export interface UnregisteredUserSession extends BaseUserSession {
    user: UnregisteredUser;
}

export interface RegisteredUserSession extends BaseUserSession {
    user: RegisteredUser;
}

import { type User } from '#auth-utils';
export function isUnregisteredUser(user: User): user is UnregisteredUser {
    return (user as UnregisteredUser).registered === false;
}