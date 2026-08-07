import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Hobby",
      description: "The essentials to provide your best work for clients.",
      price: 19,
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
      highlight: false,
    },
    {
      name: "Freelancer",
      description: "The essentials to provide your best work for clients.",
      price: 29,
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
      price: 59,
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
      price: 99,
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

  const logos = [
    "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-indigo-600 text-sm font-semibold mb-2">Pricing</p>
        <h2 className="text-gray-900 text-4xl font-bold mb-4">
          Pricing that grows with you
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-10">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billing === "monthly"
                ? "bg-indigo-600 text-white"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("annually")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              billing === "annually"
                ? "bg-indigo-600 text-white"
                : "text-gray-500"
            }`}
          >
            Annually
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-4 gap-5 text-left">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 relative ${
                plan.highlight
                  ? "border-indigo-600 border-2"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-6 right-6 bg-indigo-100 text-indigo-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="text-gray-900 font-semibold text-sm mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-5 pr-4">
                {plan.description}
              </p>

              <div className="mb-5">
                <span className="text-gray-900 text-3xl font-bold">
                  ${billing === "monthly" ? plan.price : Math.round(plan.price * 10)}
                </span>
                <span className="text-gray-500 text-sm">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              <button
                className={`w-full text-sm font-semibold py-2 rounded-md mb-6 transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                }`}
              >
                Buy plan
              </button>

              <ul className="space-y-2.5">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-600 text-xs">
                    <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-10 mt-16 flex-wrap">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Customer logo"
              className="h-8 object-contain grayscale opacity-70"
            />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-gray-50 rounded-xl mt-8 py-4 text-sm text-gray-600">
          Transistor saves up to $40,000 per year, per employee by working with us.{" "}
          <a href="#" className="text-indigo-600 font-medium">
            See our case study →
          </a>
        </div>

      </div>
    </div>
  );
}