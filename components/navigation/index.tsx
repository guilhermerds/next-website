import { ReactNode } from "react";
import { useRouter } from "next/router";
import styles from "./navigation.module.css";
import Link from "next/link";

const Links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Time",
    path: "/time"
  }
];

type NavAnchor = { 
  path: string,
  children: ReactNode
};

function NavAnchor({path, children}: NavAnchor) {
  return(
    <Link href={path}>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  );
}

export default function Navigation(){
  const { pathname } = useRouter();
  return(
    <nav>
      <ul className={styles.list}>
        {Links.map(({name, path}) => (
          <li key={ path }>{ 
            path === pathname ? 
            <span>{name}</span> : 
            <NavAnchor path={path} children={name}/> 
          }</li>
        ))}
        
      </ul>
    </nav>
  );
}