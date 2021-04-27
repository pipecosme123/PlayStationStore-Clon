import React from 'react';
import imgs from '../img/Images';

const PsNav = () => (
    <div>
        <nav class="navbar sticky-top navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={imgs.playStationStore_logo} width="229" height="51"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-center navbar-collapse" id="navbarNav">
                    <ul class="ul navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Más reciente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Colecciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PS5</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Suscripciones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default PsNav;

/*<img></img>
fixed-top
        <div>
            <button>Más reciente</button>
            <button>Colecciones</button>
            <button>Ofertas</button>
            <button>PS5</button>
            <button>Suscripciones</button>
        </div>*/