
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getUser(): Nullable<User> | Promise<Nullable<User>>;
}

export interface Role {
    id: string;
    name: string;
    permissions: string;
    position: number;
    color: number;
}

export interface Guild {
    id: string;
    name: string;
    icon?: Nullable<string>;
    description?: Nullable<string>;
    banner?: Nullable<string>;
    owner_id?: Nullable<string>;
    roles?: Nullable<Nullable<Role>[]>;
}

export interface User {
    discordId: string;
    username: string;
    avatar?: Nullable<string>;
    discriminator: string;
    guilds?: Nullable<Nullable<Guild>[]>;
}

type Nullable<T> = T | null;
