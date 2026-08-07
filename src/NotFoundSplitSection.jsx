import { ArrowLeft, Waves } from "lucide-react";

export default function NotFoundSplitSection() {
  return (
    <div className="min-h-screen bg-[#0b0b17] flex">

      {/* Left side */}
      <div className="w-1/2 flex flex-col justify-between p-10">
        <img
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        className="w-7 h-7 text-indigo-500" />

        <div>
          <p className="text-indigo-400 text-sm font-semibold mb-4">404</p>
          <h1 className="text-white text-4xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
        </div>

        <div className="border-t border-white/10 pt-4 flex items-center gap-4 text-gray-500 text-sm">
          <a href="#" className="hover:text-white">Contact support</a>
          <span>·</span>
          <a href="#" className="hover:text-white">Status</a>
        </div>
      </div>

      {/* Right side - image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80')",
        }}
      ></div>

    </div>
  );
}