import Button from "../../components/Button";
import HighlightCard from "../../components/HighlightCard";

interface LabelProps {
  forTag: string;
  label: string;
}

const Label: React.FC<LabelProps> = ({ forTag, label }) => {
  return (
    <label
      htmlFor={forTag}
      className="text-white body-font glowing-text z-10 font-normal"
    >
      {label}
    </label>
  );
};

interface InputProps {
  id: string;
  placeholder: string;
  inputType: "input" | "textarea";
  type?: "text" | "email" | "password";
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  inputType,
  type = "text",
}) => {
  return inputType === "textarea" ? (
    <textarea
      id={id}
      placeholder={placeholder}
      required
      className="w-full p-2 border rounded-md resize-none z-10 font-normal"
    />
  ) : (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required
      className="w-full p-2 border rounded-md z-10 font-normal focus:outline-yellow-500"
    />
  );
};

interface FormFieldProps {
  formField: {
    id: number;
    for: string;
    label: string;
    placeholder: string;
    inputType: "input" | "textarea";
    type?: "text" | "email" | "password";
  };
}

const FormField: React.FC<FormFieldProps> = ({ formField }) => {
  return (
    <div className="flex flex-col mb-6 gap-4">
      <Label forTag={formField.for} label={formField.label} />
      <Input
        inputType={formField.inputType}
        placeholder={formField.placeholder}
        id={formField.for}
      />
    </div>
  );
};

const Form: React.FC = () => {
  const formFields: {
    id: number;
    for: string;
    label: string;
    placeholder: string;
    inputType: "input" | "textarea";
    type?: "text" | "email" | "password";
  }[] = [
    {
      id: 1,
      for: "name",
      label: "Name",
      placeholder: "What's your cool name?",
      type: "text",
      inputType: "input",
    },
    {
      id: 2,
      for: "email",
      label: "Email",
      placeholder: "What's your cool email?",
      type: "email",
      inputType: "input",
    },
    {
      id: 3,
      for: "message",
      label: "Message",
      placeholder: "Share your thoughts...",
      type: "text",
      inputType: "textarea",
    },
  ];

  return (
    <section className="section-pd relative bg-black h-[100vh] flex items-center">
      <div className="hehe"></div>
      <HighlightCard>
        <div className="flex flex-col md:flex-row gap-48 section-pd-sm">
          <div className="w-[40%]">
            <h2 className="relative glowing-text z-[10] mb-8">Add an event</h2>

            <p className="relative z-[10] font-normal body-font">
              Get your space suit ready for a fun adventure! We are about to
              blast off with some crazy and exciting ideas for a dream website.
              Buckle up for the ride!
            </p>
          </div>
          <div className="w-1/2">
            <form action="#" className="form">
              <div className="form__wrapper">
                <div className="form__container">
                  {formFields.map((formField) => (
                    <FormField key={formField.id} formField={formField} />
                  ))}

                  <div className="form__group">
                    <a href="mailto:shaillysahayy@gmail.com">
                      <i className="fa-solid fa-envelope"></i>
                      shaillysahayy@gmail.com
                    </a>
                    <Button
                      text="I WILL TALK"
                      shape="round"
                      customClass="z-10"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </HighlightCard>
    </section>
  );
};

export default Form;
