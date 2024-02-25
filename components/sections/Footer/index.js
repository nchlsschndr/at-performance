import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

import { Container } from "../../../components/Container";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={`${styles.container} ${"split split-responsive"}`}>
                    <div className={styles.footerBoxLeft}>
                        <Link href="/">
                            <Image src="/logo-at.svg" alt="AT Performance Logo" width={300} height={100} />
                        </Link>
                        <p>Musterstr. 1</p>
                        <p>12345 Musterstadt</p>
                        <br />
                        <p>
                            <a href="mailto:info@beispiel.de">info@beispiel.de</a>
                        </p>
                        <p>
                            <a href="tel:0049123456789">+49 (0) 123 456 789</a>
                        </p>
                    </div>
                    <div className={styles.footerBoxRight}>
                        <div className={styles.social}>
                            <Link href="https://www.instagram.com/">
                                <a target="_blank" alt="Instagram">
                                    <FaInstagram />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/impressum">Impressum</Link>
                            <Link href="/datenschutz">Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
