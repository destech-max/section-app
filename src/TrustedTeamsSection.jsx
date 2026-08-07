export default function TrustedTeamsSection() {
  const logos = [
    "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-2 gap-16 items-center">

        {/* Left column */}
        <div>
          <h2 className="text-gray-900 text-3xl font-bold leading-tight mb-4">
            Trusted by the most innovative teams
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            egestas tempus tellus etiam sed. Quam a scelerisque amet
            ullamcorper eu enim et fermentum, augue.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
              Create account
            </button>
            <a href="#" className="text-gray-900 text-sm font-semibold">
              Contact us →
            </a>
          </div>
        </div>

        {/* Right column - logo grid */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Customer logo"
              className="h-7 object-contain justify-self-start"
            />
          ))}
        </div>

      </div>
    </div>
  );
}