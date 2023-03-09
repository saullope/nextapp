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
        } 
    ]

    return (
      <>
      <header>
        <nav className={styles.li-styles}>
            <ul className={styles.lista}>
               {links.map(({ name, route }) =>(
                    <li key={name} className={styles.item_link}>
                      <Link href={route}>
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