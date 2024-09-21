
import { mapper } from "ooooo";

class User {
   constructor(
      public name: string,
      public surname: string,
      public age: number,
      public email: string,
      public password: string,
   ) {}
}

type UserDTO = {
   fullName: string;
   age: number;
}

const user = new User("John", "Doe", 20, "john.doe@example.com", "password123");

const result = mapper<User, UserDTO>(user, 
   {
      fullName: (user) => `${user.name} ${user.surname}`, 
      age: (user) => user.age,
   }
);
console.log(result);  // { fullName: 'John Doe', age: 20 }