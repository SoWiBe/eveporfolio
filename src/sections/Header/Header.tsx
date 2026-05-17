import { useEffect, useState } from 'react';
import styles from './Header.module.css'


const NAV_LINKS = [
    { href: '#about', label: 'About'},
    { href: '#project', label: 'Projects'},
    { href: '#skills', label: 'Skills'},
    { href: '#contact', label: 'Contact'}
] as const;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    evewibe<span>.</span>dev
                </a>

                <nav className={styles.nav} aria-label='Main Navigation'>
                    <ul>
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className={styles.cta}>Hire me</a>
                        </li>
                    </ul>
                </nav>

                <button
                    className={styles.burger}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    {NAV_LINKS.map(({href, label}) => (
                        <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
                            {label}
                        </a>
                    ))}
                    <a href="#contact" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>
                        Hire me
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header;