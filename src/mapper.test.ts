import assert from "assert";
import { IMappper } from "./IMapper.js";

export function testMapper(mapper: IMappper) {
   const userModel = {
      firstName: 'bebrik',
      lastName: 'abobow',
      id: 1,
      createdAt: new Date(),
      email: "aboba@tochka.ru",
      role: 'user' as 'user' | 'admin'
   } as const;

   type ApiUser = {
      fullName: string,
      email: string,
      isAdmin: boolean
   }

   const result = mapper<typeof userModel, ApiUser>(
      userModel,
      {
         email: (s) => s.email,
         fullName: (s) => `${s.firstName} ${s.lastName}`,
         isAdmin: (s) => s.role === "admin"
      }
   )

   assert.deepEqual(
      { email: "aboba@tochka.ru", fullName: "bebrik abobow", isAdmin: false },
      result,
      new Error("Mapper doesn't work")
   )
   console.log("Mapper works fine");
}
