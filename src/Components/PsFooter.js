import React from 'react';
import imagenes from '../img/Images';

const PsFooter = () => {
    return (
        <div className="container-fluid Psfooter">
            <div className="container footer">
                <img className="logo_playstation" src={imagenes.playStation_logo} alt="" width="70" height="70" />
                <div className="options">
                    <ul className="ul">
                        <li>
                            <a href="">Asistencia</a>
                        </li>
                        <li>
                            <a href="">Política de privacidad</a>
                        </li>
                        <li>
                            <a href="">Términos de uso del sitio web</a>
                        </li>
                        <li>
                            <a href="">Mapa del sitio</a>
                        </li>
                        <li>
                            <a href="">PlayStation Studios</a>
                        </li>
                        <li>
                            <a href="">Legal</a>
                        </li>
                        <li>
                            <a href="">Acerca de SIE</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Términos de servicio de PSN</a>
                        </li>
                        <li>
                            <a href="">Política de cancelación de PS Store</a>
                        </li>
                        <li>
                            <a href="">Avisos de salud</a>
                        </li>
                        <li>
                            <a href="">Acerca de las clasificaciones</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">YouTube</a>
                        </li>
                        <li>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <a href="">Aplicación Android</a>
                        </li>
                        <li>
                            <a href="">Aplicación iOS</a>
                        </li>
                    </ul>
                </div>
                <span>© 2021 Sony Interactive Entertainment Inc. Todos los derechos reservados.</span>
            </div>
        </div>
    )
};

export default PsFooter;