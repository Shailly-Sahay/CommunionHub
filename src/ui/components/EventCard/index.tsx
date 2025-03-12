import { Calendar, Pin } from "lucide-react";
import Tag from "../Tag";
import Button from "../GlowingButton";

interface EventCardProps {
  speaker: string;
  title: string;
  eventType: string;
  imageSrc: string;
  description: string;
  date: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  speaker,
  title,
  eventType,
  imageSrc,
  description,
  date,
  location,
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
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Speaker Name */}
        <p className="text-teal-200 font-semibold small-font">
          Speaker: {speaker}
        </p>
        {/* Title */}
        {/* date: "2025-03-31", location: "Library Hall", */}
        <h3 className=" font-bold header mt-2 mb-4 leading-tight">{title}</h3>

        <p className="body-font font-normal mb-8">{description}</p>
        {/* Button */}
        <div className="flex justify-between items-center">
          <Button text="Register" glow={false} />
          <div className="flex flex-col gap-4">
            <span className="flex gap-4 small-font text-gray-400 font-normal ">
              <Calendar width={16} height={16} />
              {date}
            </span>
            <span className="flex gap-4 small-font text-gray-400 font-normal ">
              <Pin width={16} height={16} />
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
