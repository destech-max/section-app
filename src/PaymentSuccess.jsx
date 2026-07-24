import { Check } from "lucide-react";
import { Link } from "react-router";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm rounded-xl bg-slate-900 border border-slate-800 p-6">
        <div className="mx-auto h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="h-5 w-5 text-emerald-400" />
        </div>

        <h2 className="mt-4 text-center text-white font-semibold">Payment successful</h2>
        <p className="mt-2 text-center text-sm text-slate-400 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam
          laudantium explicabo pariatur iste dolorem animi vitae error totam. At
          sapiente aliquam accusamus facere veritatis.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-lg bg-slate-800 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Cancel
          </button>
          <Link
            to="/deactivate"
            className="flex-1 rounded-lg bg-indigo-500 py-2 text-sm font-medium text-white hover:bg-indigo-400 text-center"
          >
            Deactivate
          </Link>
        </div>
      </div>
    </div>
  );
}