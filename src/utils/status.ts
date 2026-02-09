
export function formatStatus(status: string) {
    switch (status) {
        case 'SUCCESS':
            return 'Success';
        case 'FAILED':
            return 'Failed';
        case 'PENDING':
            return 'Pending';
        default:
            return status;
    }
}