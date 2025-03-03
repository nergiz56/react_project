import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
  const randomDesc = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>REACT</h1>
      <p>{randomDesc} Benim Abim geceleri maymuna dönüşüyor!</p>
    </header>
  );
}

