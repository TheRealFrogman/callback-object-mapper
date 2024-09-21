"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ooooo_1 = require("ooooo");
var User = /** @class */ (function () {
    function User(name, surname, age, email, password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    return User;
}());
var user = new User("John", "Doe", 20, "john.doe@example.com", "password123");
var result = (0, ooooo_1.mapper)(user, {
    fullName: function (user) { return "".concat(user.name, " ").concat(user.surname); },
    age: function (user) { return user.age; },
});
console.log(result); // { fullName: 'John Doe', age: 20 }
