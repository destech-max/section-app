export default function LeadershipGrid() {
  const team = [
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Floyd Miles",
      role: "Principal Designer",
      bio: "Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Emily Selman",
      role: "VP, User Experience",
      bio: "Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Kristin Watson",
      role: "VP, Human Resources",
      bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit et enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.",
      img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
  ];

  return (
    <div className="bg-[#0b0b17] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto">

        <h2 className="text-white text-3xl font-bold text-center mb-3">
          Meet our leadership
        </h2>
        <p className="text-gray-400 text-sm text-center max-w-lg mx-auto mb-14">
          We're a dynamic group of individuals who are passionate about what
          we do and dedicated to delivering the best results for our clients.
        </p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-12">
          {team.map((member, i) => (
            <div key={i} className="flex gap-5 items-stretch">
              <img
                src={member.img}
                alt={member.name}
                className="w-36 rounded-lg object-cover shrink-0"
              />
              <div>
                <p className="text-white font-semibold text-sm">{member.name}</p>
                <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}