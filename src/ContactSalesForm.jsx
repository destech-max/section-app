export default function ContactSalesForm() {
  return (
    <div className="relative bg-[#0b0b17] min-h-screen flex items-center justify-center p-6 overflow-hidden">


      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none">
        <div className="absolute top-[-100px] left-[-50px] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[-50px] left-[300px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-md w-full mx-auto">

        <h2 className="text-white text-5xl font-bold text-center mb-2">
          Contact sales
        </h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="text-white text-sm font-medium block mb-1.5">
              First name
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-white text-sm font-medium block mb-1.5">
              Last name
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="text-white text-sm font-medium block mb-1.5">
            Company
          </label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-5">
          <label className="text-white text-sm font-medium block mb-1.5">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-5">
          <label className="text-white text-sm font-medium block mb-1.5">
            Phone number
          </label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-md overflow-hidden focus-within:border-indigo-500">
            <select className="text-gray-400 text-sm px-3 py-2 border-r border-white/10">
              <option value="+1">US</option>
              <option value="+1">EA </option>
              <option value="+1">UA</option>
            </select>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full bg-transparent px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-white text-sm font-medium block mb-1.5">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-y"
          ></textarea>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            className="w-9 h-5 rounded-full bg-white/10 relative shrink-0"
          >
            <span className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white"></span>
          </button>
          <p className="text-gray-400 text-sm">
            By selecting this, you agree to our{" "}
            <a href="#" className="text-white underline">
              privacy policy
            </a>
            .
          </p>
        </div>

        <button
          type="button"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 rounded-md transition-colors"
        >
          Let's talk
        </button>

      </div>
    </div>
  );
}