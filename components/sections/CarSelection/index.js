import Link from "next/link";

import { Container } from "../../../components/Container";
import { Headline } from "../../../components/Headline";
import { CarCard } from "../../CardCard";

import styles from "./carselection.module.scss";

export const CarSelection = ({ cars, pageLink }) => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={`${styles.splitDown} split split-responsive`}>
                    <Headline title="Unsere Fahrzeuge" />
                    {pageLink && <Link href="/fahrzeuge">Alle anzeigen</Link>}
                </div>
                {cars && (
                    <div className={styles.cardContainer}>
                        {cars.map((car, index) => (
                            <CarCard key={index} car={car} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
};
