import { iconsMap } from "../assets/iconsMap";
import type { ActivityLog } from "../types/activity";
import { formatActions } from "../utils/actions";
import { formatStatus } from "../utils/status";

export default function ActivityModal({record, onClose}: {record: ActivityLog | null, onClose: () => void}) {
    if (!record) return null;

    return (
        <div className="modal-overlay">
            <div className="modal card">
                <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>Activity Details</h3>

                    <button onClick={onClose} style={{background: 'none', border: 'none'}}>
                        <img src={iconsMap.close} alt="Close" />
                    </button>
                </header>

                <p><strong>ID:</strong> {record.id}</p>
                {/* <p><strong>Date:</strong> {new Date(record.date).toLocaleString()}</p> */}
                <p><strong>User:</strong> {record.user}</p>
                <p><strong>Action:</strong> {formatActions(record.action)}</p>
                <p><strong>Status:</strong> {formatStatus(record.status)}</p>
                <p><strong>Details:</strong> {record.details}</p>                
            </div>
        </div>
    );
}