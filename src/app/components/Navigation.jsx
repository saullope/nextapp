import Link from "next/link"
import styles from '../page.module.css'

export default function Navigation(){

    const links = [
        {
            name: 'Home',
            route: '/'
        },
        {
            name: 'Posts',
            route: './posts'
        },
        {
          name: 'Contact',
          route: './posts'
        },
        {
          name: 'Next',
          route: './posts'
        } 
    ]

    return (
      <>
      <header className={styles.contenedor_header}>
        <nav>
            <ul className={styles.nav_menu}>
               {links.map(({ name, route }) =>(
                    <li key={name}  className={styles.nav_item}>
                      <Link href={route} className={styles.nexta}>
                        {name}
                      </Link>    
                    </li>
               ))}
            </ul>
        </nav>
      </header>
      </>
    )
}