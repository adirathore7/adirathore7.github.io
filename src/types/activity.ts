
export interface ActivityLog {
    id: string;
    date: string;
    user: string;
    action: string;
    entity: string;
    status: "SUCCESS" | "FAILED" | "PENDING";
    details: string;
}
