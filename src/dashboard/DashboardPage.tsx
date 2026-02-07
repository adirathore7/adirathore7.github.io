import AccountSummary from "./AccountSummary";
import ActivityLog from "./ActivityLog";
import MoneyMovement from "./MoneyMovement";
import "./dashboard.css";

/*
  Landing page.
*/
export default function DashboardPage() {
    return (
        <article>
            <header className="gradient-text dashboard-header">Dashboard</header>

            <section className="dashboard-grid">
                {/* Left col */}
                <div className="left-col">
                    <AccountSummary />
                    <MoneyMovement />
                </div>

                {/* Right col */}
                <ActivityLog />
            </section>
        </article>
    );
}