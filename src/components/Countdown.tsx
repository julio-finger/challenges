import styles from '../styles/components/Countdown.module.css'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

let timeout: NodeJS.Timeout

export function Countdown(){

    const timeInitial = (0.1 * 60)
    const [time, setTime] = useState(timeInitial)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const contextData = useContext(ChallengesContext);
    const { startNewChallenge, activeChallenge } = useContext(ChallengesContext)
    console.log(activeChallenge)



    function startCountdown() {
        setIsActive(true);

    }

    function endCountdown() {
        clearTimeout(timeout)
        setIsActive(false);

    }


    useEffect(() => {
        if (isActive && time > 0){
            timeout = setTimeout(() => {
                setTime(time - 1)
            }
            , 1000)

        }
        
        else if (isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()


        } 

        else if (hasFinished && !isActive && time == 0){
            setTime(0)
            console.log('fim')
        }
        
        else if (!isActive){
            setTime(timeInitial)
        } 

       
    }, [isActive, time])

    useEffect(() => {
        if (hasFinished && activeChallenge==null){
            setTime(timeInitial)
            setHasFinished(false)
        }
    }, [hasFinished, activeChallenge])



    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button type="button" className={styles.countdownButtonFinished}>
                    Ciclo encerrado
                    
                </button>
            ) : isActive ? (
                <button onClick={endCountdown} type="button" className={styles.countdownButtonActive}>
                     Abandonar ciclo
                      
                </button>
                  
                ) : (
                <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                    Iniciar Ciclo
                    
                </button>
                
                )}

          

           

           

            


        </div>
        
    )
}