import React from 'react';
import ProjectNode from './ProjectNode'

function Projects({ display}) {
    return (
        <div id="projects" style={{
            display: display
        }}>
            <ProjectNode title='Pokemon Item Shop' url='https://github.com/impypots/Pokemart-Menu-Project' source='https://cdn.vox-cdn.com/thumbor/Tez-A0YdUG5hTIThS39kL916E_s=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13758807/Hornet_mid_shot.png' />
            <ProjectNode title='MTG API Card Guessing Game' source='https://wallpapermemory.com/uploads/178/magic-the-gathering-mtg-wallpaper-full-hd-455717.jpg'/>
            <ProjectNode title='Sun Banishment' source='https://static.zerochan.net/Magic%3A.The.Gathering.full.1249276.jpg' />
            <ProjectNode title='Hangman Game' source='https://i.pinimg.com/originals/3b/1d/72/3b1d728547e5f98020ef77b0f9be252b.gif' />
        </div>
    )
}

export default Projects;