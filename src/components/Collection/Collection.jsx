import React, { useContext } from 'react'
import c from './collection.module.scss'
import { MusicPlayer } from '../Main/Main'
import { things } from '../../music/music.js'

const Collection = () => {

    const { selectSong, order } = useContext(MusicPlayer)

    const renderRecord = (r, i) => {
        return (
            <div 
                className={c.record}
                // style={{top: `${i * 10}vw`, zIndex: `${100-i}`}}
                style={{
                    height: `${100/things.length}%`, 
                    zIndex: `${100+i}`
                }}
                // onClick={() => selectSong(r)}
                // onClick=""
                // onMouseUp={() => selectSong(r)}
                key={i}
            >
                <div 
                    className={c.selector}
                    onClick={() => selectSong(r, i)}
                    style={{backgroundImage: `url(${r.img})`}}
                >
                    {/* <img 
                        src={r.img} 
                        alt={`${r.title} - ${r.artist}`}
                    /> */}
                    {/* a */}
                </div>
            </div>
        )
    }

    return (
        <div className={c.wrapper}>
            <div className={c.collection}>
                {/* {things.map((t,i) => {
                    return (
                        renderRecord(t, i)
                    )
                })} */}
                {order.map((o,i) => {
                    return (
                        renderRecord(things[o], o)
                    )
                })}
            </div>
        </div>
        
    )
}

export default Collection