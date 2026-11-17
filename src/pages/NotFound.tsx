import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20">
      <p className="text-6xl font-bold text-indigo-900">404</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-900">Page not found / Page introuvable</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        The page you are looking for does not exist or has moved. La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-900 px-6 py-3 font-semibold text-white hover:bg-sky-700 transition-colors">
        <i className="ri-home-4-line" aria-hidden="true"></i>
        Home / Accueil
      </Link>
    </div>
  );
}
