import './activity.css';

export default function ActivityFilters({status, setStatus, startDate, endDate, setStartDate, setEndDate}: 
    {status: string, setStatus: (s: string) => void, startDate: string, endDate: string, setStartDate: (d: string) => void, setEndDate: (d: string) => void}) {
    
    return (
        <div className="filters">
            <label htmlFor="filter">Filter:</label>

            <select id="filter" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">All</option>
                <option value="SUCCESS">Success</option>
                <option value="FAILED">Failed</option>
                <option value="PENDING">Pending</option>
            </select>

            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        </div>
    );
}