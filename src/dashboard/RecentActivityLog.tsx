import { useEffect, useState } from "react";
import { formatDateTime } from "../utils/dateTimeFormat";
import type { RecentActivity } from "../types/activity";
import { fetchRecentActivity } from "../services/recentActivity.service";
import LoadingSpinner from "../components/LoadingSpinner";
import "./dashboard.css";

/*
  This component displays recent user and system actions.
*/
export default function RecentActivityLog() {
    const [logs, setLogs] = useState<RecentActivity[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const loadData = async() => {
            try {
                setLoading(true);
                const data = await fetchRecentActivity();
                setLogs(data);
            } catch (error) {
                console.error("Error fetching recent activity:", error);
                throw error;
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    return (
        <article className="card">
            <header>
                <h3 style={{marginTop: 0}}>Recent Activity</h3>
            </header>
            {!loading
                ? (
                    <section className="recent-activity-list">
                        {logs.map((log, index) => (
                            <div key={index} className="recent-activity-item">
                                <span className="recent-activity-action">{log.action}</span>
                                <span className="recent-activity-time">{formatDateTime(log.time)}</span>
                            </div>
                        ))}
                    </section>
                )
                : (<LoadingSpinner /> )
            }
        </article>
    );
}