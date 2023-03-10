import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

const Share = ({ fileName, href }) => {
  const githubUrl = () =>
    `${siteMetadata.siteRepo}/blob/master/data/${href.split('/')[1]}/${fileName}`

  return (
    <div className="text-md pt-6 pb-6 text-gray-700 dark:text-gray-300">
      <div className="flex space-x-2 md:space-x-4">
        <Link
          alt="Chia sẻ lên Facebook"
          aria-label="Chia sẻ lên Facebook"
          type="button"
          href={`https://www.facebook.com/dialog/feed?app_id=${siteMetadata.comment.facebookConfig.appId}&display=popup&link=${siteMetadata.siteUrl}${href}`}
          className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4"
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-6 fill-current text-blue-400 hover:text-blue-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
          </svg>
          Share
        </Link>
        <Link
          alt="Xem trên Github"
          aria-label="Xem trên Github"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-gray-400 transition-all hover:bg-gray-300 hover:text-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4"
          href={githubUrl()}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
            className="h-4 w-6 fill-current text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300 md:w-6"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
          Github
        </Link>
      </div>
    </div>
  )
}

export default Share
