import teste from '../../public/Assets/logo.png'
import styles from './page.module.css'
import Header from '@/components/header/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header logo={teste} sec1='vasco' sec2='aaa' sec3='a'/>
    </main>
  )
}
