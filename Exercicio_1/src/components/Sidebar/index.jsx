import { Container, Content } from "./styles";

const SECTIONS = new Array(15).fill("Section").map((section, index) => section += ` ${index + 1}`);

const Sidebar = ()=> {

  return (
    <Container>
      {SECTIONS.map((section, index)=> (
        <Content key={index}>
          {section}
        </Content>
      ))}

    </Container>
  )
}

export default Sidebar;