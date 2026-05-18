import styles from './Projects.module.css'
import { useInView } from '../../hooks/useInView'

type ProjectTag = {
  label: string
  accent?: boolean
}

type Project = {
  title: string
  description: string
  tags: ProjectTag[]
}

const PROJECTS: Project[] = [
  {
    title: 'Career Craft',
    description:
      'Job-finding platform built for junior developers with no experience — matches candidates to real opportunities based on skills and potential.',
    tags: [
      { label: 'Backend', accent: true },
      { label: 'ASP.NET Core' },
      { label: 'PostgreSQL' },
    ],
  },
  {
    title: 'Smart Anemia Scan',
    description:
      'Mobile + backend system that scans the eye to determine anemia confidence level using image analysis.',
    tags: [
      { label: 'Backend', accent: true },
      { label: 'React Native', accent: true },
      { label: 'ML' },
    ],
  },
  {
    title: 'AdSe',
    description:
      'AI-powered search engine for discovering and evaluating advertisement placement areas.',
    tags: [
      { label: 'AI', accent: true },
      { label: 'Backend' },
      { label: 'Search' },
    ],
  },
  {
    title: 'CinemaDedaNyashik',
    description:
      'Telegram bot for managing your personal film and cinema watchlist — as simple as it can be.',
    tags: [
      { label: 'Telegram Bot', accent: true },
      { label: 'Backend' },
    ],
  },
]

const Projects = () => {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className={`${styles.section} reveal${inView ? ' visible' : ''}`} id="projects">
      <div className={styles.inner}>
        <p className={styles.label}>What I've built</p>
        <h2 className={styles.title}>Projects <span>&</span> Work</h2>
        <div className={styles.grid}>
          {PROJECTS.map(({ title, description, tags }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.tags}>
                {tags.map(({ label, accent }) => (
                  <span
                    key={label}
                    className={`${styles.tag} ${accent ? styles.tagAccent : ''}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
