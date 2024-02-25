import { Container } from "../../../components/Container";
import styles from "./sellingpoints.module.scss";
import Image from "next/image";

export const SellingPoints = () => {
    return (
        <div className={styles.wrapper}>
            <Container wide>
                <ul className={styles.list}>
                    <li>
                        <Image src="/key.svg" alt="" width={120} height={100} />
                        <h3>
                            Rundum
                            <br /> Versichert
                        </h3>
                        <p className="hide-md">Alle unsere Fahrzeuge sind als Selbstfahrer für Mietfahrzeuge vollkaskoversichert.</p>
                    </li>
                    <li>
                        <Image src="/brakes.svg" alt="" width={120} height={100} />
                        <h3>
                            Top gewartete
                            <br /> Fahrzeuge
                        </h3>
                        <p className="hide-md">Alle unsere Fahrzeuge werden regelmäßigen Checks unterzogen und jährlich TÜV geprüft.</p>
                    </li>
                    <li>
                        <Image src="/turbo.svg" alt="" width={120} height={100} />
                        <h3>
                            Die beste
                            <br /> Performance
                        </h3>
                        <p className="hide-md">Wir wählen unsere Fahrzeuge nach den besten Kriterien und bieten nur das Beste an.</p>
                    </li>
                    <li>
                        <Image src="/gears.svg" alt="" width={120} height={100} />
                        <h3>
                            Flexibler
                            <br /> Ablauf
                        </h3>
                        <p className="hide-md">Nicht vollgetankt? Du fährst unerwartet doch weiter als geplant? Wir finden eine Lösung!</p>
                    </li>
                </ul>
            </Container>
        </div>
    );
};
