import FormHeader from "./ui/FormHeader";
import FormButton from "./ui/FormButton";
import FormInput from "./ui/FormInput";
import FileUpload from "./FileUpload";

function Form() {
  return (
    <div className="container mx-auto space-y-8 px-4">
      <FormHeader />

      <form className="space-y-6 pb-30">
        {/* <!-- Form starts --> */}

        <FileUpload />
        <FormInput
          type="text"
          name="fullName"
          id="fullName"
          labelText="Full Name"
        />

        <FormInput
          type="email"
          name="email"
          id="email"
          labelText="Email Address"
        />

        <FormInput
          type="text"
          name="username"
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
  );
}

export default Form;
