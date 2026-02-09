import type { ActivityLog } from "../types/activity";

const users = ["Admin", "OpsUser", "FinanceUser", "Reviewer"] as const;
const actions = ['PAYMENT_CREATED', 'LOGIN_SUCCESS', 'PROFILE_UPDATED', 'PAYMENT_FAILED', 'TRANSFER_APPROVED'] as const;
const entities = ['Payment', 'Account', 'User'] as const;
const statuses = ["SUCCESS", "FAILED", "PENDING"] as const;

export const mockActivityLogs: ActivityLog[] = Array.from(
    { length: 75 },
    (_, index) => ({
        id: `ACT-${1000 + index}`,
        date: new Date(Date.now() - index * 86400000).toISOString(),
        user: users[index % users.length],
        action: actions[index % actions.length],
        entity: entities[index % entities.length],
        status: statuses[index % statuses.length],
        details: `Detailed message for activity ${index}`
    })
);