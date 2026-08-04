import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
    },
    {
      question: "What do you call someone with no body and no nose?",
      answer:
        "Nobody knows. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus excercitationem sapiente tempore labore voluptatem.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer:
        "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsam, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
    },
    {
      question: "Why did the invisible man turn down the job offer?",
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut consequatur, perferendis sed unde rerum deserunt eius.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full mx-auto">

        <h2 className="text-white text-3xl font-bold mb-10">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold text-sm">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {openIndex === i && (
                <p className="text-gray-400 text-sm leading-relaxed mt-3 pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}