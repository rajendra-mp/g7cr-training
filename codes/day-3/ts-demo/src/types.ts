export type operationType = (a: number, b: number) => number

export type dbType = 'mongodb' | 'postgres' | 'mysql'

export enum DBType {
    mongodb,
    postgres,
    mysql
}
//3. type inference
const a = 10
export class Person {
    name: string;
    id: number;
}