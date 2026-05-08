export default function Notation() {
  const user = { name: "Rahim", "age years": 20 };

  // Dot: static key জানা থাকলে
  const nameDot = user.name; 

  // Bracket: dynamic key বা space থাকলে
  const key = "age years";
  const ageBracket = user[key];

  return (
    <div className="notation">
      <p>Dot: {nameDot}</p>
      <p>Bracket: {ageBracket}</p>
    </div>
  );
}