import React from 'react';
import imagenes from '../img/Images';

const PsServicios = () => {
    return (
        <div>
            <div className="sony_logo">
                <img classname="img_sony_logo" src={imagenes.sony_logo} />
            </div>

            <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className="logo_playstation" src={imagenes.playStation_logo} alt="" width="27.22" height="21.08" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Juegos <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hardware <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Servicios <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Noticias <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tienda <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Asistencia <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Noticias <i class="bi bi-chevron-down"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav ul-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">My PlayStation <i class="bi bi-chevron-down"></i></a>
                            </li>
                            <button type="button" class="btn btn-primary" >Iniciar sesión</button>
                            <form className="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                                <button className="btn icon btn-outline-success" type="submit"><img src="" alt="" /><i class="bi bi-search"></i></button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default PsServicios;

/*

<div>
            <div>
                <img src={imagenes.playStation_logo} />
                <button>Juegos</button>
                <button>Hardware</button>
                <button>Servicios</button>
                <button>Noticias</button>
                <button>Tienda</button>
                <button>Asistencia</button>
            </div>
            <div>
                <button>My PlayStation</button>
                <button>Iniciar Sesión</button>
                <button>Buscar________</button>
            </div>
        </div>

*/

/*<Navbar bg="light" variant="light">
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#features">Features</Nav.Link>
                   <Nav.Link href="#pricing">Pricing</Nav.Link>
               </Nav>
               <Form inline>
                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-info">Search</Button>
               </Form>
           </Navbar>
           import * as ReactBootStrap from "react-bootstrap";
           */