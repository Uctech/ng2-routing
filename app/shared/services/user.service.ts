import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
    {
        id: 1,
        name: 'Uche',
        username: 'Livionics',
        avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p160x160/14907642_1007585236019184_665161857019227290_n.jpg?oh=5be7e860f17d419b40682f4a95ec36df&oe=59624727'
    },
    {
        id: 2,
        name: 'Auwal',
        username: 'MS',
        avatar: 'https://pbs.twimg.com/profile_images/810930050614882304/sIfY5840.jpg'
    }
    ,
    {
        id: 2,
        name: 'Prosper',
        username: 'Unicodedev',
        avatar: 'https://pbs.twimg.com/profile_images/831928149201997824/0nhCVhth.jpg'
    }
]);

@Injectable()

export class UserService {
    //get all UserService

    getUsers() {
        return usersPromise;
    }

    //find a specific user
    getUser(username) {
        return usersPromise.then(users => users.find(user => user.username === username));
       /** let user = usersPromise.then(users => {
            return users.find(user => {
                return user.username === username;
            });
        });
        return user;
        **/
    }
}