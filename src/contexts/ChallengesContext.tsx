import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderPros {
    children: ReactNode;
}

export function ChallegesProvider({ children }: ChallengesProviderPros) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);


    function levelUp() {
        setLevel(level + 1);
    }
    return (
        <ChallengesContext.Provider value={{ level, currentExperience, challengesCompleted, levelUp }}>

        </ChallengesContext.Provider>
    );
}