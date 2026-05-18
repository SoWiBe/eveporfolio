import styles from './Skills.module.css'
import { useInView } from '../../hooks/useInView'

type Skill = {
  label: string
  accent?: boolean
}

type SkillGroup = {
  icon: string
  title: string
  skills: Skill[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: 'ti-code',
    title: 'Core language',
    skills: [
      { label: 'C#', accent: true },
      { label: '.NET', accent: true },
      { label: 'OOP' },
      { label: 'LINQ' },
    ],
  },
  {
    icon: 'ti-server',
    title: 'Backend',
    skills: [
      { label: 'ASP.NET Core', accent: true },
      { label: 'ASP.NET Web API' },
      { label: 'Entity Framework' },
    ],
  },
  {
    icon: 'ti-database',
    title: 'Data',
    skills: [
      { label: 'PostgreSQL', accent: true },
      { label: 'SQL' },
      { label: 'Redis / KeyDB' },
    ],
  },
  {
    icon: 'ti-topology-star',
    title: 'Messaging',
    skills: [
      { label: 'Kafka', accent: true },
      { label: 'RabbitMQ' },
    ],
  },
  {
    icon: 'ti-tools',
    title: 'DevOps & tools',
    skills: [
      { label: 'Docker', accent: true },
      { label: 'Git' },
      { label: 'Quartz' },
    ],
  },
  {
    icon: 'ti-sparkles',
    title: 'Also know',
    skills: [
      { label: 'React TS' },
      { label: 'ML.NET' },
    ],
  },
]

const Skills = () => {
  const { ref, inView } = useInView<HTMLElement>()
  return (
  <section ref={ref} className={`${styles.section} reveal${inView ? ' visible' : ''}`} id="skills">
    <div className={styles.inner}>
      <p className={styles.label}>What I work with</p>
      <h2 className={styles.title}>Skills <span>&</span> Stack</h2>
      <div className={styles.groups}>
        {SKILL_GROUPS.map(({ icon, title, skills }) => (
          <div key={title} className={styles.group}>
            <div className={styles.groupTitle}>
              <i className={`ti ${icon}`} aria-hidden="true" />
              {title}
            </div>
            <div className={styles.tags}>
              {skills.map(({ label, accent }) => (
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

export default Skills