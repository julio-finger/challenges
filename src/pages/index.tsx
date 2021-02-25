import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { CompleteChallenges } from '../components/CompleteChallenges'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import Head from 'next/head'





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar></ExperienceBar>

      <section>
        <div>
          <Profile></Profile>
          <CompleteChallenges></CompleteChallenges>
          <Countdown></Countdown>
        </div>
        <div>
          <ChallengeBox></ChallengeBox>
        </div>
      </section>
    </div>  
  )
}
