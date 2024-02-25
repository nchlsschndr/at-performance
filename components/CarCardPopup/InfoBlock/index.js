import styles from "./infoblock.module.scss";

export const InfoBlock = ({ title, value, unit, sub, big }) => {
    return (
        <div className={styles.infoBlock}>
            <p>{title}</p>
            <h4 className={`${big ? styles.big : ""}`}>
                <b>
                    {value}
                    {unit ? ` ${unit}` : ""}
                </b>
            </h4>
            {sub && <p>{sub}</p>}
        </div>
    );
};
