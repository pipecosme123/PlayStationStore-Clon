import React from 'react';
import { Recomendados, VerMas } from './Games';
import './../CSS/PsRecomendados.css';

const getNickname = nickname => {
    console.log(nickname);
    if (nickname == "Recomendados") {
        return (Recomendados);
    } else if (nickname == "VerMas") {
        return (VerMas);
    }
};

const PsRecomendados = ({ nickname, title }) => {
    const data = getNickname(nickname);
    return (
        <div >
            <h1 className="title title_rec">{title}</h1>
            <div className="recomendados">

                {data.map(games => (
                    <div key={games.nickname}>
                        <img class="picture" src={games.img} href="#" width="450" height="450" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PsRecomendados;