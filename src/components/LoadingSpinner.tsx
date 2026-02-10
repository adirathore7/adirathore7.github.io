import { iconsMap } from "../assets/iconsMap";

export default function LoadingSpinner() {
    return (
        <div role="status" aria-live="polite" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
            <img src={iconsMap.spinner} alt="Loading..." className="spinner" />
            <p style={{marginTop: '1em'}} className="gradient-text">Loading...</p>
        </div>
    );
}