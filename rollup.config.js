import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
   input: "./src/index.ts",
   output: [
      {
         file: "out/index.js",
         format: "cjs",
         name: "Mapper",
         sourcemap: true,
      },
   ],
   plugins: [typescript(), nodeResolve()],
};
