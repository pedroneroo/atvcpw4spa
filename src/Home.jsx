import { Link } from "react-router-dom";

const personagens = ["goku","vegeta","gohan","piccolo","broly"];

export default function Home() {
  return (
    <div className="container">
      <h1>Escolha seu Personagem</h1>
      <div className="lista">
        {personagens.map((p) => (
          <Link key={p} to={`/personagem/${p}`} className="card">
            {p.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
