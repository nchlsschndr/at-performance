import { useEffect, useState } from "react";

import { Layout } from "../components/Layout";
import { Header } from "../components/sections/Header";
import { Intro } from "../components/sections/Intro";
import { SellingPoints } from "../components/sections/SellingPoints";
import { CarSelection } from "../components/sections/CarSelection";
import { carData } from "../utils/carData";

export default function Fahrzeuge() {
    const [cars, setCars] = useState([
        {
            Marke: "-",
            Modell: "-",
            PS: "-",
            Baujahr: "-",
            Preis8hMoDo: "-",
            Bild: "",
            BoxPosition: "links",
        },
    ]);

    const [featuredCar, setFeaturedCar] = useState({});

    useEffect(() => {
        const orderedCars = carData.sort((a, b) => a.BaldVerfuegbar.localeCompare(b.BaldVerfuegbar) || b.Preis8hMoDo - a.Preis8hMoDo);
        setCars(orderedCars);
        const featured = carData.filter((car) => {
            return car.Featured === "x";
        });
        setFeaturedCar(featured[0] ? featured[0] : orderedCars[0]);
    }, []);
    return (
        <Layout desc="Sport- und Luxusfahrzeug Autovermietung in Saarbrücken.">
            <main>
                <Header car={featuredCar} />
                <SellingPoints />
                <Intro />
                <CarSelection cars={cars} pageLink />
            </main>
        </Layout>
    );
}
