import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../styles/components/Profile.module.css'

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/julio-finger.png"></img>
            <div>
                <h1>Julio Finger</h1>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    {level}
                </p>
            </div>
        </div>
    )
}