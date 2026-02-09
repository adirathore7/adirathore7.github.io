
export function formatActions(action: string) {
    switch (action) {
        case 'PAYMENT_CREATED':
            return 'Payment Created';
        case 'LOGIN_SUCCESS':
            return 'Login Success';
        case 'PROFILE_UPDATED':
            return 'Profile Updated';
        case 'PAYMENT_FAILED':
            return 'Payment Failed';
        case 'TRANSFER_APPROVED':
            return 'Transfer Approved';
        default:
            return action;
    }
}