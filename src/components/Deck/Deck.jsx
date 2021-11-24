import React, {  } from 'react'
import Record from '../Record/Record'
import Controls from '../Controls/Controls'
import c from './deck.module.scss'

const Deck = () => {

    return (
        <div className={c.deck}>
            <div className={c.turntable}>
                <Record />
            </div>
            <div>
                <Controls />
            </div>
        </div>
    )
}

export default Deck