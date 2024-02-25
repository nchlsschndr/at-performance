import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import styles from "./imprint.module.scss";
import { Headline } from "../../components/Headline";

export default function Imprint() {
    return (
        <Layout title="Impressum" desc="Alle Angaben zum Impressum.">
            <main className={styles.imprint}>
                <Container>
                    <Headline title="Impressum" />
                    <p>
                        <b>Angaben gemäß § 5 TMG</b>
                        <br />
                        <br />
                        AT Performance
                        <br />
                        Musterstraße 1
                        <br />
                        12345 Musterstadt
                        <br />
                        <br />
                        Handelsregister: Wird nachgereicht
                        <br />
                        Registergericht: Amtsgericht Musterstadt
                        <br />
                        <br />
                        <b>Vertreten durch:</b>
                        <br />
                        Max Mustermann
                        <br />
                        <br />
                        <b>Kontakt</b>
                        <br />
                        Telefon: +49 (0) 123 456 789
                        <br />
                        E-Mail: info@beispiel.de
                        <br />
                        <br />
                        <b>Umsatzsteuer-ID</b>
                        <br />
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789
                        <br />
                        <br />
                        <b>Verbraucherstreitbeilegung / Universalschlichtungsstelle</b>
                        <br />
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </Container>
            </main>
        </Layout>
    );
}
