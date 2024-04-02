import { ReactNode } from 'react'
import styles from './Logo.module.css'

const Logo = ():ReactNode => {
  return(
    <div className={styles.logo}>
      <img src='/logo.svg' alt='logo' />
    </div>
  )
}

export default Logo