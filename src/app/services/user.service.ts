import { Injectable } from '@angular/core';
import { IUser, IUserRaw } from '../utils/user';
import { config, database } from '../utils/db';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  create(user:IUserRaw):IUser{
    config.id = config.id + 1;
    const newUser = {...user, id: config.id, date: new Date()};
    database.push(newUser);
    return newUser;
  }

  list():IUser[]{
    return database;
  }

  index(id:number):IUser{
    return database.filter((user) => user.id === id)[0];
  }

  update(id:number, user:Partial<IUserRaw>):IUser{
    const oldUser = database.filter((data)=>data.id === id)[0];
    const index = database.indexOf(oldUser);
    const newUser:IUser = {
      id: id,
      date: oldUser.date,
      name: user.name || oldUser.name,
      email: user.email || oldUser.email,
      phone: user.phone || oldUser.phone,
      address: {
        street: user.address?.street || oldUser.address.street,
        neighborhood: user.address?.neighborhood || oldUser.address.neighborhood,
        city: user.address?.city || oldUser.address.city,
        cep: user.address?.cep || oldUser.address.cep,
        state: user.address?.state || oldUser.address.state,
      }
    };
    database[index] = newUser;
    return newUser;
  }

  delete(id:number):void{
    const oldUser = database.filter((data:IUser) => data.id === id)[0];
    const index = database.indexOf(oldUser);
    database.splice(index, 1);
  }
}
