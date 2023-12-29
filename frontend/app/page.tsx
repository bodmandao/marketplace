import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "../components/Navbar"
import Brand from "../components/Brand"
import PopularService from "../components/PopularService"

export default function Home() {
  return (
      <main>
          <Navbar />
          <Brand />
          <PopularService />

      </main>
  )
}
