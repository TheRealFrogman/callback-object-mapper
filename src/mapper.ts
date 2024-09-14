import assert from "assert";
import { IMappper, ObjectMap } from "./IMapper.js";

export const mapper: IMappper = function
   <Source extends object, Target extends object>
   (source: Source, map: ObjectMap<Source, Target>): Target {
   let t: Target = {} as Target
   for (const prop in map) {
      const currentMappingFn = map[prop];
      t[prop] = currentMappingFn(source)
   }
   return t
}