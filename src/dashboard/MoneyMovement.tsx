
/*
  This component shows high-level business banking actions.
*/
export default function MoneyMovement() {
    return (
        <article className="card">
            <header className="card-header">Money Movement</header>

            <section className="action-list">
                <button className="action-btn">Transfer between Accounts</button>
                <button className="action-btn">Pay a bill</button>
                <button className="action-btn">Zelle Money</button>
            </section>
        </article>
    );
}