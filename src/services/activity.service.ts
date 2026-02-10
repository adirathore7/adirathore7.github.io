import { mockActivityLogs } from "../mockData/mockActivity";
import type { ActivityLog } from "../types/activity";

export interface ActivityQuery {
    page: number;
    pageSize: number;
    status?: string;
    startDate?: string;
    endDate?: string;
    sortField?: keyof ActivityLog;
    sortOrder?: 'asc' | 'desc';
}

export async function fetchActivityLogs(query: ActivityQuery) {
    // Placeholder for API call
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

    let data = [...mockActivityLogs];

    // Apply filters
    if (query.status) {
        data = data.filter((record) => record.status === query.status);
    }
    if (query.startDate) {
        data = data.filter((record) => new Date(record.date) >= new Date(query.startDate!));
    }
    if (query.endDate) {
        data = data.filter((record) => new Date(record.date) <= new Date(query.endDate!));
    }

    // Apply sorting
    if (query.sortField) {
        data.sort((a, b) => {
            const aValue = a[query.sortField!];
            const bValue = b[query.sortField!];
            if (aValue < bValue) return query.sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return query.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }
    
    // Simulate pagination by slicing the data array
    const total = data.length;
    const startIndex = (query.page - 1) * query.pageSize;
    const endIndex = startIndex + query.pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    // In a real implementation, this would make a network request to fetch data based on the query parameters.
    return {
        data: paginatedData,
        total,
    };
}