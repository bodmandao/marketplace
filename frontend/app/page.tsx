import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "../components/Navbar"
import Brand from "../components/Brand"

export default function Home() {
  return (
      <main>
          <Navbar />
          <Brand />
      </main>
  )
}
