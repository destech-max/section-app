import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

export default function FooterWithNewsletter() {
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

  const socials = [Facebook, Instagram, Twitter, Github, Youtube];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-10">
      <div className="max-w-5xl w-full mx-auto">

        <div className="grid grid-cols-5 gap-8 mb-12">
          {columns.map((col, i) => (
            <div key={i}>
              <h3 className="text-gray-900 text-sm font-semibold mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-gray-900 text-sm font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              The latest news, articles, and resources sent to your
              inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2026 Your Company, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((Icon, i) => (
              <Icon key={i} className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}