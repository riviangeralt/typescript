import React, { ChangeEvent, useEffect, useState } from "react";
import NewNameTag from "./NameTag";

// this is an example of useState hook
// we can declare type of useState hook if we want but its not required

// syntax to define useState in typescript
// const [count, setCount] = useState<number>(0);
// type of use state can be defined in tags <>

const Counter = () => {
  const [count, setCount] = useState(0);

  // setting a state with no initial value
  const [character, setCharacter] = useState<string | null>(null);
  // if the initial value is null and we want to pass another data type in it we can use <datatype we want | null>
  // in the data type we want we can pass our own created types also
  //e.g <CharacterDataType | null> (for this we have to create CharacterDatatType)

  useEffect(() => {
    setTimeout(() => setCharacter("Aasim"), 1000);
  }, []);

  const onSubmitCount = (e: any) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let parsedData = Object.fromEntries(data);
    setCount(+parsedData.count);
  };

  // for this event handler we specify that the event we are getting is from an html input,
  //  (if this function is written in another file typescript doesn't know what typ oef event we are getting thats why.)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  return (
    <>
      <h1 className="count">Count {count}</h1>
      <div className="button-flex">
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      {/* this is using form onsubmit to demonstrate the use of hooks */}
      <form onSubmit={onSubmitCount} className="button-flex">
        <input type="number" name="count" />
        <button type="submit">add by count</button>
      </form>
      {/* this is using onchange method ehich is defined above*/}
      <input
        type="number"
        name="count"
        value={count}
        onChange={handleInputChange}
      />
      <br />
      {/* this is using onchange method with function defined inline */}
      <input
        type="number"
        name="count"
        value={count}
        onChange={(event) => {
          setCount(+event.target.value); // if we are defining function inline then we dont need to define the type of event
        }}
      />

      {character && <NewNameTag name={character} />}
    </>
  );
};

export default Counter;
