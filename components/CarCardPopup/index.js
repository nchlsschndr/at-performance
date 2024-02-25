import styles from "./carcardpopup.module.scss";
import Image from "next/image";
import { InfoBlock } from "./InfoBlock";
import { IoMdClose } from "react-icons/io";

import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { BookingInfoPopup } from "../BookingInfoPopup";

const SwapOne = ({ className, mobile }) => {
    return (
        <div className={className}>
            <ul>
                <li>
                    Ab einer Mietdauer von mehr als 4 Tagen gibt es <b>20% Rabatt</b> auf den Gesamtmietpreis.
                </li>
                <li>
                    <b>Mehrkilometer:</b> Alles über die vereinbarten Kilometer wird mit 1,75€ pro Kilometer abgerechnet.
                </li>
                <li>
                    Gegen einen einmaligen Aufpreis von 90€ auf den Gesamtmietpreis wird der <b>Selbstkostenanteil auf 1000€ gesenkt</b>
                </li>
                <li>Kindersitze erhältlich gegen Aufpreis von 15€</li>
                {mobile && (
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                )}
            </ul>
        </div>
    );
};

const SwapTwo = ({ className, car, btnMobile }) => {
    return (
        <div className={className}>
            <InfoBlock title="Kraftstoff" value={car.Kraftstoff} />
            <InfoBlock title="Getriebe" value={car.Getriebe} />
            <InfoBlock title="Leistung" value={car.PS} unit="PS" />
            <InfoBlock title="Hubraum" value={car.Hubraum} unit="ccm" />
            <InfoBlock title="V-Max" value={car.VMax} unit="km/h" />
            <InfoBlock title="1-100" value={car["1-100"]} unit="s" />
            <hr />
            <hr />
            <InfoBlock title="Kaution" value={car.Kaution} unit="€" />
            <InfoBlock title="Selbstbeteiligung" value={car.Selbstbeteiligung} unit="€" />
            <hr />
            <hr />
            <InfoBlock title="Mo-Do" value={car.Preis8hMoDo} unit="€" sub="8 Std. inkl 100km" />
            <InfoBlock title="Fr-So" value={car.Preis8hFrSo} unit="€" sub="8 Std. inkl 100km" />
            <InfoBlock title="Mo-Do" value={car.PreisTagMoDo} unit="€" sub="/ Tag inkl 200km" big />
            <InfoBlock title="Fr-So" value={car.PreisTagFrSo} unit="€" sub="/ Tag inkl 150km" big />
            {!btnMobile && (
                <BookingInfoPopup position="top center">
                    <button className={styles.btnBooking}>Jetzt reservieren</button>
                </BookingInfoPopup>
            )}
        </div>
    );
};

export const CarCardPopup = ({ car, close }) => {
    return (
        <div className={styles.infoWrapper}>
            <div className={`${styles.popupSplit} split split-responsive`}>
                <div className={styles.splitted}>
                    <div className={styles.imgWrapper}>
                        <Image objectFit="cover" src={car.Bild} alt={car.Marke + " " + car.Modell} layout="fill" className={styles.carImage} />
                    </div>
                    <h3>
                        {car.Marke}&nbsp;
                        <b>{car.Modell}</b>
                    </h3>
                    <p className={styles.infoDetails}>
                        BJ {car.Baujahr} / {car.PS} PS
                    </p>
                    <p className={styles.infoDescription}>{car.Beschreibung}</p>
                    {useCheckMobileScreen() ? <SwapTwo btnMobile car={car} className={`${styles.splitted} ${styles.splittedRight}`} /> : <SwapOne car={car} />}
                </div>
                {useCheckMobileScreen() ? <SwapOne mobile className={styles.splitted} car={car} /> : <SwapTwo car={car} className={`${styles.splitted} ${styles.splittedRight}`} />}
            </div>
            <button
                className={styles.btnClose}
                onClick={() => {
                    close();
                }}
            >
                <IoMdClose />
            </button>
            {useCheckMobileScreen() && (
                <BookingInfoPopup position="top center">
                    <button className={styles.btnBooking}>Jetzt reservieren</button>
                </BookingInfoPopup>
            )}
        </div>
    );
};
