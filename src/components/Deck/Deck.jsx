import React, {  } from 'react'
import Record from '../Record/Record'
import Controls from '../Controls/Controls'
import c from './deck.module.scss'
import Arm from '../Arm/Arm'

const Deck = () => {

    return (
        <div className={c.deck}>
            <div className={c.turntable}>
                <Record />
                <Arm />
            </div>
            <div>
                <Controls />
            </div>
        </div>
    )
}

export default Deck