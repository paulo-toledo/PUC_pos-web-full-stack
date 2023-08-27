import { Container, Menu, MenuItem } from "./styles";

const SECTIONS = new Array(4).fill("Section").map((section, index) => section += ` ${index + 1}`);

const MenuNavegacao = ()=> {
    return (
      <Container>
        <Menu>
          { SECTIONS.map((section, index) => (
            <MenuItem key={index}>{section}</MenuItem>
          ))}
        </Menu>
      </Container>
    )
}

export default MenuNavegacao;