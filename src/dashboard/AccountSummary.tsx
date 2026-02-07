
/*
  This component shows high-level balance across accounts.
*/
export default function AccountSummary() {
    const accounts = [
        { name: 'Checking Account', balance: '$223,500.75' },
        { name: 'Savings Account', balance: '$82,300.00'},
        { name: 'USD Account', balance: '$15,000.50 USD' }
    ];

    return (
        <article className="card">
            <header className="card-header">Account Summary</header>

            {accounts.map((account) => (
                <section key={account.name} className="account-row">
                    <p className="account-name">{account.name}</p>
                    <p className="account-balance">{account.balance}</p>
                </section>
            ))}
        </article>
    );
}