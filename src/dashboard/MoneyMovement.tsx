import { useEffect, useState } from "react";
import MoneyServiceCard from "./MoneyServiceCard";
import { fetchMoneyServices } from "../services/bankingApi.service";
import LoadingSpinner from "../components/LoadingSpinner";
import type { MoneyService } from "../types/moneyService";

/*
  This component shows high-level business banking actions.
*/
export default function MoneyMovement() {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<any[]>([]);
    const [selectedService, setSelectedService] = useState<MoneyService | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchMoneyServices().then(services => {
            setServices(services);
            setLoading(false);
        });
    }, []);

    const handleServiceClick = (serviceId: string) => {
        const service = services.find(s => s.id === serviceId);
        setSelectedService(service);
    }

    return (
        <>
            <article className="card">
                <header>
                    <h3 style={{marginTop: 0}}>Money Movement</h3>
                </header>

                {!loading
                    ? (
                        <section className="action-list">
                            {services.map(service => (
                                <button key={service.id} className="action-btn" onClick={() => handleServiceClick(service.id)}>
                                    {service.name}
                                </button>
                            ))}
                        </section>
                    )
                    : (<LoadingSpinner />)}
            </article>

            {selectedService && <MoneyServiceCard service={selectedService} onClose={() => setSelectedService(null)} />}
        </>
    );
}