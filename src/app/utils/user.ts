export interface IUserRaw{
    name : string,
    email : string,
    phone : string,
    address : IAddress,
}

interface IBase{
    id: number,
    date: Date
}

export type IUser = IBase & IUserRaw;

export interface IAddress {
    street : string,
    neighborhood ?: string,
    city : string,
    cep ?: string,
    state : string
}