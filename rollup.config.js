import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
   input: "./src/index.ts",

   output: [
      {
         file: "out/src/index.js",
         format: "umd",
         name: "Mapper",
         sourcemap: true,
      },
   ],
   plugins: [typescript(), nodeResolve()],
};
