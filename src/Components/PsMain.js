import React from 'react';
import PsBanner from './PsBanner';
import PsHeader from './PsHeader';
import PsOfertas from './PsOfertas';
import PsSection from './PsSection';
import "./../CSS/PsMain.css";
import PsRecomendados from './PsRecomendados';
import PsFooter from './PsFooter';


const PsMain = () => (
    <div className="psMain">
        <PsHeader></PsHeader>
        <PsBanner></PsBanner>
        <div className="content">            
            <PsOfertas></PsOfertas>
            <PsRecomendados nickname="Recomendados" title=""></PsRecomendados>
            <PsSection title="Juegos Nuevos" nickname="NewGames"></PsSection>
            <PsSection title="Próximamente" nickname="ComingSoon"></PsSection>
            <PsRecomendados nickname="VerMas" title="Ver más"></PsRecomendados>
            <PsFooter></PsFooter>
        </div>
    </div>
);

export default PsMain;