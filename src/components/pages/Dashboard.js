import { useState } from 'react';
import "../styles/dashboard.css";

function Dashboard() {
  const [boxActive, setBoxActive] = useState(false);

  function handleClick() {
    setBoxActive(!boxActive);
  }

  return (
    <div className="dashboard">
      <button onClick={handleClick}>Click me</button>
      <div className={`box ${boxActive ? 'active' : ''}`}></div>
    </div>
  );
}
export default Dashboard