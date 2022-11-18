import { CSSProperties } from 'styled-components'
import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  style?: CSSProperties | undefined
}

const Image = ({ src, alt, style }: ImageProps) => {
  return (
    <NextImage src={src} alt={alt} width={500} height={500} style={style} />
  )
}

export default Image
