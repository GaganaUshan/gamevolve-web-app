import { useState } from 'react';
import { Shield, User, Lock, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief loading time
    setTimeout(() => {
      if (username === 'Gagana' && password === 'Yushan2002') {
        onLogin();
      } else {
        setError('Invalid username or password');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e161e] to-[#472b3f] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-[#e18cc5]/10 border border-[#e18cc5]/30 rounded-full mb-4">
            <Shield className="size-12 text-[#e18cc5]" />
          </div>
          <h1 className="text-4xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
            Admin Login
          </h1>
          <p className="text-gray-400">
            Enter your credentials to access the admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-2xl border border-[#80496c] shadow-2xl p-8">
          <div className="space-y-6">
            {/* Username Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <User className="size-5" />
                <span>Username</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all"
                required
                autoComplete="username"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <Lock className="size-5" />
                <span>Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                <AlertCircle className="size-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e18cc5] to-[#ba5c93] text-[#1e161e] rounded-lg shadow-lg shadow-[#e18cc5]/50 hover:shadow-[#e18cc5]/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Shield className="size-5" />
              <span>{isLoading ? 'Authenticating...' : 'Login'}</span>
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}
