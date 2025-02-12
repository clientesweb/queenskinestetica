import type { ImageLoader } from 'next/image'

const imageLoader: ImageLoader = ({ src, width, quality = 75 }) => {
  return `${src}${src.includes('?') ? '&' : '?'}w=${width}&q=${quality}`
}

export default imageLoader

