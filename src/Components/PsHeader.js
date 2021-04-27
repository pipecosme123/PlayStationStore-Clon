import React from 'react';
import PsNav from './PsNav';
import PsServicios from './PsServicios';
import './../CSS/PsHeader.css';

const PsHeader = () => (
    <div>
        <PsServicios></PsServicios>
        <PsNav></PsNav>
    </div>
);

export default PsHeader;