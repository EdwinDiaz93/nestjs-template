import { Rol } from "../../roles/entities";

export interface SeedUser {
    email: string;
    fullName: string;
    password: string;
    roles: Rol[];
}