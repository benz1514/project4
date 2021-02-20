import { useState } from "react";
import Slider from "infinite-react-carousel";

import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
        </Jumbotron>
        <h1>Home Page</h1>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">หน้าแรก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">เกี่ยวกับ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">ติดต่อ</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Slider dots auto>
          <div>
            <img
              src="https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png"
              alt="รุปภาพ"
            ></img>
          </div>
          <div>
            <img
              src="https://www.cmru.ac.th/assets/images/banners/th/04-02-2021/5781919f63882117a2c1233753b37f1a36d7ef05.png"
              alt="รุปภาพ"
            ></img>
          </div>
          <div>
            <img
              src="https://www.cmru.ac.th/assets/images/banners/th/06-01-2021/98ffb400b8efa9c2c1ef328aa3ddbbb011049e41.png"
              alt="รุปภาพ"
            ></img>
          </div>
          <div>
            <img
              src="https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png"
              alt="รุปภาพ"
            ></img>
          </div>
          <div>
            <img
              src="https://img1.goodfon.com/wallpaper/nbig/6/df/tumannost-zvezdy-kosmos-1554.jpg"
              alt="รุปภาพ"
            ></img>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Home;
