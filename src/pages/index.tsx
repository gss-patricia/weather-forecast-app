import type { NextPage } from 'next'

import Weather from '../features/weather/Weather'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Weather Forecast
        </h1>

        <div className={styles.grid}>
          <Weather />
        </div>
      </main>
    </div>
  )
}

export default IndexPage
