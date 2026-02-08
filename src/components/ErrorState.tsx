
export default function ErrorState({message}: {message: string}) {
    return (
        <div role="alert" style={{color: '#991b1b'}}>
            {message}
        </div>
    );
}