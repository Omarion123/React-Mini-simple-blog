import { useState } from "react"; // to set react component we use useState
const Home = () => {
  const [name, setName] = useState("omarion"); // we use hook to set the variable, and value could be anything= string, number, boolean
  const [age, setAge] = useState(25); // we use hook to set the variable, and value could be anything= string, number, boolean
  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
