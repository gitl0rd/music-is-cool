import React, { useState, useRef } from 'react'
import { things } from '../../music/music'
import Collection from '../Collection/Collection'
import Deck from '../Deck/Deck'
import c from './main.module.scss'

export const MusicPlayer = React.createContext()

const Main = () => {

    const audio = useRef()
    const [currentSong, setCurrentSong] = useState(null)
    const [order, setOrder] = useState(things.map((_, i) => i))
    const [autoplay] = useState(true)

    const selectSong = (s, i) => {
        console.log('selectSong')
        if (!autoplay) audio?.current.pause()
        audio.current.src = s.url
        audio.current.volume = 0.5
        s['index'] = i
        setCurrentSong(s)
    }

    const toggle = () => {
        console.log('toggle')
        currentSong?.playing ? audio.current?.pause() : setTimeout(() => {
            audio.current?.play()
        }, 500);
        setCurrentSong((f) => {
            let data = {...f}
            data.playing = !f.playing
            return data
        })
    }

    const shuffle = () => {
        let shuffled = order
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        setOrder(shuffled)
    }
    
    return (
        <MusicPlayer.Provider value={{ 
            audio: audio.current, 
            currentSong, 
            setCurrentSong, 
            selectSong, 
            toggle,
            order
        }}>
            <div className={c.main}>
                <audio
                    ref={audio}
                    onLoadedData={() => {
                        console.log('loaded')
                        let data = { ...currentSong }
                        data['duration'] = audio.current.duration
                        data['playing'] = autoplay
                        if (autoplay) {
                            setTimeout(() => {
                                audio.current?.play()
                            }, 500)
                        }
                        setCurrentSong(data)
                    }}
                    onTimeUpdate={() => {
                        let data = { ...currentSong }
                        data['time'] = audio.current.currentTime
                        setCurrentSong(data)
                      }
                    }
                    onEnded={() => {
                        console.log('ended')
                        if (autoplay) {
                            const i = order.indexOf(currentSong.index)
                            const next = order[i === order.length-1 ? 0 : i+1]
                            selectSong(things[next], next)
                            // toggle()
                        }
                    }}
                />
                <div className={c.left}>
                    <Deck />
                    <div className={c.selected}>
                        {currentSong &&
                            `Now Playing: ${currentSong.title} \u2013 ${currentSong.artist}`
                        }
                    </div>
                </div>                    
                <div className={c.right}>
                    <Collection />
                    <div className={c.playMode}>
                        <button onClick={shuffle}>
                            shuffle
                        </button>
                    </div>
                </div>
                
            </div>
        </MusicPlayer.Provider>
        
    )
}

export default Main