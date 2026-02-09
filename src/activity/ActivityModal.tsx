import { iconsMap } from "../assets/iconsMap";
import type { ActivityLog } from "../types/activity";

export default function ActivityModal({record, onClose}: {record: ActivityLog | null, onClose: () => void}) {
    if (!record) return null;

    return (
        <div className="modal-overlay">
            <div className="modal card">
                <header>
                    <h3>Activity Details</h3>
                </header>

                <p><strong>ID:</strong> {record.id}</p>
                {/* <p><strong>Date:</strong> {new Date(record.date).toLocaleString()}</p> */}
                <p><strong>User:</strong> {record.user}</p>
                <p><strong>Action:</strong> {record.action}</p>
                <p><strong>Status:</strong> {record.status}</p>
                <p><strong>Details:</strong> {record.details}</p>

                <button onClick={onClose}>
                    <img src={iconsMap.close} alt="Close" />
                </button>
                
            </div>
        </div>
    );
}