## Usage

```javascript
// 0.0.7 version uses CommonJS
// 0.0.6 and earlier uses ESModule
import { mapper } from "callback-object-mapper"

// We may have a model like this
class User {
   constructor(
      public name: string,
      public surname: string,
      public age: number,
      public email: string,
      public password: string,
   ) {}
}

// DTO that we'd like to return
type UserDTO = {
   fullName: string;
   age: number;
}

// User instance
const user = new User("John", "Doe", 20, "john.doe@example.com", "password123");

// specify types so that you get auto complete
//                    ⬇src type  ⬇dst type
const result = mapper<User, UserDTO>(user, // ⬅ pass the source object here
   {
      fullName: (user) => `${user.name} ${user.surname}`, // mapping object, takes callbacks that receive the source
      age: (user) => user.age,                            // you may press `Ctrl + Space` for auto complete
   }
);
console.log(result);  // { fullName: 'John Doe', age: 20 }
```