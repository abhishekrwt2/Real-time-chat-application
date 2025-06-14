import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageCircleHeart, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed top-0 z-40 w-full h-16 border-b border-transparent 
      bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300 text-white shadow-md"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-all">
              <div className="size-9 rounded-lg bg-white/20 flex items-center justify-center">
                <MessageCircleHeart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold">TalkItOut</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link to="/profile" className="btn btn-sm gap-2 bg-white text-black hover:bg-gray-200">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="btn btn-sm gap-2 bg-white text-black hover:bg-gray-200"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
