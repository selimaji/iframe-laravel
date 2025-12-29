export default function Page() {
    return (
        <iframe
            src={process.env.NEXT_PUBLIC_URL}
            className={'h-screen w-screen bg-white'}
        />
    );
}
