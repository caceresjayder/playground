import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import MainPage from '../src/components/MainPage'
import styles from '../src/styles/Main.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainPage styles={styles}/>
    </>
    
  )
}
