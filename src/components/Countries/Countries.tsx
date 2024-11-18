import "./Countries.css";

interface Countri {
  name: string;
  onClick: (name: string) => void;
}

const Countries: React.FC<Countri> = ({ name, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };
  return <li onClick={handleClick}>{name}</li>;
};

export default Countries;