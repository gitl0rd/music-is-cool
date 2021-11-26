import React, { useState, useRef } from 'react'
import Collection from '../Collection/Collection'
import Deck from '../Deck/Deck'
import c from './main.module.scss'

export const MusicPlayer = React.createContext()

const Main = () => {

    const [currentSong, setCurrentSong] = useState(null)
    const audio = useRef()

    const selectSong = (s) => {
        audio?.current.pause()
        console.log(s.url)
        //const player = new Audio(s.url)
        audio.current.src = s.url
        audio.current.volume = 0.5
        setCurrentSong(s)
    }

    const toggle = () => {
        currentSong?.playing ? audio.current?.pause() : setTimeout(() => {
            audio.current?.play()
        }, 500);
        setCurrentSong((f) => {
            let data = {...f}
            data.playing = !f.playing
            return data
        })
    }
    
    return (
        <MusicPlayer.Provider value={{ audio: audio.current, currentSong, setCurrentSong, selectSong, toggle }}>
            <div className={c.main}>
                <audio
                    ref={audio}
                    onLoadedData={() => {
                        let data = { ...currentSong }
                        data['duration'] = audio.current.duration
                        data['playing'] = false
                        setCurrentSong(data)
                    }}
                    onTimeUpdate={() => {
                        let data = { ...currentSong }
                        data['time'] = audio.current.currentTime
                        setCurrentSong(data)
                      }
                    }
                />
                <div className={c.top}>
                    <Deck />
                </div>
                <div>
                    <div className={c.selected}>
                        {currentSong &&
                            `Now Playing: ${currentSong.title} \u2013 ${currentSong.artist}`
                        }
                    </div>
                    <div className={c.bot}>
                        <Collection />
                    </div>
                </div>
                
            </div>
        </MusicPlayer.Provider>
        
    )
}

export default Main