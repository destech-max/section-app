import { Cloud, Lock, Database } from "lucide-react";

export default function BetterWorkflowLightReversed() {
  const features = [
    {
      icon: Cloud,
      title: "Push to deploy.",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      icon: Lock,
      title: "SSL certificates.",
      text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      icon: Database,
      title: "Database backups.",
      text: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-10">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-2 gap-16 items-center">

        {/* Left column - screenshot */}
        <div>
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            alt="App screenshot"
            className="w-full rounded-xl shadow-xl border border-gray-200"
          />
        </div>

        {/* Right column - text */}
        <div>
          <p className="text-indigo-600 text-sm font-semibold mb-3">
            Deploy faster
          </p>
          <h2 className="text-gray-900 text-4xl font-bold mb-5">
            A better workflow
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis ratione.
          </p>

          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <f.icon className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-gray-900 font-semibold">{f.title}</span>{" "}
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}