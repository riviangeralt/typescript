// instead of using proptypes to declare the type of arguments, in typescript we use types or interfaces

import React from "react";

//this is called type declaration
//we can export it also
type NameTagProps = {
  name: string; //name can only be string
  children?: React.ReactNode; //  mostly use for children components
  style?: React.CSSProperties;
};

// we can define types inline also
// const App = (props :{ name : string })

// we have commonly used props

// type CommonUsedProps = {
//   name: string;
//   age:number;
//   isDead:boolean
// };

// in typescript we can define type array
// key : string[] // this will make sure that the array only contains string not anything

// we can check for a particular string as well
// key : 'loading' | 'completed' | 'error' // here we will check that the props passed only contains one of the folllowing

const NewNameTag = (props: NameTagProps) => {
  const { name, children, style = {} } = props;
  // pass that props here, so using that we will check each and every props passed to this component
  return (
    <>
      <h5 className="my-name">My name is {name}.</h5>
      {children}
    </>
  );
};

export default NewNameTag;
