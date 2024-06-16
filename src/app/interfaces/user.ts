export interface IUser {
    name : string,
    email : string,
    phone : string,
    address : IAddress,
}

export interface IAddress {
    street : string,
    neighborhood ?: string,
    city : string,
    cep ?: string,
    state : string
}