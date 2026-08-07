import { ArrowLeft } from "lucide-react";

export default function NotFoundSection() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center pt-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75')",
      }}
    >
      <div className="absolute inset-0 bg-teal-900/30"></div>

      <div className="relative text-center max-w-lg">
        <p className="text-white text-sm font-semibold mb-4">404</p>
        <h1 className="text-white text-4xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-white/80 text-base mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
      </div>
    </div>
  );
}