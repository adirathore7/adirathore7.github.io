import AccountSummary from "./AccountSummary";
import RecentActivityLog from "./RecentActivityLog";
import MoneyMovement from "./MoneyMovement";
import "./dashboard.css";

/*
  Landing page.
*/
export default function DashboardPage() {
    return (
        <article className="dashboard-container">
            <header>
                <h1 className="gradient-text">Dashboard</h1>
            </header>

            <section className="dashboard-grid">
                {/* Left col */}
                <div className="left-col">
                    <AccountSummary />
                    <MoneyMovement />
                </div>

                {/* Right col */}
                <RecentActivityLog />
            </section>
        </article>
    );
}