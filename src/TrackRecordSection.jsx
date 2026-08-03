import { Link } from "react-router";


export default function TrackRecordSection() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          alt="Team working together"
          className="w-full h-[320px] object-cover"
        />

        <div>
          <Link to="/time-linesection" className="text-blue-600 font-medium text-xs mb-2">
            Our track record
          </Link>

          <h2 className="text-2xl font-bold mb-3">
            Trusted by thousands of creators worldwide
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-bold">8,000+</p>
              <p className="text-gray-500 text-xs">Creators on the platform</p>
            </div>
            <div>
              <p className="text-lg font-bold">3%</p>
              <p className="text-gray-500 text-xs">Flat platform fee</p>
            </div>
            <div>
              <p className="text-lg font-bold">999%</p>
              <p className="text-gray-500 text-xs">Uptime guarantee</p>
            </div>
            <div>
              <p className="text-lg font-bold">$70M</p>
              <p className="text-gray-500 text-xs">Paid out to creators</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}