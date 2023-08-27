import { Article, ArticleBox, Container, Diagonal, EmptBox } from "./styles";

const DEG = "83deg";
const ARTIGOS = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam expedita
officia id sapiente adipisci ipsum, reiciendis quis numquam cumque
ducimus? Culpa quia rerum autem quam in cumque, beatae accusantium
vel.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
tempora accusantium adipisci cumque nihil velit perferendis suscipit
accusamus tenetur rerum voluptatem quo, ea iure odit ex earum atque
rem quae. vel.`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex impedit
eum est, libero quae esse natus sint? Sequi rem eligendi sapiente
eveniet sit, deleniti repellendus dolorem veniam assumenda amet
molestias?`,
];

const Artigo = () => {
  return (
    <Container>
      {ARTIGOS.map((article, index) => (
        <ArticleBox key={index}>
          <EmptBox>
            <Diagonal deg={DEG} />
            <Diagonal deg={`-${DEG}`} />
          </EmptBox>
          <Article>
            {article}
          </Article>
        </ArticleBox>
      ))}
    </Container>
  );
};

export default Artigo;
