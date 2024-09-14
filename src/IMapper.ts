/** Every Target key has a mapping function */
export type ObjectMap<Source extends object, Target extends object> =
   { [K in keyof Target]: (obj: Source) => Exclude<Target[K], ''> };

export interface IMappper {
   /** First type is Source, second is target */
   <Source extends object, Target extends object>
      (source: Source, map: ObjectMap<Source, Target>): Target
}