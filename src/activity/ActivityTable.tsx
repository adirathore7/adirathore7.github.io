import { useEffect, useState } from "react";
import type { ActivityLog } from "../types/activity";
import { fetchActivityLogs } from "../services/activity.service";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatDate } from "../utils/dateFormat";
import { formatActions } from "../utils/actions";
import { formatStatus } from "../utils/status";
import { iconsMap } from "../assets/iconsMap";
import "./activity.css";

export default function ActivityTable({ status, startDate, endDate, onRowClick }: {status: string, startDate: string, endDate: string, onRowClick: (record: ActivityLog) => void}) {
    const [rows, setRows] = useState<ActivityLog[]>([]);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);

    const [sortField, setSortField] = useState<keyof ActivityLog>("date");
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async() => {
            setLoading(true);

            try {
                const {data, total} = await fetchActivityLogs({
                    page,
                    pageSize,
                    status,
                    startDate,
                    endDate,
                    sortField,
                    sortOrder
                });
                setRows(data);
                setTotal(Math.ceil(total / pageSize));
            } catch (error) {
                console.error("Error fetching activity logs:", error);
                throw error;
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [page, pageSize, status, startDate, endDate, sortField, sortOrder]);
    
    function handleSort(field: keyof ActivityLog) {
        if (sortField === field) {
            setSortOrder((order) => order === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    }

    function getSortIcon(field: keyof ActivityLog) {
        if (sortField !== field) {
            return iconsMap.desc;
        }
        return sortOrder === "asc" ? iconsMap.asc : iconsMap.desc;
    }

    if (rows.length === 0 && !loading) {
        return <div className="no-data">No activity logs found.</div>;
    }
    return (
        <>
            {!loading ? 
                (<div>
                    <table className="activity-table" aria-label="Activity Table">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort("date")}>
                                    Date<img src={getSortIcon("date")} alt="Sort" className="sort-icon" />
                                </th>
                                <th onClick={() => handleSort("user")}>
                                    User<img src={getSortIcon("user")} alt="Sort" className="sort-icon" />
                                </th>
                                <th onClick={() => handleSort("action")}>
                                    Action<img src={getSortIcon("action")} alt="Sort" className="sort-icon" />
                                </th>
                                <th onClick={() => handleSort("status")}>
                                    Status<img src={getSortIcon("status")} alt="Sort" className="sort-icon" />
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((record) => (
                                <tr key={record.id} onClick={() => onRowClick(record)} style={{cursor: "pointer"}}>
                                    <td>{formatDate(record.date)}</td>
                                    <td><a id={record.id} href="#">{record.user}</a></td>
                                    <td>{formatActions(record.action)}</td>
                                    <td>{formatStatus(record.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <select id="dropdown" value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>

                        <div className="pagination-buttons">
                            <button onClick={() => setPage(1)} disabled={page === 1}>
                                <img src={iconsMap.first} alt="First" className="pagination-icons" />
                            </button>
                            <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                                <img src={iconsMap.prev} alt="Previous" className="pagination-icons" />
                            </button>
                            <span>Page {page} of {total}</span>
                            <button onClick={() => setPage((p) => Math.min(p + 1, total))} disabled={page === total}>
                                <img src={iconsMap.next} alt="Next" className="pagination-icons" />
                            </button>
                            <button onClick={() => setPage(total)} disabled={page === total}>
                                <img src={iconsMap.last} alt="Last" className="pagination-icons" />
                            </button>
                        </div>
                    </div>
                </div>)
                : <LoadingSpinner />
            }
        </>
    );
}