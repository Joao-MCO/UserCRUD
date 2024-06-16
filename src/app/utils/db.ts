import { IUser } from "./user";

export const database:IUser[] = [
    {
        id: 1,
        date: new Date(),
        name: "João Marcos",
        email: "joaomco.oliveira@gmail.com",
        phone: "35998768686",
        address: {
            street: "Av Wilson Megale, 806",
            neighborhood: "Centro",
            city: "Borda da Mata",
            cep: "37564-000",
            state: "MG"
        }
    }
]

export const config:any = {
    id: 1
}