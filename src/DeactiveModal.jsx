import { TriangleAlert } from "lucide-react";
import { Link } from "react-router";

export default function DeactivateModal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500/60 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
          <TriangleAlert className="h-5 w-5 text-red-600" />
        </div>

        <h2 className="mt-4 text-gray-900 font-semibold">Deactivate account</h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed from our servers forever. This action
          cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Link
            to="/payment-success"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500">
            Deactivate
          </button>
        </div>
      </div>
    </div>
  );
}