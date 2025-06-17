import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left image */}
      <div className="w-full relative">
        <img
          src="/Rectangle 2756.png"
          alt="login visual"
          className="h-screen w-full object-fill"
        />
        <p className="absolute bottom-0 left-0 m-12 text-white text-sm">
          Photo by Alexandr Popadin
        </p>
      </div>

      {/* Right form */}
      <div className="w-1/2 md:w-1/2 bg-white flex flex-col justify-between p-12">
        <div>
          {/* Logo */}
          <div className="flex items-center pb-12 gap-2">
            <img src="/Avatar-UI-Unicorn-V2.png" alt="UI Logo" className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">UI Unicorn</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl font-semibold pb-6">Nice to see you again</h2>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Login</label>
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                  setEmailError(value && !isValid ? "Invalid email format" : "");
                }}
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-200 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  if (e.target.value.length <= 8) {
                    setPassword(e.target.value);
                  }
                }}
                className="w-full mt-1 px-4 py-2 pr-10 rounded-md bg-gray-200 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-2"
              >
                <img
                  src={showPassword ? "/Input-Icons.png" : "/Input-Icons.png"}
                  alt="Toggle visibility"
                  className="w-7 h-7"
                />
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                    rememberMe ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                      rememberMe ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-gray-700">Remember me</span>
              </div>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Sign in
            </button>
          </form>

          {/* Google Sign-in */}
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-md mt-16">
            <img src="/Other-Pay-Method.png" alt="Google" className="h-5 w-5" />
            Or sign in with Google
          </button>

          {/* Sign up link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up now
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
          <a href="#" className="flex items-center gap-2 text-blue-500">
            <img
              src="/Figma.png"
              alt="icon"
              className="w-5 h-5 rounded-full"
            />
            @uiunicorn
          </a>
          <p>© Perfect Login 2021</p>
        </div>
      </div>
    </div>
  );
}
