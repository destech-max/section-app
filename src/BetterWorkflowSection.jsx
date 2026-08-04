import {
  Search,
  FolderKanban,
  Rocket,
  Activity,
  Globe,
  Settings,
  ChevronRight,
  Plus,
} from "lucide-react";

export default function BetterWorkflowSection() {
  const projects = [
    { name: "Planetaria", repo: "ios-app", meta: "Deploys from GitHub · Initiated 12s ago", tag: "Preview", tagColor: "bg-white/10 text-gray-300", dotColor: "bg-gray-500" },
    { name: "Planetaria", repo: "mobile-api", meta: "Deploys from GitHub · Deployed 3m ago · 23s", tag: "Production", tagColor: "bg-indigo-600 text-white", dotColor: "bg-red-500" },
    { name: "Tailwind Labs", repo: "tailwindcss.com", meta: "Deploys from GitHub · Initiated 3m 45s ago · 3m 4s", tag: "Preview", tagColor: "bg-white/10 text-gray-300", dotColor: "bg-gray-500" },
    { name: "Tailwind Labs", repo: "tailwindui.com", meta: "Deploys from GitHub · Initiated 8m ago · 1m 30s", tag: "Preview", tagColor: "bg-white/10 text-gray-300", dotColor: "bg-yellow-400" },
    { name: "Protocol", repo: "relay-service", meta: "Deploys from GitHub · Deployed 3h ago · 4s", tag: "Production", tagColor: "bg-indigo-600 text-white", dotColor: "bg-green-500" },
  ];

  const activity = [
    { name: "Cosetta Dusett", action: "Pushed to ios-app (27d3)  on main", time: "2m" },
    { name: "Pommi Kakani", action: "Pushed to mobile-api (29jd on main)", time: "6m" },
    { name: "Koro Griscotomo", action: "Pushed to ios-app (cdd2d on main)", time: "8m" },
    { name: "Jean-Francois Tippy", action: "Pushed to tailwindui.com (dd3ac on main)", time: "13m" },
    { name: "Oberon Trevino", action: "", time: "" },
  ];

  const navItems = [
    { icon: FolderKanban, label: "Projects" },
    { icon: Rocket, label: "Deployments", active: true },
    { icon: Activity, label: "Activity" },
    { icon: Globe, label: "Domains" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen p-10">
      <div className="max-w-5xl mx-auto">

        {/* Top text section */}
        <p className="text-indigo-400 text-sm font-semibold mb-2">Deploy faster</p>
        <h2 className="text-white text-3xl font-bold mb-8">A better workflow</h2>

        <div className="grid grid-cols-2 gap-10 mb-8">
          <div className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
              risus enim. Mattis mauris semper sed amet vitae sed turpis id.
              Id dolor praesent donec est. Odio penatibus risus viverra
              tellus varius sit neque erat velit. Faucibus commodo massa
              rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
              mauris semper sed amet vitae sed turpis id.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien
              duis odio id et. Id blandit molestie auctor fermentum
              dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
              varius vulputate et ultrices hac adipiscing egestas.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              Erat pellentesque dictumst ligula porttitor risus eget et
              eget. Ultricies tellus felis id dignissim eget. Est augue
              maecenas risus nulla ultrices congue nunc tortor.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien
              duis odio id et. Id blandit molestie auctor fermentum
              dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
              varius vulputate et ultrices hac adipiscing egestas.
              Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-md mb-12 transition-colors">
          Get started
        </button>

        {/* Dashboard mockup */}
        <div className="bg-[#12121f] border border-white/10 rounded-2xl overflow-hidden flex">

          {/* Sidebar */}
          <div className="w-44 border-r border-white/10 p-4 hidden md:block">
            <div className="w-6 h-6 bg-indigo-500 rounded mb-6"></div>

            <p className="text-gray-500 text-xs font-medium mb-2">Navigation</p>
            <div className="space-y-1 mb-6">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
                    item.active
                      ? "bg-white/10 text-white"
                      : "text-gray-400"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs font-medium mb-2">Your teams</p>
            <div className="space-y-1 text-sm text-gray-400">
              <div className="flex items-center gap-1 px-2 py-1">
                <ChevronRight className="w-3 h-3" /> Planetaria
              </div>
              <div className="flex items-center gap-1 px-2 py-1">
                <ChevronRight className="w-3 h-3" /> Protocol
              </div>
              <div className="flex items-center gap-1 px-2 py-1">
                <ChevronRight className="w-3 h-3" /> Tailwind Labs
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-64">
                <Search className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500 text-sm">Search projects...</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Documentation</span>
                <span>Community</span>
                <span>Support</span>
                <button className="bg-indigo-600 text-white text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> New project
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {/* Projects list */}
              <div className="col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white text-sm font-semibold">All projects</p>
                  <p className="text-gray-500 text-xs">Sort by ▾</p>
                </div>
                <div className="divide-y divide-white/5 border-t border-white/5">
                  {projects.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${p.dotColor}`}></span>
                        <div>
                          <p className="text-white text-sm">
                            {p.name} / <span className="text-gray-400">{p.repo}</span>
                          </p>
                          <p className="text-gray-500 text-xs">{p.meta}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${p.tagColor}`}>
                          {p.tag}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white text-sm font-semibold">Activity feed</p>
                  <p className="text-gray-500 text-xs">View all →</p>
                </div>
                <div className="space-y-4 border-t border-white/5 pt-3">
                  {activity.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <img
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        alt={a.name}
                        className="w-6 h-6 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <p className="text-white text-xs font-medium">{a.name}</p>
                        <p className="text-gray-500 text-xs">{a.action}</p>
                      </div>
                      <span className="text-gray-600 text-xs ml-auto">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}