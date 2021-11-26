import React, { useContext } from 'react'
import c from './arm.module.scss'
import { MusicPlayer } from '../Main/Main'

const Arm = () => {

    const { currentSong, toggle } = useContext(MusicPlayer)

    return (
        // <div className={c.container}>
            <div 
                className={c.arm}
                onClick={toggle}
            >
                <div 
                    className={c.axis}
                    style={
                        currentSong?.playing ? 
                        {transform: `rotate(${15+(currentSong.time/currentSong.duration)*15}deg)`} 
                        : {}
                    }
                >
                    <div className={c.rod}></div>
                    <div className={c.head}></div>
                </div>
            </div>
            
        // </div>
    )
}

export default Arm