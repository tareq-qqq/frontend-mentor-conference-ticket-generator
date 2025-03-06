import FormHeader from "./ui/FormHeader";
import FormButton from "./ui/FormButton";
import FormInput from "./ui/FormInput";
import FileUpload from "./FileUpload";
import { useForm } from "react-hook-form";
import { Inputs } from "../interfaces/FormValues";

function Form() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <>
      <FormHeader />
      <div className="mx-auto max-w-120 space-y-8 px-4">
        <form
          className="space-y-6 pb-30 md:pb-40"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <!-- Form starts --> */}

          <FileUpload
            setError={setError}
            setValue={setValue}
            error={errors.avatar}
            name="avatar"
            clearErrors={clearErrors}
            register={register}
          />
          <FormInput
            type="text"
            id="fullName"
            labelText="Full Name"
            {...register("fullName")}
          />

          <FormInput
            type="email"
            id="email"
            labelText="Email Address"
            {...register("email")}
          />

          <FormInput
            {...register("username")}
            type="text"
            id="username"
            labelText="GitHub Username"
          />

          <FormButton>Generate My Ticket</FormButton>

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
