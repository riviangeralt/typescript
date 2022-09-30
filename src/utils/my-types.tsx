// in this file we will declare types

export type MyTypeProps = {
  name: string; // can only contain string
  age: number; // can only contain number
  is_active: boolean; // can only contain boolean value
  strArr: string[]; // can only contain array of strings
  data: object; // can only contain any object
  anotherObject: {}; // another way of decalring object
  item: {
    // can be an object with only two propeties id and title
    id: number;
    title: string;
  };
  itemArr: {
    // can be an array of object with two properties id and title
    id: number;
    title: string;
  }[];
};

// we can use defined types as value also

type Item = {
  id: number;
  title: string;
};

export type Items = {
  item: Item;
  items: Item[];
};

//optional props
export type OptionalProps = {
  requiredProp: number;
  optionalProp?: string; // ? indicates optional prop
};

//check for keys type also
type KeysCheck = {
  [key: number]: string; // a key which is a number has a value of string
};

// function in type script
const addTwoNums = (a: number, b: number): number => {
  return a - b;
};

// explanation of syntax
// arguments a & b are type number so that we cannot pass any other type of variable
// (number=>) = defines the return type of the function

// using rest operator in type script
const addNNumbers = (a: number, ...otherNumbers: number[]) => {
  return a;
};
