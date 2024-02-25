import { Container } from "../../../components/Container";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import Link from "next/link";

import styles from "./contactbar.module.scss";

export const ContactBar = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className="split">
                    <div className={styles.info}>
                        <a href="tel:0049123456789">
                            <FaPhoneAlt />
                            <span className="hide-md">&nbsp;+49 (0) 123 456 789</span>
                        </a>
                        <a href="mailto:info@beispiel.de">
                            <FaEnvelope />
                            <span className="hide-md">&nbsp;info@beispiel.de</span>
                        </a>
                    </div>
                    <div className={`${styles.info} ${styles.social}`}>
                        <Link href="https://www.instagram.com/" target="_blank" alt="Instagram">
                            <a target="_blank">
                                <FaInstagram />
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
