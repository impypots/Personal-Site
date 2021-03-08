import React from 'react';
import ProjectNode from './ProjectNode'
let MTGgif =`${process.env.PUBLIC_URL}assets/MTG-API-Card-Game-gif.gif`;
let pokeGif = `${process.env.PUBLIC_URL}assets/pokemon-shop-gif.gif`;
let sunGif = `${process.env.PUBLIC_URL}assets/sun-banishment-gif.gif`;
let hangmanGif = `${process.env.PUBLIC_URL}assets/reverse-hangman-gif.gif`;

function Projects({ display}) {
    return (
        <div id="projects" style={{
            display: display,
            opacity: display === 'flex' ? '1' : '0',
            transition: 'opacity 1s ease-in, display 1s ease-in'
        }}>
            <ProjectNode title='Pokemon Item Shop' url='https://github.com/impypots/Pokemart-Menu-Project' source={pokeGif} />
            <ProjectNode title='MTG API Card Guessing Game' url='https://github.com/impypots/MTG-Card-Guessing-Game' source={MTGgif}/>
            <ProjectNode title='Sun Banishment' url='https://github.com/impypots/Sun-Banishment-Page' source={sunGif} />
            <ProjectNode title='Hangman Game' url='https://github.com/impypots/Hangman-Game' source={hangmanGif} />
        </div>
    )
}

export default Projects;