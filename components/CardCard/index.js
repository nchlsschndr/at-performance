import styles from "./carcard.module.scss";
import Image from "next/image";
import Popup from "reactjs-popup";
import { CarCardPopup } from "../CarCardPopup";
const overlayStyle = { backgroundColor: "rgba(0, 0, 0, 0.9)", animation: "fadeIn 0.2s" };

export const CarCard = ({ car }) => {
    return (
        <div className={styles.carCard}>
            {car.BaldVerfuegbar && <div className={styles.comingSoon}>Bald verfügbar</div>}
            <div className={styles.imgWrapper}>
                <Image src={car.Bild} alt={car.Marke + " " + car.Modell} width={800} height={500} />
            </div>
            <div className={styles.infoWrapper}>
                <div>
                    <h3>
                        {car.Marke}&nbsp;
                        <b>{car.Modell}</b>
                    </h3>
                    <p className={styles.infoDetails}>
                        BJ {car.Baujahr} / {car.PS} PS
                    </p>
                    <p className={styles.infoDescription}>{car.Beschreibung}</p>
                </div>
                <p className={styles.price}>
                    <span>Ab&nbsp;</span>
                    <span>{car.Preis8hMoDo}.- €</span>
                    <br />
                    <span>8 Std. inkl. 100km</span>
                </p>
            </div>
            <Popup {...{ overlayStyle }} closeOnDocumentClick={false} lockScroll trigger={<button className={styles.btnMore}>Infos & Reservierung</button>} modal>
                {(close) => <CarCardPopup car={car} close={close} />}
            </Popup>
        </div>
    );
};
