"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usersPromise = Promise.resolve([
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
    },
    {
        id: 2,
        name: 'Prosper',
        username: 'Unicodedev',
        avatar: 'https://pbs.twimg.com/profile_images/831928149201997824/0nhCVhth.jpg'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    //get all UserService
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    //find a specific user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
        /** let user = usersPromise.then(users => {
             return users.find(user => {
                 return user.username === username;
             });
         });
         return user;
         **/
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map