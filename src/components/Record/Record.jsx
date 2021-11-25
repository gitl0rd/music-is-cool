import React, { useContext } from 'react'
import { MusicPlayer } from '../Main/Main'
import c from './record.module.scss'

const Record = () => {

    const { currentSong, toggle } = useContext(MusicPlayer)

    return (
        <div className={c.base} 
            // style={
            //     currentSong?.playing ?
            //     {animation: `${c.spin} 10s linear infinite`} 
            //     : {}
            // }
            style={
                currentSong ?
                {transform: `rotate(${(currentSong.time/60)*360}deg)`}
                : {}
            }
        >
            <div 
                className={c.record}
                style={
                    !currentSong ?
                    {zIndex: '-1'}
                    : {}
                }
                onClick={toggle}
            >
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