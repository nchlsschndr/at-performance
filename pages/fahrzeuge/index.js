import { Layout } from "../../components/Layout";
import { CarSelection } from "../../components/sections/CarSelection";
import { useEffect, useState } from "react";

import Papa from "papaparse";
import { SellingPoints } from "../../components/sections/SellingPoints";

export default function Vehicles() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSPdSjzCxfB1Kv1woVigpEv0PRyWOzhlCRzzm-oDvfjgscez-hx85vjnF6N4QsXcE1djFDQVZcEVH82/pub?gid=0&single=true&output=csv", {
            header: true,
            download: true,
            complete: function (results) {
                const orderedCars = results.data.sort((a, b) => a.BaldVerfuegbar.localeCompare(b.BaldVerfuegbar) || b.Preis8hMoDo - a.Preis8hMoDo);
                setCars(orderedCars);
            },
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
