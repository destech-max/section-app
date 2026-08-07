import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSections() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Freelancer",
      description: "The essentials to provide your best work for clients.",
      price: 19,
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      highlight: false,
    },
    {
      name: "Startup",
      description: "A plan that scales with your rapidly growing business.",
      price: 29,
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "Dedicated support and infrastructure for your company.",
      price: 59,
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-indigo-400 text-sm font-semibold mb-2">Pricing</p>
        <h2 className="text-white text-4xl font-bold mb-4">
          Pricing that grows with you
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center bg-white/5 rounded-full p-1 mb-12">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billing === "monthly"
                ? "bg-indigo-600 text-white"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("annually")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billing === "annually"
                ? "bg-indigo-600 text-white"
                : "text-gray-400"
            }`}
          >
            Annually
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-3 gap-6 text-left">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 relative ${
                plan.highlight
                  ? "bg-[#12121f] border-2 border-indigo-500"
                  : "bg-[#12121f] border border-white/10"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-6 right-6 bg-indigo-500/20 text-indigo-400 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Most popular
                </span>
              )}

              <h3
                className={`font-semibold text-sm mb-2 ${
                  plan.highlight ? "text-indigo-400" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5 pr-4">
                {plan.description}
              </p>

              <div className="mb-5">
                <span className="text-white text-3xl font-bold">
                  ${billing === "monthly" ? plan.price : Math.round(plan.price * 10)}
                </span>
                <span className="text-gray-400 text-sm">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              <button
                className={`w-full text-sm font-semibold py-2 rounded-md mb-6 transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Buy plan
              </button>

              <ul className="space-y-2.5">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-400 text-xs">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    {feature}
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