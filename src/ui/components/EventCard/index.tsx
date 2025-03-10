import { ArrowRight } from "lucide-react";

interface EventCardProps {
  speaker: string;
  title: string;
  eventType: string;
  price: string;
  imageSrc: string;
  buttonText: string;
}

const EventCard: React.FC<EventCardProps> = ({
  speaker,
  title,
  eventType,
  price,
  imageSrc,
  buttonText,
}) => {
  return (
    <div className="w-full max-w-sm bg-gray-900 text-white rounded-lg p-6 shadow-lg relative overflow-hidden">
      {/* Speaker Name */}
      <p className="text-teal-400 font-semibold">{speaker}</p>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-2 leading-tight">{title}</h2>

      {/* Event Type */}
      <p className="text-gray-300 font-medium mt-3">{eventType}</p>

      {/* Price */}
      <p className="text-lg font-semibold mt-1">{price}</p>

      {/* Image */}
      <div className="absolute bottom-0 right-0 w-36 h-36 overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={speaker}
          className="object-cover w-full h-full grayscale"
        />
      </div>

      {/* Button */}
      <button className="mt-6 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition">
        {buttonText}
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default EventCard;
