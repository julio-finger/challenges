import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../styles/components/CompleteChallenges.module.css'

export function CompleteChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={style.desafioChallenges}>
            <h2>Desafios Completos</h2>
            <p>{challengesCompleted}</p>
        </div>

    )
}