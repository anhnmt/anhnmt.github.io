import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { footerNavLinks } from '@/data/Links'
import imageLoader from '@/lib/loader'

export default function Footer() {
  return (
    <footer className="bg-white pb-20 dark:bg-gray-900 md:px-6 md:py-8">
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>© 2023</div>
          <Link alt="Trang chủ" href="/">
            AnhNMT
          </Link>
          <div> • </div>
          <img
            alt="made in Vietnam"
            width="129px"
            height="20px"
            src="/static/images/madeinvn.svg"
          />
        </div>
        <div className="flex space-x-6 sm:mt-0 sm:justify-center">
          <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
            {footerNavLinks.map(({ title, href }) => (
              <li key={title}>
                <Link alt={title} href={href} className="mr-4 hover:underline md:mr-6 ">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
