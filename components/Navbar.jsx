import Link from 'next/link'
import React from 'react'
const styles = require('./Navbar.module.css')

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <p className={styles.brand}>Next.js</p>

                <ul className={styles.menu}>
                    <Link href="/"><li className={styles.item}>Home</li></Link>
                    <Link href="/about"><li className={styles.item}>About</li></Link>
                    <Link href="/contact"><li className={styles.item}>Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar