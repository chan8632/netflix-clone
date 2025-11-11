import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NetflixLogo from "../assets/netflix.png";
import { useState } from "react";
import { usePageStore } from "../stores/pageStore";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { setPageByParams } = usePageStore();
  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
    setPageByParams(1);
  };
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertOiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={NetflixLogo} style={{ height: "30px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="movies" className="text-white">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
