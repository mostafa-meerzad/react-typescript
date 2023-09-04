import {createContext, } from "react";
import Person from "./Person"
import { HairColor } from "./Person"

type contextType = {
  name: string
}

const appContext = createContext<contextType>({name: "mostafa"})

function App() {

  return (
    <appContext.Provider value={{name:"mostafa"}}>
    <Person name="Mostafa" age={23} hairColor={HairColor.black} />
    </appContext.Provider>
  )
}
export default App
export {appContext}
