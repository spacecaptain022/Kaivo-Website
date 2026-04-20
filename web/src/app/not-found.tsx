import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-sm opacity-80">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full border border-current px-4 py-2 text-sm font-medium hover:opacity-80"
      >
        Back to home
      </Link>
    </div>
  );
}
