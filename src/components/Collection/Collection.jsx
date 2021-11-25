import React, { useContext } from 'react'
import c from './collection.module.scss'
import { MusicPlayer } from '../Main/Main'
import { things } from '../../music/music.js'

const Collection = () => {

    const { selectSong } = useContext(MusicPlayer)

    const renderRecord = (r, i) => {
        return (
            <div 
                className={c.record} 
                style={{left: `${i * 10}vw`, zIndex: `${100-i}`}}
                // onClick={() => selectSong(r)}
                onClick=""
                onMouseUp={() => selectSong(r)}
                key={i}
            >
                <img 
                    src={r.img} 
                    alt={`${r.title} - ${r.artist}`}
                />
            </div>
        )
    }

    return (
        <div className={c.collection}>
            {things.map((t,i) => {
                return (
                    renderRecord(t, i)
                )
            })}
        </div>
    )
}

export default Collection