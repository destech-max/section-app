export default function AboutMissionSection() {
  const stats = [
    { value: "$150M", label: "Raised" },
    { value: "30K", label: "Companies" },
    { value: "1.5M", label: "Deals Closed" },
    { value: "200M", label: "Leads Generated" },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-2 gap-16">

        {/* Left column */}
        <div>
          <p className="text-indigo-600 text-sm font-semibold mb-2">About us</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            On a mission to empower remote teams
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
            At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
            vitae feugiat egestas.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-4">Our mission</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et
            ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
            ut. Ac lorem vel integer orci.
          </p>

          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            The numbers
          </h3>
          <div className="border-t border-gray-200 pt-6 grid grid-cols-2 gap-x-8 gap-y-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 mt-12">
            <img
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
              alt="Team discussion"
              className="w-full h-48 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
              alt="Team working at desk"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
              alt="Team presenting"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
              alt="Woman working remotely"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}