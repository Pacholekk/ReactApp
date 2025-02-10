import reactImg from '../../assets/react-core-concepts.png';
import "./Header.css"
const reactDescritpion = ["Fundamental", "Crucial", "Core"];

function getRandomInt(concepts)
{
  const randomIndex = Math.floor(Math.random() * concepts.length);
  return concepts[randomIndex];
}


export default function Header(){
    const concept = getRandomInt(reactDescritpion);
    return ( 
      <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {concept} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }