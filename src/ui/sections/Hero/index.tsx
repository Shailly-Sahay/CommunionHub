import { FaArrowRight } from "react-icons/fa";
import { GlowingButton } from "../..";
import Tag from "../../components/Tag";

const Hero = () => {
  return (
    <section className="section-pd relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full md:w-[60%]">
        <Tag text="Get together" />

        <h1 className="mb-4">Connecting People Across Faiths & Interests</h1>

        <p className="large-font text-center text-gray-400 max-w-7xl leading-13 mb-16">
          Find your community, share your beliefs, and create moments that
          matter. CommunionHub brings people together through events that
          inspire, unite, and uplift.
        </p>

        <GlowingButton text="     Start free trial">
          <FaArrowRight className="transition-transform group-hover:rotate-45 group-active:rotate-12" />
        </GlowingButton>
      </div>
    </section>
  );
};

export default Hero;
