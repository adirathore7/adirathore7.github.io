import type { RecentActivity } from "../types/activity";

const actions = [
    'Logged in from IP from IP 192.168.1.100',
    'Transferred $5,000 to Checking Account',
    'Updated profile information',
    'Logged out',
    'Password changed',
    'Two-factor authentication enabled',
    'Failed login attempt',
    'Payment of $200 processed',
    'Account settings updated',
    'New device login detected',
    'Email address updated',
    'Security question changed',
    'Profile picture updated',
    'Subscription plan changed',
    'API key generated',
    'Data export requested',
    'Session expired',
    'User role updated',
] as const;

export const mockRecentActivity: RecentActivity[] = Array.from(
    { length: 30 },
    (_, index) => ({
        id: `RACT-${1000 + index}`,
        time: `2024-${String(index % 12 + 1).padStart(2, '0')}-${String(index % 28 + 1).padStart(2, '0')}`,
        action: actions[Math.floor(Math.random() * actions.length)],
    })
);