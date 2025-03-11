import { useState } from "react";
import { EventCard, HighlightCard } from "../../../ui";
import { events } from "../../../data/events";

const Events = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Filter by category");

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
        <h2 className="text-left">Upcoming Events</h2>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 w-full gap-12">
        {filteredEvents.map((event) => (
          <HighlightCard key={event.id}>
            <EventCard
              speaker={event.speaker}
              title={event.title}
              eventType={event.category}
              imageSrc={event.img || "default-image-path.jpg"}
              description={event.description}
            />
          </HighlightCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
