import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  description: string;
  githubLink?: string;
  linkedinLink?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  description,
  githubLink,
  linkedinLink,
}) => {
  return (
    <div className="bg-gray-800 h-[32rem] sm:h-[36rem] w-[20rem] border border-gray-700 rounded-lg flex flex-col items-center justify-between p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="border-2 gap-4 border-gray-600 flex flex-col items-center justify-center w-full h-full rounded-lg bg-gray-700 p-4">
        <img
          src={imageUrl}
          alt={name}
          className="h-[15rem] w-[15rem] rounded-full border-4 border-white mb-6 object-cover"
        />

        <p className="text-2xl font-semibold text-white mb-4">{name}</p>

        <p className="text-lg text-gray-300 text-center">{description}</p>
      </div>

      <div className="flex justify-center w-full space-x-8 mt-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-3xl transition-all duration-200"
          >
            <FaGithub />
          </a>
        )}
        {linkedinLink && (
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-3xl transition-all duration-200"
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
