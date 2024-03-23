import React ,{useContext}from 'react'
import Header from '../components/Header'
import ChallengesContextProvider from '../store/challenges-context.jsx';
import Challenges from '../components/Challenges.jsx';
export default function ChallengePage ({})  {
  const challengeValues=useContext(ChallengesContext)

  return (
    <ChallengesContextProvider>
      <Header/>
      <main>
        <Challenges/>
      </main>
    </ChallengesContextProvider>
  )
}
