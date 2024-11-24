import ProfileCard from "@/components/ui/ProfileCard";

const ProfileGrid = () => {
  const profiles = [
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "John Doe",
      description: "Full Stack Developer",
      githubLink: "https://github.com/johndoe",
      linkedinLink: "https://linkedin.com/in/johndoe",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Jane Smith",
      description: "Frontend Developer",
      githubLink: "https://github.com/janesmith",
      linkedinLink: "https://linkedin.com/in/janesmith",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      description: "Backend Developer",
      githubLink: "https://github.com/alicejohnson",
      linkedinLink: "https://linkedin.com/in/alicejohnson",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Alice Johnson",
      description: "Backend Developer",
      githubLink: "https://github.com/alicejohnson",
      linkedinLink: "https://linkedin.com/in/alicejohnson",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfileGrid;
