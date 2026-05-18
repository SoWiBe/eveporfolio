import styles from './Hero.module.css'
import me from '../../assets/icons/alex.jpg'
import { useInView } from '../../hooks/useInView'

const Hero = () => {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className={`${styles.hero} reveal${inView ? ' visible' : ''}`}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <span className={styles.greeting}>Hi, I am</span>
                <h1 className={styles.name}>Aleksey<br/> Gryzlov</h1>
                <p className={styles.role}>.Net Backend Developer</p>
                <p className={styles.description}>
                    Building scalable microservices and enterprise systems.
                    Currently at <span className={styles.accent}>Gazprom Neft</span> —
                    20k+ employee audience, 30+ services.
                </p>
                
                <div className={styles.socials}>
                    <a href="https://github.com/"      target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                    <a href="https://t.me/Evewibe"     target="_blank" rel="noopener noreferrer" aria-label="Telegram">TG</a>
                    <a href="https://hh.ru/"           target="_blank" rel="noopener noreferrer" aria-label="HH.ru">HH</a>
                </div>
            </div>

             <div className={styles.photoWrap}>
                 <img src={me} alt="Aleksey Evewibe" className={styles.photo} />
            </div>
        </div>
    </section>
  )
}

export default Hero;