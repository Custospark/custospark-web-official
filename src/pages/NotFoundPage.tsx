import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary via-black to-primary text-white px-4">
      <span className="text-8xl font-bold text-white/20 mb-4">404</span>
      <h1 className="font-heading text-h1 text-white mb-4">Page Not Found</h1>
      <p className="text-white/70 text-body-lg mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </section>
  );
}
