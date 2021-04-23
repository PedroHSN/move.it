import '../styles/global.css'

import { ChallegesProvider, ChallengesContext } from '../contexts/ChallengesContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {


  return (

    <ChallegesProvider>
      <Component {...pageProps} />
    </ChallegesProvider>

  )
}

export default MyApp
