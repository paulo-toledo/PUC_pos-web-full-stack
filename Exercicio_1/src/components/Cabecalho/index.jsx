import { Container, Icon, Input, InputSearch, Logo, Menu, MenuBox, MenuItem } from "./styles";
import { LiaSearchSolid } from "react-icons/lia";

const TOPICS = new Array(4).fill("Topic").map((topic, index) => topic += ` ${index + 1}`);

const Cabecalho = () => {

  return (
    <Container>
      <Logo>LOGO</Logo>
      <MenuBox>
        <Menu>
          {TOPICS.map((topic, index) => (
            <MenuItem key={index}>{topic}</MenuItem>
          ))}
        </Menu>
        <InputSearch>
          <Input placeholder="Search" type="search" />
          <Icon>
            <LiaSearchSolid  />
          </Icon>
        </InputSearch>
      </MenuBox>
    </Container>
  );
};

export default Cabecalho;
