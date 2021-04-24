import '../styles/global.css'

import { ChallengesProvider, ChallengesContext } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

  return (

    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>

  )
}

export default MyApp
