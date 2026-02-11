import { iconsMap } from "../assets/iconsMap";
import type { MoneyService } from "../types/moneyService";


export default function ServiceCard({ service, onClose }: { service: MoneyService, onClose: () => void }) {
    return (
        <article className="card">
            <header  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{marginTop: 0}}>{service.name}</h3>
                <button onClick={onClose} style={{background: 'none', border: 'none'}}>
                        <img src={iconsMap.close} alt="Close" />
                    </button>
            </header>

            <section className="service-details">
                <p>{service.description}</p>

            </section>
           
        </article>
    );
}