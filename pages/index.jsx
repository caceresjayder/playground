import { Inter } from '@next/font/google'
import MainPage from '../src/components/MainPage'
import { Stack } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack>
      <MainPage/>
    </Stack>
    
  )
}
