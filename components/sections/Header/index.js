import { Container } from "../../../components/Container";
import styles from "./header.module.scss";
import Popup from "reactjs-popup";
import { CarCardPopup } from "../../../components/CarCardPopup";
const overlayStyle = { backgroundColor: "rgba(0, 0, 0, 0.9)", animation: "fadeIn 0.2s" };

export const Header = ({ car }) => {
    // console.log(car);
    const position = car.BoxPosition === "links" ? "flex-start" : "flex-end";
    const style = {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: position,
    };
    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.headerImage} ${car ? styles.loading : ""}`}
                style={{
                    backgroundImage: `url(${car.Bild})`,
                }}
            >
                <Container style={style}>
                    <div className={styles.headerBox}>
                        <div>
                            <div>
                                <h1>
                                    {car.Marke}&nbsp;
                                    <b>{car.Modell}</b>
                                </h1>
                                <p>
                                    {car.PS} PS / BJ {car.Baujahr}
                                </p>
                            </div>
                            <div className={styles.price}>
                                <p>
                                    <span>Ab&nbsp;</span>
                                    <span>{car.Preis8hMoDo}.- €</span>
                                </p>
                                <p>8 Stunden / inkl. 100km</p>
                            </div>
                        </div>
                        <Popup {...{ overlayStyle }} lockScroll closeOnDocumentClick={false} trigger={<button className={styles.cta}>Infos & Anfrage</button>} modal>
                            {(close) => <CarCardPopup car={car} close={close} />}
                        </Popup>
                    </div>
                </Container>
            </div>
        </div>
    );
};
