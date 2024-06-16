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
    return database.filter((user) => user.id === id) as any;
  }

  update(id:number, user:Partial<IUserRaw>):IUser{
    const oldUser = database.filter((data:IUser) => data.id === id) as any;
    const index = database.indexOf(oldUser);
    const newUser = {...oldUser, ...user};
    database[index] = newUser;
    return newUser;
  }

  delete(id:number):void{
    const oldUser = database.filter((data:IUser) => data.id === id) as any;
    const index = database.indexOf(oldUser);
    database.slice(index, index+1);
  }
}
