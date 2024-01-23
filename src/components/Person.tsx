import { useState } from "react";

type Props = {
  name: string;
  age: number;
};

const Person = ({ name, age }: Props) => {
  // there are two ways to get the props:
  // use dot-notation "props.propName"
  // const Person = (props: Props) => {
  // use object destructuring "propName"
  // const Person = ({propName, propName}: Props) => {

  const [bonus, setBonus] = useState<number>(0);
  return (
    <div>
      <h1>Hello</h1>
      <h2>my name is {name}</h2>
      <h2>with the age of {age}</h2>
      <br />
      <p>with bonus of {bonus}</p>

      <button
        onClick={(): void => {
          setBonus(bonus + 1);
        }}
      >
        add bonus
      </button>
    </div>
  );
};

export default Person;
