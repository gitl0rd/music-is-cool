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
        setCurrentSong(s)
    }
    
    return (
        <MusicPlayer.Provider value={{ audio: audio.current, currentSong, setCurrentSong, selectSong }}>
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
                        data['time'] = 
                            `${Math.floor(audio.current.currentTime / 60)}:${
                                Math.floor(audio.current.currentTime) % 60
                            }`
                        
                        setCurrentSong(data)
                      }
                    }
              
                />
                <div className={c.top}>
                    <Deck />
                </div>
                <div className={c.bot}>
                    <Collection />
                </div>
            </div>
        </MusicPlayer.Provider>
        
    )
}

export default Main