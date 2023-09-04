import { FC, useState, ChangeEvent, useContext } from "react";

import { appContext } from "./App";

export enum HairColor {
  blonde = "Nice hair color thumbs-up",
  black = "Really good and nice looking hair color",
  brown = "Awesome hair color",
}

interface Props {
  name: string;
  age: number;
  email?: string; // email is optional
  hairColor: HairColor;
}

function Person({ name, age, email, hairColor }: Props) {
  const [message, setMessage] = useState<string>();

  const handelInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event?.target.value);
  };
  const appContextValue = useContext(appContext)

  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>email: {email || "no email provided"}</p>
      <input type="text" onChange={handelInput} />
      <br />
      <p>my message: {message}</p>
      <p>hair color: {hairColor}</p>
      <h2>{appContextValue.name}</h2>
    </div>
  );
}
// ---------------------------------------
// imbedded event-handler
//
// const Person: FC<Props> = ({ name, age, email }) => {
//   const [message, setMessage] = useState("");
//   return (
//     <div>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <p>email: {email || "no email provided"}</p>
//       <input type="text" onChange={(event) => setMessage(event.target.value)} />
//       <br />
//       <p>my message: {message}</p>
//     </div>
//   );
// };

// function Person ({name, age, email}: Props){
//     return(
//         <div>
//             <p>name: {name}</p>
//             <p>age: {age}</p>
//             <p>email: {email || "no email provided"}</p>
//         </div>
//     )
// }

// ---------------------------------------
// props with destructuring
// function Person ({name, age, email}: Props){
//     return(
//         <div>
//             <p>name: {name}</p>
//             <p>age: {age}</p>
//             <p>email: {email}</p>
//         </div>
//     )
// }

// ----------------------------------------------
// props with no destructuring
// function Person (props: Props) {
//     return(
//         <div>
//             <p>name: {props.name}</p>
//             <p>age: {props.age}</p>
//             <p>email: {props.email}</p>
//         </div>
//     )
// }

export default Person;
