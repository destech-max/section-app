import { Calendar, HandHeart } from "lucide-react";

export default function NewsletterSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-[#0b0b17]">

      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/4 w-[500px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[-50px] right-1/4 w-[400px] h-[300px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-4xl w-full mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-10">

          {/* Left - subscribe form */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud
              adipisicing velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right - features */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Weekly articles
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Non laboris consequat cupidatat laborum magna. Eiusmod non
                irure cupidatat duis commodo amet.
              </p>
            </div>

            <div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <HandHeart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                No spam
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Officia excepteur ullamco ut sint duis proident non
                adipisicing. Voluptate incididunt anim.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}