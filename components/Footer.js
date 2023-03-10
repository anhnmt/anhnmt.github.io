import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { footerNavLinks } from '@/data/Links'
import imageLoader from '@/lib/loader'

export default function Footer() {
  const made_in_vn_svg = '/static/images/madeinvn.svg'

  return (
    <footer className="bg-white pb-20 dark:bg-gray-900 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link alt="Trang chủ" href="/" className="mb-4 flex items-center sm:mb-0">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={'/static/images/logo.png'}
            width="200px"
            height="40px"
            alt="avatar"
            className="h-10 w-10 rounded grayscale hover:grayscale-0"
          />
        </Link>
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
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          <Link alt="Trang chủ" href="/" className="">
            <Image
              unoptimized={true}
              loader={imageLoader}
              alt="made in Vietnam"
              width="129px"
              height="20px"
              src={made_in_vn_svg}
            />
          </Link>{' '}
        </span>
        <div className="mt-4 mb-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={siteMetadata.facebook}
          >
            <span className="sr-only">facebook</span>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current text-[#4267B2] hover:opacity-90 dark:text-blue-100 hover:dark:opacity-90"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={siteMetadata.github}
          >
            <span className="sr-only">github</span>
            <svg
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current text-gray-800 hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-400"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={siteMetadata.twitter}
          >
            <span className="sr-only">twitter</span>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="hover:dark-opacity-90 h-5 w-5 fill-current text-[#1da1f2] hover:opacity-90 dark:text-blue-100"
            >
              <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
