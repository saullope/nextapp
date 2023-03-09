import Image from 'next/image'
import styles from '../page.module.css'

export default function ImageProfile({ src, width, height }) {
  return (
    <>
      <Image 
        className={styles.rounded}
        src={src}
        width={width}
        height={height}
      />
    </>
  );
}