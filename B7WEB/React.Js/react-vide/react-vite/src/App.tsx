import { useState } from "react"
import { Header } from "./componets/Header";



const App = ()=> {
  const [name, setName] = useState('Alex')

  const clickou = ()=> {
    setName('Gomes')

  }

 return (
  
   <div>
      meu nome é {name}
        <button onClick={clickou}>Click aqui</button>
     
     
     
     </div>
 )
}


// JSX é uma forma de digitar codigo mais facil.
// Expressões dentro de JSX 

export default App;