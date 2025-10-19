import Link from 'next/link'
import React from 'react'
const styles = require('./Navbar.module.css')

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className="flex justify-between items-center mx-auto p-4 max-w-6xl underline-none">
                <p className={styles.brand}>Next.js</p>

                <ul className= "flex space-x-6 list-none">
                    <Link href="/"><li className={styles.item}>Home</li></Link>
                    <Link href="/about"><li className={styles.item}>About</li></Link>
                    <Link href="/contact"><li className={styles.item}>Contact</li></Link>
                </ul>
             
            </nav>
               <hr />
        </header>
    )
}

export default Navbar