
/*
  Display single account summary
*/

import type { Account } from "../types/banking";
import { formatAmount } from "../utils/amountFormat";

interface Props {
    account: Account,
    onSelect: (id: string) => void
}

export default function AccountCard({account, onSelect}: Props) {

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(account.id);
        }
    }

    return (
        <div className="account-card" onClick={() => onSelect(account.id)} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
            <div className="account-name">{account.name}</div>
            <div className="account-balance">{formatAmount(account.balance)} {account.currency}</div>
        </div>
    );
}