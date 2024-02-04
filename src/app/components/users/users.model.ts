export interface User {
    _id?: string,
    username : string,
    email: string,
    phone: string,
    password: string,
    profile_picture?: File | null
}