import { TechStack } from '@/components/techStack'
interface ProjectDataProps {
  title: string
  description: string
  imgSrc: string
  href: string
  techStack: TechStack[]
}

const projectsData: ProjectDataProps[] = [
  {
    title: 'College Student API: FastAPI with MongoDB',
    description: `Developed a high-performance API using FastAPI and MongoDB Cloud Database for managing college student information. It includes CRUD operations and secure data handling. The API is deployed with Docker for easy setup and scalability.`,
    imgSrc: '/static/images/FastAPI_MongDB.png',
    href: 'https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB',
    techStack: ['Docker'],
  },
]

export default projectsData
