import Link from '@/components/Link'
import Image from '@/components/Image'
import imageLoader from '@/lib/loader'

const HorizontalCard = ({ title, href, image }) => {
  return (
    <Link
      alt={`Tới ${title}`}
      key={title}
      href={href}
      className="grid grid-cols-3 items-center justify-center rounded-md bg-gray-100 text-sm drop-shadow transition duration-200 hover:-translate-y-1 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <span className="relative h-full w-20 lg:h-24 lg:w-full">
        <Image
          loader={imageLoader}
          alt={title}
          className="rounded-tl-md rounded-bl-md object-cover"
          src={image}
          layout="fill"
        />
      </span>
      <p className="text-xs col-span-2 p-2 md:text-sm lg:p-4">{title}</p>
    </Link>
  )
}

export default HorizontalCard
