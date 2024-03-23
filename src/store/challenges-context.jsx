import { useState, createContext } from "react";
import React from "react";

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
});
export default ChallengesContextProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);

  function addChallenge(challenge) {
    setChallenges((prevChallenge) => [
      { ...challenge, id: Math.random().toString(), status: "active" },

      ...prevChallenge,
    ]);
  }
  function deleteChallenge(challengeId) {
    setChallenges((prevChallenge) =>
      prevChallenge.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenge) =>
      prevChallenge.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };
  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
};
