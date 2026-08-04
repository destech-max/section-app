export default function FaqSection() {
  const faqs = [
    {
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What do you call someone with no body and no nose?",
      answer:
        "Nobody knows. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-3 gap-16">

        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Can't find the answer you're looking for? Reach out to our{" "}
            <a href="#" className="text-indigo-400 underline">
              customer support
            </a>{" "}
            team.
          </p>
        </div>

        <div className="col-span-2 space-y-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold text-sm mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}