import FormHeader from "./ui/FormHeader";
import FormButton from "./ui/FormButton";
import FormInput from "./ui/FormInput";
import FormLabel from "./ui/FormLabel";

function Form() {
  return (
    <div className="container mx-auto space-y-8 px-4">
      <FormHeader />

      <form className="space-y-6 pb-30">
        {/* <!-- Form starts --> */}
        <div>
          <FormLabel htmlFor="fileupload" labelText="Upload Avatar" />
          <input type="file" name="fileupload" />
        </div>

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

        {/* Upload Avatar Drag and drop or click to upload Upload your photo (JPG or
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
