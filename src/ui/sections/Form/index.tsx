import { useState } from "react";
import { useForm } from "react-hook-form";
import { GlowingButton } from "../../";
import HighlightCard from "../../components/HighlightCard";

interface EventFormData {
  speaker: string;
  email: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  img?: string;
}

interface FormProps {
  onSubmit: (data: EventFormData) => void; // Function to handle submission
  onClose: () => void; // Function to close the modal
}

const Form: React.FC<FormProps> = ({ onSubmit, onClose }) => {
  const { register, handleSubmit, reset } = useForm<EventFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    "Religious",
    "Workshops",
    "Wellness",
    "Social",
    "Charity",
  ];

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
  const handleFormSubmit = (data: EventFormData) => {
    onSubmit({ ...data, img: imagePreview || "" }); // Send data up
    reset();
    setImagePreview(null);
    onClose(); // Close modal
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
          <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
            <div className="flex flex-col gap-6 mb-6">
              <input
                {...register("speaker")}
                placeholder="Speaker Name"
                required
                className="w-full p-2 border rounded-md placeholder:font-normal"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-2 border rounded-md placeholder:font-normal"
              />
              <input
                {...register("title")}
                placeholder="Event Title"
                required
                className="w-full p-2 border rounded-md placeholder:font-normal"
              />

              {/* Category Dropdown */}
              <select
                {...register("category")}
                required
                className="w-full p-2 border rounded-md font-normal text-white"
              >
                <option className="text-black" value="">
                  Select Category
                </option>
                {categories.map((category) => (
                  <option
                    className="text-black font-[Poppins]"
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>

              <input
                {...register("date")}
                type="date"
                required
                className="w-full p-2 border rounded-md placeholder:font-normal"
              />
              <input
                {...register("location")}
                placeholder="Event Location"
                required
                className="w-full p-2 border rounded-md font-normal"
              />
              <textarea
                {...register("description")}
                placeholder="Event Description"
                required
                className="w-full p-2 border rounded-md resize-none placeholder:font-normal"
              />

              {/* Image Upload */}
              <div className="flex flex-col gap-2">
                <label className="font-normal">Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded-md placeholder:font-normal"
                />
              </div>

              {/* Image Preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-cover mt-4 rounded-md font-normal"
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
