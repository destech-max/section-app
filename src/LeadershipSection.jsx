export default function LeadershipSection() {
  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-3 gap-10">

        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Meet our leadership
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We're a dynamic group of individuals who are passionate about
            what we do and dedicated to delivering the best results for
            our clients.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Leslie Alexander"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Leslie Alexander</p>
              <p className="text-indigo-400 text-sm">Co-Founder / CEO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Dries Vincent"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Dries Vincent</p>
              <p className="text-indigo-400 text-sm">Business Relations</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Courtney Henry"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Courtney Henry</p>
              <p className="text-indigo-400 text-sm">Designer</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Michael Foster"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Michael Foster</p>
              <p className="text-indigo-400 text-sm">Co-Founder / CTO</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Lindsay Walton"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Lindsay Walton</p>
              <p className="text-indigo-400 text-sm">Front-end Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Tom Cook"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-white font-semibold text-sm">Tom Cook</p>
              <p className="text-indigo-400 text-sm">Director of Product</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}