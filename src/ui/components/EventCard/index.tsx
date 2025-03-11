import { ArrowRight } from "lucide-react";
import Tag from "../Tag";

interface EventCardProps {
  speaker: string;
  title: string;
  eventType: string;
  imageSrc: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  speaker,
  title,
  eventType,
  imageSrc,
  description,
}) => {
  return (
    <div className="w-full h-full bg-gray-900 text-white rounded-lg px-8 py-16 shadow-lg relative overflow-hidden">
      {/* Background Image with Gradient */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>
      <Tag text={eventType} customClass="justify-start" />

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Speaker Name */}
        <p className="text-teal-200 font-semibold small-font">
          Speaker: {speaker}
        </p>

        {/* Title */}

        <h2 className=" font-bold header mt-2 mb-4 leading-tight">{title}</h2>

        {/* <p className="text-gray-300 font-medium mt-3">{eventType}</p> */}
        <p className="body-font font-normal mb-8">{description}</p>

        {/* Button */}
        <button className="mt-6 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition">
          Register
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
