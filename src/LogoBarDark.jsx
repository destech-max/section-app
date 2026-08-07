export default function LogoBarDark() {
  const logos = [
    "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-center gap-12 flex-wrap">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Customer logo"
            className="h-6 object-contain"
          />
        ))}
      </div>
    </div>
  );
}