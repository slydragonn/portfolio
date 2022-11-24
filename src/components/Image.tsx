import { CSSProperties } from 'styled-components'
import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  style?: CSSProperties | undefined
  className?: string
}

const Image = ({ src, alt, style, className }: ImageProps) => {
  return (
    <NextImage src={src} alt={alt} width={500} height={500} style={style} className={className}/>
  )
}

export default Image
