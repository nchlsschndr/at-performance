import styles from "./bookinginfopopup.module.scss";
import Popup from "reactjs-popup";

import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const arrowStyle = {
    color: "var(--color-dark)",
    animation: "fadeIn 0.2s",
};

import Link from "next/link";

export const BookingInfoPopup = ({ children, position }) => {
    return (
        <Popup offsetY={10} {...{ arrowStyle }} position={position} trigger={children} closeOnDocumentClick={true}>
            {(close) => (
                <div className={`${styles.popup} fade-in`}>
                    <div className={styles.popupContent}>
                        <h3>Einfach anrufen</h3>
                        <Link href="tel:0049123456789">
                            <a>
                                <FaPhoneAlt /> +49 (0) 123 456 789
                            </a>
                        </Link>
                        <h3>oder schreiben</h3>
                        <Link href="mailto:info@beispiel.de">
                            <a>
                                <FaEnvelope /> info@beispiel.de
                            </a>
                        </Link>
                        <Link href="https://wa.me/49123456789">
                            <a className={styles.whatsapp} target="_blank">
                                <IoLogoWhatsapp /> 0123 456 789
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <a className={styles.instagram} target="_blank">
                                <FaInstagram /> beispiel
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </Popup>
    );
};
