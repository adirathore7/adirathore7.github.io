import "./dashboard.css";

/*
  This component displays recent user and system actions.
*/
export default function ActivityLog() {
    const logs = [
        { time: '2024-06-01 10:15:30', action: 'Logged in from IP 192.168.1.100' },
        { time: '2024-06-01 09:45:15', action: 'Transferred $5,000 to Checking Account' },
        { time: '2024-05-31 18:30:45', action: 'Updated profile information' }
    ];

    return (
        <article className="card">
            <header className="card-header">Recent Activity</header>

            <section className="log-list">
                {logs.map((log, index) => (
                    <div key={index} className="activity-item">
                        <span className="log-action">{log.action}</span>
                        <span className="activity-time">{log.time}</span>
                    </div>
                ))}
            </section>
        </article>
    );
}