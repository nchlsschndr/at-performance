import { ContactBar } from "../sections/ContactBar";
import { NavBar } from "../sections/NavBar";
import { Faqs } from "../sections/Faqs";
import { Footer } from "../sections/Footer";
import Head from "next/head";

export const Layout = ({ children, noFaq, desc, title }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={desc} />
                <meta charset="UTF-8" />
                <meta name="keywords" content="Saarbrücken, Saarland, Sportwagen, Luxuswagen, BMW, Vermietung, Verleih, Autovermietung" />
                <meta name="author" content="Nicholas Schneider" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{`${title ? title + " | " : ""}AT Pferformance - Sportwagenvermietung`}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1e28" />
                <meta name="msapplication-TileColor" content="#F35135" />
                <meta name="theme-color" content="#f8f8ff" />
            </Head>
            <ContactBar />
            <NavBar />
            <div>{children}</div>
            {!noFaq && <Faqs />}
            <Footer />
        </div>
    );
};
