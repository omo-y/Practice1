/* eslint-disable  */
/*
 * typescript 基本の型
 */
//boolean
let bool: boolean = true;

//number
let num: number = 0;

const num1: number = 1;

//string
let str: string = "A";

//Array配列
let ary: Array<number> = [0, 1, 2];
let ary: number[] = [0, 1, 2];

//tupple型
let tupple: [number, string] = [0, "A"];

//any型
let any: any = 0;
let any1: any = false;

//void
const funcA = (): void => {
  const a: number = 0;
};

//null型
let A: null = null;

//undefined型
let A: undefined = undefined;

//object型
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
