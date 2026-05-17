import styles from './Footer.module.css'

const SOCIAL_LINKS = [
    { href: 'https://github.com/SoWiBe', label: 'GitHub'},
    { href: '', label: 'Telegram'},
    { href: '', label: 'HH.ru'}
] as const

const NAV_LINKS = [
    { href: '#about', label: 'About'},
    { href: '#project', label: 'Projects'},
    { href: '#skills', label: 'Skills'},
    { href: '#contact', label: 'Contact'}
] as const;

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>

                <div className={styles.brand}>
                    <a href="#" className={styles.logo}>
                        evewibe<span>.</span>dev
                    </a>
                    <p className={styles.tagline}>
                        .Net Backend developer · ASP.NET Core · PostgreSQL
                    </p>
                </div>

                <nav className={styles.nav} aria-label="Footer navigation">
                    <ul>
                        {NAV_LINKS.map(({ href, label}) => (
                            <li key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.social}>
                    {SOCIAL_LINKS.map(({ href, label}) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© {CURRENT_YEAR} Evewibe. All rights reserved.</span>
                <span className={styles.madeWith}>Made with React + Typescript</span>
            </div>
        </footer>
    )
}

export default Footer