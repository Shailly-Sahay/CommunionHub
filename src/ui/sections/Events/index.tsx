import { useState, useEffect } from "react";
import { EventCard, Form, GlowingButton, HighlightCard } from "../../../ui";
import { events as initialEvents } from "../../../data/events";
import { X } from "lucide-react";

const Events = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Filter by category");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    if (storedEvents.length > 0) {
      setEvents([...initialEvents, ...storedEvents]);
    }
  }, []);

  const categories = [
    "Filter by category",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents =
    selectedCategory === "Filter by category"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="section-pd min-h-screen px-6 py-12 text-white mt-36">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-8">
          <h2 className="text-left header">Upcoming Events</h2>
          {/* Filter Dropdown */}
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <GlowingButton
          text="Add Event"
          glow={false}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 w-full gap-12">
        {filteredEvents.map((event) => (
          <HighlightCard key={event.id}>
            <EventCard
              speaker={event.speaker}
              title={event.title}
              eventType={event.category}
              imageSrc={event.img || "default-image-path.jpg"}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          </HighlightCard>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center section-pd items-center z-50">
          <div className="w-full rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <X width={34} height={34} />
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
