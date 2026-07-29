import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "@/assets/images/login-bg.jpg";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    onLogin();
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black">
      {/* Left Side */}
      <div
        className="hidden lg:flex items-end p-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl text-white max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            Merc Factor ERP
          </h1>

          <p className="text-gray-300">
            Professional Automotive Workshop Management Software built for
            modern service centers.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center px-6 py-10">
        <Card className="w-full max-w-md shadow-2xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Welcome Back
            </CardTitle>

            <p className="text-center text-muted-foreground">
              Sign in to Merc Factor ERP
            </p>
          </CardHeader>

          <CardContent className="space-y-5">
            <Input
              type="email"
              placeholder="admin@mercfactormc.co.za"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            <Button
              className="w-full bg-blue-700 hover:bg-blue-800"
              onClick={handleLogin}
            >
              Sign In
            </Button>

            <div className="text-center text-xs text-gray-500 pt-4">
              <p>Merc Factor ERP</p>
              <p>Version 1.0.0 Alpha</p>
              <p className="mt-2">
                © 2026 Merc Factor Maintenance Center
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}