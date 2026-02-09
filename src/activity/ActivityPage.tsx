import { Suspense, useState } from "react";
import type { ActivityLog } from "../types/activity";
import ActivityFilters from "./ActivityFilters";
import ActivityTable from "./ActivityTable";
import ActivityModal from "./ActivityModal";
import "./activity.css";
import LoadingSpinner from "../components/LoadingSpinner";

/*
  This page displays a comprehensive activity log with filtering and details.
*/
export default function ActivityPage() {
    const [statusFilter, setStatusFilter] = useState("");
    const [selected, setSelected] = useState<ActivityLog | null>(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <article className="activity-container">
                <header>
                    <h2 className="gradient-text">Activity Log</h2>
                </header>

                <div className="card">
                    <ActivityFilters status={statusFilter} setStatus={setStatusFilter} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />

                    <ActivityTable status={statusFilter} startDate={startDate} endDate={endDate} onRowClick={setSelected} />
                    
                    {selected && <ActivityModal record={selected} onClose={() => setSelected(null)} />}
                </div>
            </article>
        </Suspense>
    );
}