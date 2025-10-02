
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
			<div className="max-w-3xl mx-auto p-8 text-center">
				<h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
					404
				</h1>
				<p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
					Oops — the page you are looking for doesn't exist or has been moved.
				</p>

				<div className="mb-6">
					<img
						src="/file.svg"
						alt="Not found illustration"
						className="mx-auto w-48 h-48 opacity-80"
					/>
				</div>

				<div className="flex items-center justify-center gap-4">
					<Link
						href="/"
						className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-700 to-cyan-600 text-white rounded-lg shadow-md hover:opacity-95"
					>
						Go back home
					</Link>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
					>
						Contact me
					</Link>
				</div>
			</div>
		</main>
	);
}

