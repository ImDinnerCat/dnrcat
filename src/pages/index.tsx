import type { NextPage } from 'next'
import Head from 'next/head'
import { ProjectList } from '../components/ProjectList/ProjectList'
import { Usercard } from '../components/Usercard/Usercard'
import s from '../styles/Home.module.scss'

import user from '../../public/user.json'
import projects from '../../public/projects.json'

const Home: NextPage = () => {

  return (
    <main>
      <Head>
        <title>{user.wwwtitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 mb-5">
            <Usercard items={user} />
          </div>

          <div className="col-12 col-md-7 mt-5">
            <h1 className={"mb-4 " + s.categoryTitle}>Projekte</h1>
            <ProjectList items={projects} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
