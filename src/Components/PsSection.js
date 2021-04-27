import React from 'react';
import PsSlider from './PsSlider';

const PsSection = ({title, nickname}) => (
    <div className="container slider">
        <h1 className="title">{title}</h1>
        <PsSlider nickname={nickname}></PsSlider>
    </div>
);

export default PsSection;