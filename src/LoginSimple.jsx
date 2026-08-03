import { useState } from "react";
import { Link } from "react-router";

export default function LoginSimple() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    console.log(form, remember);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <img className="h-8 w-8 text-indigo-600 mx-auto" viewBox="0 0 24 24" fill="currentColor"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
        alt="tailwin logo"
        >
           
        </img>

        <h1 className="text-2xl font-semibold text-gray-900 text-center mt-6 mb-8">
          Sign in to your account
        </h1>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={update("email")}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={update("password")}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/login-split" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Start a 14-day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}