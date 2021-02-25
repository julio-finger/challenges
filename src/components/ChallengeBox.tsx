import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const hasActiveChallenge = true;

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    

    return(
        <div className={styles.challengeBoxContainer}>
            { !activeChallenge ? (
                <div className={styles.challengeNotActive}>
                 <strong>
                     Finalize um ciclo para receber um desafio
                 </strong>
                 <p>
                     <img src="icons/level-up.svg" alt="icon-levelup"/>
                     Avance de Level completando desafios.
                 </p>
                </div>
            ) : (
            
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                    <strong>Novo desafio</strong>
                    <p>
                        {activeChallenge.description}
                    </p>
                </main>

                <footer>
                    <button onClick={resetChallenge} type="button" className={styles.challengeFailedButton}>Falhei</button>
                    <button onClick={completeChallenge} type="button" className={styles.challengeSucceededButton}>Completei</button>

                </footer>
           
            </div>
            
            )}
           
        </div>
    )
}