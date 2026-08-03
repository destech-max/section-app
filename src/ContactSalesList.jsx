import { MessageSquare, Bug, Monitor, ArrowRight } from "lucide-react";

export default function ContactSalesList() {
  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full mx-auto">

        <h2 className="text-white text-5xl font-bold text-center mb-2">
          Contact sales
        </h2>
        <p className="text-gray-400 text-sm text-center mb-10">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>

        <div className="space-y-8">

          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Sales support
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Ut cursus est ut amet. Lobortis eget egestas leo vitae eget
                porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.
              </p>
              <a href="#" className="text-indigo-400 text-sm font-medium inline-flex items-center gap-1 hover:text-indigo-300">
                Contact us <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <Bug className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Bug reports
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Expedita qui non ut quia ipsum voluptatum ipsam pariatur.
                Culpa vitae ipsum minus eius vero quo quibusdam.
              </p>
              <a href="#" className="text-indigo-400 text-sm font-medium inline-flex items-center gap-1 hover:text-indigo-300">
                Report a bug <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Technical support
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Sint aut modi porro consequatur architecto commodi qui
                consequatur. Dignissimos adipisci minima.
              </p>
              <a href="#" className="text-indigo-400 text-sm font-medium inline-flex items-center gap-1 hover:text-indigo-300">
                Join our Discord <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}