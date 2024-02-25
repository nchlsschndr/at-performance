import Link from "next/link";

import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { Headline } from "../../components/Headline";
import styles from "../impressum/imprint.module.scss";

export default function Imprint() {
    return (
        <Layout title="Seite nicht gefunden" desc="Seite nicht gefunden.">
            <main className={styles.imprint}>
                <Container>
                    <Headline title="404 - Seite nicht gefunden" />
                    <Link href="/">
                        <a>Zurück zur Startseite</a>
                    </Link>
                </Container>
            </main>
        </Layout>
    );
}
