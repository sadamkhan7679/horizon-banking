"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-screen w-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-[200px] font-bold text-bankGradient">
              Something went wrong!
            </h1>
            <p className="text-3xl text-blue-600">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We ran into an issue. Please try again.
            </p>
            <p className="text-2xl text-gray-800 my-5">{error.message}</p>

            <button className="button" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
