import { Layout } from "../../components/Layout";
import { CarSelection } from "../../components/sections/CarSelection";
import { useEffect, useState } from "react";
import { carData } from "../../utils/carData";
import { SellingPoints } from "../../components/sections/SellingPoints";

export default function Vehicles() {
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
    useEffect(() => {
        const orderedCars = carData.sort((a, b) => a.BaldVerfuegbar.localeCompare(b.BaldVerfuegbar) || b.Preis8hMoDo - a.Preis8hMoDo);
        setCars(orderedCars);
        const featured = carData.filter((car) => {
            return car.Featured === "x";
        });
    }, []);
    return (
        <Layout title="Fahrzeuge" desc="Hier finden Sie eine Übersicht über unsere mietbaren Fahrzeuge.">
            <main>
                <CarSelection cars={cars} />
                <SellingPoints />
            </main>
        </Layout>
    );
}
