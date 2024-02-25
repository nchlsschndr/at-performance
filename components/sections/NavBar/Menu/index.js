import styles from "./menu.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import useCheckMobileScreen from "../../../../hooks/useCheckMobileScreen";

import React from "react";
import { BookingInfoPopup } from "../../../BookingInfoPopup";

const Desktop = () => {
    const router = useRouter();
    return (
        <ul className={styles.nav}>
            {router.pathname == "/fahrzeuge" ? (
                <li>
                    <Link href="/">Startseite</Link>
                </li>
            ) : (
                <li>
                    <Link href="/fahrzeuge">Fahrzeuge</Link>
                </li>
            )}
            <li>
                <Link href="#faqs">FAQs</Link>
            </li>
            <li>
                <Link href="#kontakt" passHref>
                    <BookingInfoPopup position="bottom center">
                        <button className={styles.cta}>Jetzt anfragen</button>
                    </BookingInfoPopup>
                </Link>
            </li>
        </ul>
    );
};

const BtnCloseMenu = React.forwardRef(function btn({ onClick, href }, ref) {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            FAQs
        </a>
    );
});

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div>
            <div className={styles.btnMobileMenu} onClick={() => setIsOpen(true)}>
                <div className={`${styles.line} ${styles.lineTop}`}></div>
                <div className={`${styles.line} ${styles.lineMiddle}`}></div>
                <div className={`${styles.line} ${styles.lineBottom}`}></div>
            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuActive : ""}`}>
                <ul>
                    {router.pathname == "/fahrzeuge" ? (
                        <li>
                            <Link href="/">Startseite</Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/fahrzeuge">Fahrzeuge</Link>
                        </li>
                    )}

                    <li>
                        <Link href="#faqs" passHref>
                            <BtnCloseMenu onClick={() => setIsOpen(false)} />
                        </Link>
                    </li>
                    <li>
                        <BookingInfoPopup position="top center">
                            <button className={styles.cta}>Jetzt anfragen</button>
                        </BookingInfoPopup>
                    </li>
                </ul>
                <button className={styles.menuClose} onClick={() => setIsOpen(false)}>
                    <IoMdClose />
                </button>
            </div>
        </div>
    );
};

export const Menu = () => {
    return <div className="div">{useCheckMobileScreen() ? <Mobile /> : <Desktop />}</div>;
};
