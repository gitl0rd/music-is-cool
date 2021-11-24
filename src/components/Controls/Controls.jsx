import React, { useContext } from 'react'
import { MusicPlayer } from '../Main/Main'
import c from './controls.module.scss'

const Deck = () => {

    const { audio, currentSong, setCurrentSong } = useContext(MusicPlayer)

    const toggle = () => {
        currentSong?.playing ? audio?.pause() : audio?.play()
        setCurrentSong((f) => {
            let data = {...f}
            data.playing = !f.playing
            return data
        })
    }

    return (
        <div className={c.controls}>
            <div onClick={currentSong && toggle}>{currentSong?.playing ? 'pause' : 'play'}</div>
            <div>{currentSong?.time || 0} / {currentSong?.duration || 0}</div>
        </div>
    )
}

export default Deck