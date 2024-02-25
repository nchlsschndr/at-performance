import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import styles from "./intro.module.scss";
import { BookingInfoPopup } from "../../BookingInfoPopup";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";

export const Intro = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className="split split-responsive">
                    <div className={styles.introBox}>
                        <h1>Sportwagen mieten</h1>
                        <h2>in Saarbrücken</h2>
                        <p>
                            Bei AT Performance findest Du eine Auswahl an exklusiven und hochmotorisierten Sportwagen. Egal ob ein Tag, Wochenende oder ein längerer Mietzeitraum. Wir finden das
                            passende Angebot für Dich.
                        </p>
                        <br />
                        <p>
                            Infos zu Kaution und sonstigen Fahrzeugeigenschaften findest du bei den Fahrzeugen selbst. Alle weiteren Fragen hoffen wir im{" "}
                            <Link href="#faqs">
                                <span className={styles.link}>FAQ-Bereich</span>
                            </Link>{" "}
                            beantworten zu können. Sollte noch etwas offen sein, freuen wir uns über deine{" "}
                            <BookingInfoPopup position={useCheckMobileScreen() ? "top center" : "right center"}>
                                <span className={styles.link}>Nachricht oder Anruf.</span>
                            </BookingInfoPopup>
                        </p>
                    </div>
                    <div className={styles.introImg}>
                        <Image src="/amg-gt.png" alt="AMG GT" width={1000} height={475} />
                    </div>
                </div>
            </Container>
        </div>
    );
};
