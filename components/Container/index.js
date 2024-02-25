import styles from "./container.module.scss";

export const Container = ({ children, wide, style }) => {
    return (
        <div style={style} className={`${styles.container} ${wide ? styles.containerWide : ""}`}>
            {children}
        </div>
    );
};
