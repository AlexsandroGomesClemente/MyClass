//import { Fragment} from 'react' //Raramente é usado

type Props = {
    title: string
}

const clickou = () => {
    alert(`O botão foi clicado`)
}

export const Header = ({title}: Props)=> {
    return(
      <div>
          <button onClick={ clickou}>Clique aqui</button>
      </div>
    )
  }