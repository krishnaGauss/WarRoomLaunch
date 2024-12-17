'use client'
import ProfileCard from "@/components/ui/ProfileCard";

const Team = () => {
  const profiles = [
    {
      imageUrl: "/Krishna.jpg",
      name: "Krishna Goswami",
      description: "Full Stack Developer",
      githubLink: "https://github.com/krishnaGauss",
      linkedinLink: "https://www.linkedin.com/in/krishna-goswami-322664256/",
    },
    {
      imageUrl: "/Harsh.jpg",
      name: "Harshvardhan Singh",
      description: "Lord",
      githubLink: "https://github.com/harshvardhan119",
      linkedinLink: "https://www.linkedin.com/in/harsh-vardhan-singh-083721257",
    },
    {
      imageUrl: "/Digvijay.png",
      name: "Digvijay Dutt",
      description: "Machine Learning Engineer",
      githubLink: "https://github.com/DigvijayDutt",
      linkedinLink: "https://www.linkedin.com/in/digvijay-dutt-91b2971a9/",
    },
    {
      imageUrl: "/Amit.png",
      name: "Amit Singh",
      description: "Full Stack Developer",
      githubLink: "https://github.com/Senpai-489",
      linkedinLink: "https://www.linkedin.com/in/amitsingh489/",
    },
  ];

  return (<div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl font-mono font-semibold">Our Team</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 m-16">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
      </div>
    </div>
  );
};

export default Team;
