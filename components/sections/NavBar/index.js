import { Container } from "../../../components/Container";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export const NavBar = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <nav className="split">
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/logo-at.svg" alt="AT Performance Logo" width={300} height={100} />
                        </Link>
                    </div>
                    <Menu />
                </nav>
            </Container>
        </div>
    );
};
