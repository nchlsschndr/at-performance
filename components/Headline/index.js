import styles from "./headline.module.scss";

export const Headline = ({ title, sub }) => {
    return (
        <>
            <h2 className={styles.h2}>{title}</h2>
            <h3 className={styles.h3}>{sub}</h3>
        </>
    );
};
