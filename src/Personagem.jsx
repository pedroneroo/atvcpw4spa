import { useParams, Link } from "react-router-dom";

export default function Personagem() {
  const { nome } = useParams();

  const descricoes = {
    goku: "Um alienígena da raça Saiyajin enviado à Terra, Goku é conhecido por sua força sobre-humana, coração puro, ingenuidade e paixão insaciável por lutas.",
    vegeta: "Vegeta conhecido pela sua rivalidade com Goku, é um guerreiro de elite, sério, inteligente e de personalidade forte, que prioriza o treinamento para superar seus limites. em combate corpo a corpo, forte e resistente.",
    gohan: "Gohan diferente de seu pai não tem paixão por lutas e prefere fazê-lo apenas quando precisa defender seus amigos. Porém, Gohan luta com os Guerreiros Z para defesa da Terra durante grande parte da sua vida.",
    piccolo: "Piccolo é um Namekuseijin astuto que evoluiu de um antagonista vilanesco para um sábio herói e mentor, conhecido por sua cor verde, inteligência superior, habilidades de regeneração e técnicas de energia.",
    broly: "Broly é um Saiyajin mutante de poder incalculável, caracterizado como um guerreiro lendário com coração gentil, mas instintos violentos quando enfurecido."
  };

  return (
    <div
  className="container"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgrounds[nome]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",  
    textAlign: "center"
  }}
>
    
      <h1>{nome.toUpperCase()}</h1>
      <p style={{ maxWidth: "600px", color: "white", margin: "10px 0" }}>
  {descricoes[nome] || "Personagem desconhecido."}
</p>
      <img
  src={imagens[nome]}
  alt={nome}
  style={{
    width: "250px",
    margin: "20px 0",
    borderRadius: "10px",
  }}
  
/>

<Link
  to="/"
  className="btn"
  style={{ marginTop: "10px" }}
>
  Voltar
</Link>
    </div>
  );
}

const backgrounds = {
  goku: "https://static.wikia.nocookie.net/dragonball/images/f/fe/Goku%27s_house_Super.jpg/revision/latest?cb=20201025110835",
  vegeta: "https://static.wikia.nocookie.net/legendadragonballtale/images/f/fd/Planet_Vegeta.jpg/revision/latest?cb=20221002202011",
  gohan: "https://static.wikia.nocookie.net/dragonball/images/6/63/Gohan%27s_House.png/revision/latest/scale-to-width-down/1200?cb=20240930203535",
  piccolo: "https://images3.alphacoders.com/677/677271.png",
  broly: "https://static.wikia.nocookie.net/dragon-ball-mystical-adventure/images/6/60/Continent_de_Glace.jpg/revision/latest?cb=20190505162255&path-prefix=fr"
};



const imagens = {
  goku: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f901a030-90c0-4470-b43f-ad4485e3f882/dg1lwx7-5657bb6f-c931-4d1a-bcc5-c4445ba0b913.png/v1/fill/w_583,h_1370/goku_gt_adulto_ssj4_render_png_by_davidomegax_dg1lwx7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM3MCIsInBhdGgiOiIvZi9mOTAxYTAzMC05MGMwLTQ0NzAtYjQzZi1hZDQ0ODVlM2Y4ODIvZGcxbHd4Ny01NjU3YmI2Zi1jOTMxLTRkMWEtYmNjNS1jNDQ0NWJhMGI5MTMucG5nIiwid2lkdGgiOiI8PTU4MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NXKYPqzkQXAObRRCl1nqCFfaphR9rqmMrvY7XL2IWr8",
  vegeta: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c6375bc-2899-41b7-b087-242c7cc86a23/ddbzvze-2acb916f-d715-4377-86b5-f99e49c828ec.png/v1/fill/w_1600,h_2327/vegeta_ssj_blue_evolution_by_andrewdb13_ddbzvze-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjMyNyIsInBhdGgiOiIvZi80YzYzNzViYy0yODk5LTQxYjctYjA4Ny0yNDJjN2NjODZhMjMvZGRienZ6ZS0yYWNiOTE2Zi1kNzE1LTQzNzctODZiNS1mOTllNDljODI4ZWMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wYpeA3vMSCcx6XSOMYBI_51La07G_yOpuI4RoU2zOCo",
  gohan: "https://i.pinimg.com/originals/bc/75/63/bc756390ae331a7d3babb875e3b93478.png",
  piccolo: "https://static.wikia.nocookie.net/anicrossbr/images/e/ef/Render_de_Piccolo.png/revision/latest?cb=20151026082344&path-prefix=pt-br",
  broly: "https://preview.redd.it/the-weakness-of-ikari-and-super-saiyan-broly-in-the-game-v0-0ct10rwksiyd1.png?width=640&crop=smart&auto=webp&s=359ffe376f0be2df53621a2bcd8ee0f967e73d5c"
};
