import { useState } from "react";
import { useForm } from "react-hook-form";
import { GlowingButton } from "../../";
import HighlightCard from "../../components/HighlightCard";

interface EventFormData {
  name: string;
  email: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image?: string; // Store Base64 image string
}

const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<EventFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Convert Image to Base64
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
    }
  };

  // Handle Form Submission
  const onSubmit = (data: EventFormData) => {
    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");

    const eventWithImage = {
      ...data,
      image: imagePreview || "", // Store the Base64 image string
    };

    localStorage.setItem(
      "events",
      JSON.stringify([...existingEvents, eventWithImage])
    );
    reset();
    setImagePreview(null);
    alert("Event added successfully!");
  };

  return (
    <HighlightCard>
      <div className="flex flex-col md:flex-row z-50 gap-28 md:gap-48 py-20 px-16">
        <div className="w-full md:w-[40%] flex flex-col justify-center">
          <h2 className="relative z-[10] mb-8 header">Add an Event</h2>
          <p className="relative z-[10] font-normal body-font">
            Submit your event details to make them visible to others.
          </p>
        </div>
        <div className="w-full md:w-1/2 z-50">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="flex flex-col gap-6 mb-6">
              <input
                {...register("name")}
                placeholder="Your Name"
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                {...register("title")}
                placeholder="Event Title"
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                {...register("category")}
                placeholder="Event Category"
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                {...register("date")}
                type="date"
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                {...register("location")}
                placeholder="Event Location"
                required
                className="w-full p-2 border rounded-md"
              />
              <textarea
                {...register("description")}
                placeholder="Event Description"
                required
                className="w-full p-2 border rounded-md resize-none"
              />

              {/* Image Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-md"
              />

              {/* Image Preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-cover mt-4 rounded-md"
                />
              )}
            </div>

            <div className="flex justify-end">
              <GlowingButton text="Submit Event" />
            </div>
          </form>
        </div>
      </div>
    </HighlightCard>
  );
};

export default Form;
