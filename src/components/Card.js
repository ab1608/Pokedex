import React from "react";

const Card = (props) => {
    const {name, id, description, sprite} = props;
    return (
        <div className={'bg-light-green hover-bg-light-blue dib rb3 br3 pa3 ma2 grow bw2 shadow-4 pokeCard'}>
            <img alt={'pokemon'} src={`${sprite}`}/>
            <div>
                <h2>{`#${id} ${name.toUpperCase()}`}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;