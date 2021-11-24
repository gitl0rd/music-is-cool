import React, { useContext } from 'react'
import { MusicPlayer } from '../Main/Main'
import c from './record.module.scss'

const Record = () => {

    const { currentSong } = useContext(MusicPlayer)

    return (
        <div className={c.record} 
            // style={
            //     currentSong?.playing ?
            //     {animation: `${c.spin} 10s linear infinite`} 
            //     : {}
            // }
            style={
                currentSong ?
                {transform: `rotate(${(currentSong.time/currentSong.duration)*360}deg)`}
                : {}
            }
        >
            <div className={c.groove}>
                <div className={c.groove}>
                    <div className={c.groove}>
                        <div className={c.groove}>
                            <div className={c.groove}>
                                <div className={c.center}>
                                    {currentSong && (
                                        <img src={currentSong.img} alt='aaaaaa'/>
                                    )}
                                    <div className={c.hole}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Record