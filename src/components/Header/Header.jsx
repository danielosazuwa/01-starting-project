import "../Header/Header.css";
import reactImg from "../../assets/react-core-concepts.png";

export function Header() {
  const reactdescription = ["Fundamental", "Core", "Crucial"];
  const randomIndex = Math.floor(Math.random() * reactdescription.length);
  const randomDescription = reactdescription[randomIndex];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
