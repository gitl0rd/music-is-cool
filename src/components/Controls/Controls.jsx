import React, { useContext } from 'react'
import { MusicPlayer } from '../Main/Main'
import c from './controls.module.scss'

const Deck = () => {

    const { currentSong, toggle } = useContext(MusicPlayer)

    const timify = (time) => {
        return (
            `${Math.floor(time / 60).toString().padStart(2, '0')}:${
                (Math.floor(time) % 60).toString().padStart(2, '0')
            }`
        )
    }

    return (
        <div className={c.controls}>
            <div onClick={currentSong && toggle}>{currentSong?.playing ? 'pause' : 'play'}</div>
            {<div>{timify(currentSong?.time || 0)} / {timify(currentSong?.duration || 0)}</div>}
            {}
        </div>
    )
}

export default Deck