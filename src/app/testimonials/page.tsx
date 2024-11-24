import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonial() {
  return (
    <div className="grid grid-row items-center justify-center bg-black h-full w-full">
      <AnimatedTestimonials
        testimonials={[
          {
            quote:
              "War Room is an amazing community that helps you grow by connecting with like-minded people, solving cool challenges, and working on fun projects. It’s a great place to learn, share ideas, and improve your skills. Plus, the support and feedback from others really keep you motivated and improving!",
            name: "Priya Sharma",
            designation: "Student, Bennett University",
            src: "/sonOfMan.jpeg",
            linkedin:"https://www.linkedin.com/help/linkedin/answer/a522735",
          },
          {
            quote:
            "War Room is a fantastic coding community with supportive, knowledgeable members eager to help. It offers resources for various domains, making it ideal for beginners. Beyond coding, it’s a great place to relax, make friends, play games, and connect with like-minded people.",
              name: "Karandeep Singh Talwar",
            designation: "Student, GGSIPU",
            src: "/art.png",
            linkedin:"https://www.linkedin.com/help/linkedin/answer/a522735",
          },
          {
            quote:
            "The War-Room community thrives on the spirit of adaptation, fostering growth through competition and engagement. With top-tier coding resources and updates from hackathons like Devfolio and Microsoft Imagine Cup, it has significantly boosted my academic journey. A must-join for anyone in the AI-driven era!",
            name: "Arush Mishra",
            designation: "Student, GGSIPU",
            src: "/art.png",
            linkedin:"https://www.linkedin.com/help/linkedin/answer/a522735",
          },
        ]}
      />
    </div>
  );
}
