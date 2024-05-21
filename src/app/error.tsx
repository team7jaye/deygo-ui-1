'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[100vh] grid place-items-center">
      <h2>{error.message ?? 'Something went wrong'}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
