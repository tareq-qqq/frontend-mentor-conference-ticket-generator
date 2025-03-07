import FormHeader from "./ui/FormHeader";
import FormButton from "./ui/FormButton";
import FormInput from "./ui/FormInput";
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import { Inputs } from "../interfaces/FormValues";
import { useNavigate } from "react-router";
import { useState } from "react";
// interface FormProps {
//   setSubmitted: Dispatch<SetStateAction<boolean>>;
// }

function Form() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    console.log("Submitted");
    console.log(data);
    const { fullname, email, username } = data;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/ticket", {
      state: {
        fullname,
        email,
        username,
        preview,
      },
    });
  }

  return (
    <>
      <FormHeader />
      <div className="mx-auto max-w-120 space-y-8 px-4">
        <form
          className="space-y-6 pb-30 md:pb-40"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* <!-- Form starts --> */}

          <FileUpload
            preview={preview}
            setPreview={setPreview}
            setError={setError}
            setValue={setValue}
            error={errors.avatar}
            clearErrors={clearErrors}
          />
          <FormInput
            type="text"
            id="fullName"
            labelText="Full Name"
            {...register("fullname", {
              required: "Please enter your name.",
              maxLength: {
                value: 255,
                message: "You can't exceed 255 characters",
              },
            })}
            error={errors.fullname}
          />

          <FormInput
            type="email"
            id="email"
            labelText="Email Address"
            {...register("email", {
              required: "Please provide your email.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
                message: "Please enter a valid email address.",
              },
            })}
            error={errors.email}
          />

          <FormInput
            {...register("username", {
              required: "Please provide your GitHub username.",
            })}
            error={errors.username}
            type="text"
            id="username"
            labelText="GitHub Username"
          />

          <FormButton
            isSubmitting={isSubmitting}
            onClick={() => {
              console.log(errors);
            }}
          >
            Generate My Ticket
          </FormButton>

          {/* Upload your photo (JPG or
        PNG, max size: 500KB). Full Name Email Address example@email.com GitHub
        Username @yourusername Generate My Ticket */}
          {/* <!-- Form ends --> */}
          {/* <!-- Generated tickets starts --> */}
          {/* Congrats, */}
          {/* <!-- Full Name --> ! Your ticket is ready. We've emailed your
        ticket to
        {/* <!-- Email Address --> */}
          {/* and will send updates in the run up to the event. Coding Conf Jan 31,
        2025 / Austin, TX */}
          {/* <!-- Generated tickets ends --> */}
        </form>
      </div>
    </>
  );
}

export default Form;
