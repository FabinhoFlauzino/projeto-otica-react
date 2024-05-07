import Image from 'next/image'
import styles from './Topo.module.css'
import Link from 'next/link'

export default function Topo () {
  return (
    <header className={styles.container_topo}>
      <div className={`container ${styles.topo_content}`}>
        <Image src={''} alt='Logo' title='Logo'/>
        <nav className={styles.links}>
          <Link href='#'>Produtos</Link>
          <Link href='#'>Sobre</Link>
          <Link href='#'>Contato</Link>
        </nav>
      </div>
    </header>
  )
}
