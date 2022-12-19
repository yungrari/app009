import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>yungrari</title>
        <meta name="description" content="Generated by Daniil Martynov ©" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Daniil Martynov, a.k.a <code className={styles.code}>yungrari</code>
            . Digital artist and musician based in 🇺🇦
          </p>
        </div>

        <div className={styles.center}>
          <a
            href="https://soundcloud.com/yungr4r1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.linkLogo}>
              <Image
                src="/soundcloud.svg"
                alt="SoundCloud"
                width={48}
                height={48}
                priority
              />
            </div>
          </a>

          <a
            href="https://github.com/yungrari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.linkLogo}>
              <Image
                src="/github.svg"
                alt="GitHub"
                width={48}
                height={48}
                priority
              />
            </div>
          </a>

          <a
            href="https://twitter.com/fucceveryb0dy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.linkLogo}>
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={48}
                height={48}
                priority
              />
            </div>
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={inter.className}>
              <a
                href="https://yungrari.github.io/bccn-preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 005 <span>-&gt;</span>
              </a>
            </h3>
            <p className={inter.className}>
              Digital Culture and Ethics of AI 3D Web application to visually
              communicate convergence of visual art, information technologies
              such as AI, brain-computer interfaces (BCI) and cybersecurity as a
              core ideas of the Digital Culture and Ethics of AI project. The
              multidisciplinary synthesis project was presented and initiated in
              Berlin during Research Winter School &quot;Ethics of Neuroscience
              and AI&quot; 2021 at Charité – Berlin University of Medicine,
              Bernstein Center for Computational Neuroscience Berlin (BCCN).
              Project is currently represented on{' '}
              <a
                href="https://ebrains.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ebrains.eu
              </a>{' '}
              Community Science Market EBRAINS is a new digital research
              infrastructure, created by the EU-funded Human Brain Project
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={inter.className}>
              <a
                href="https://yungrari.github.io/vanilla-covid-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 004 <span>-&gt;</span>
              </a>
            </h3>
            <p className={inter.className}>
              Graduation project from the{' '}
              <a
                href="https://prjctr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projector — Creative & Tech Online Institute
              </a>
              . Code. Design.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={inter.className}>
              <a
                href="https://confermadesign.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 003 <span>-&gt;</span>
              </a>
            </h3>
            <p className={inter.className}>
              Created in collaboration with{' '}
              <a
                href="https://galagan.ua/en/project/conferma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galagan branding agency
              </a>
              . Brand new identity from scratch for an Italian furniture
              company. Logotype. Design.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={inter.className}>
              <a
                href="https://galagan.ua/en/project/kyivgaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project 002 <span>-&gt;</span>
              </a>
            </h3>
            <p className={inter.className}>
              Created in collaboration with{' '}
              <a
                href="https://galagan.ua/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galagan branding agency
              </a>
              . Rebranding of Kyivgaz. Logotype. Brand identity.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={inter.className}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Project 001 <span>-&gt;</span>
              </a>
            </h3>
            <p className={inter.className}>
              Graduation project from the{' '}
              <a
                href="https://svc.com.ua"
                target="_blank"
                rel="noopener noreferrer"
              >
                School of Visual Communication
              </a>
              . Poster. Print. 420 x 594 mm.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
