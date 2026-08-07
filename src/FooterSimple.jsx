import { Waves } from "lucide-react";

export default function FooterSimple() {
  const columns = [
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
    },
    {
      title: "Support",
      links: ["Submit ticket", "Documentation", "Guides"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press"],
    },
    {
      title: "Legal",
      links: ["Terms of service", "Privacy policy", "License"],
    },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-10">
      <div className="max-w-5xl w-full mx-auto">
        <Waves className="w-7 h-7 text-white mb-10" />

        <div className="grid grid-cols-4 gap-8">
          {columns.map((col, i) => (
            <div key={i}>
              <h3 className="text-white text-sm font-semibold mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}