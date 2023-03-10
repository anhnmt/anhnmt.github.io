import NextImage from 'next/image'
import imageLoader from '@/lib/loader'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <p align="center">
    <NextImage {...rest} loader={imageLoader} />
  </p>
)

export default Image
