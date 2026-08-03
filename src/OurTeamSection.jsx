

export default function OurTeamSection() {
  const team = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Whitney Francis",
      role: "Copywriter",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Floyd Miles",
      role: "Principal Designer",
      img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&q=80",
    },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto">

        <h2 className="text-white text-2xl font-bold mb-4">Our team</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
          We're a dynamic group of individuals who are passionate about what
          we do and dedicated to delivering the best results for our clients.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-white font-semibold text-sm">{member.name}</p>
              <p className="text-gray-400 text-sm mb-2">{member.role}</p>
              <div className="flex items-center gap-3">
               
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}