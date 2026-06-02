'use client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the authentication cookie
    document.cookie = "authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // Redirect to login page
    router.push('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-all"
    >
      Logout
    </button>
  );
}

