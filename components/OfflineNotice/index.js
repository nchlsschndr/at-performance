import { useState } from "react";
import styles from "./offlinenotice.module.scss";

export const OfflineNotice = () => {
    const [visible, setVisible] = useState(true);
    return (
        visible && (
            <div className={styles.offlineNoticeWrapper}>
                <div className="notice">
                    <h2>Hinweis</h2>
                    <p>
                        Dies ist eine anonymisierte Version der Webseite, <br /> da die Firma nicht mehr exisitiert.
                    </p>
                    <button onClick={() => setVisible(!visible)}>OK</button>
                </div>
            </div>
        )
    );
};
