'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonial() {
  return (
    <div className="grid grid-row items-center justify-center bg-transparent h-full w-full">
      <h1 className="text-white text-6xl mx-auto m-12 font-mono font-semibold">Testimonials</h1>

      <AnimatedTestimonials
        testimonials={[
          {
            quote:
              "War Room is an amazing community that helps you grow by connecting with like-minded people, solving cool challenges, and working on fun projects. It’s a great place to learn, share ideas, and improve your skills. Plus, the support and feedback from others really keep you motivated and improving!",
            name: "Priya Sharma",
            designation: "Student, Bennett University",
            src: "/Priya.jpg",
            linkedin:"https://www.linkedin.com/in/priyasharma00/",
          },
          {
            quote:
            "War Room is a fantastic coding community with supportive, knowledgeable members eager to help. It offers resources for various domains, making it ideal for beginners. Beyond coding, it’s a great place to relax, make friends, play games, and connect with like-minded people.",
              name: "Karandeep Singh Talwar",
            designation: "Student, GGSIPU",
            src: "/KD.jpg",
            linkedin:"https://www.linkedin.com/in/karandeep-singh-talwar/",
          },
          {
            quote:
              "War Room is an incredible community where you can grow by connecting with like-minded individuals, tackling exciting challenges, and collaborating on engaging projects. It’s the perfect place to learn, exchange ideas, and sharpen your skills. The support and feedback from others keep you inspired and constantly improving!",
            name: "Garima Chaudhary",
            designation: "Student, JSSATEN",
            src: "/garima.jpg",
            linkedin:"https://www.linkedin.com/in/garima-chaudhary-9a7137261/",
          },
          {
            quote:
            "The War-Room community thrives on the spirit of adaptation, fostering growth through competition and engagement. With top-tier coding resources and updates from hackathons like Devfolio and Microsoft Imagine Cup, it has significantly boosted my academic journey. A must-join for anyone in the AI-driven era!",
            name: "Venu Mishra",
            designation: "Student, GGSIPU",
            src: "/Venu.jpg",
            linkedin:"https://www.linkedin.com/help/linkedin/answer/a522735",
          },
        ]}
      />
    </div>
  );
}
