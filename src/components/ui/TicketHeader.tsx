import { useLocation } from "react-router";
import GradientText from "./GradientText";

function TicketHeader() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="mx-auto mb-15 max-w-120 space-y-4 px-4 text-center lg:max-w-180">
      <h1 className="text-[1.75rem] font-extrabold text-neutral-50 md:text-4xl lg:text-5xl lg:leading-12">
        Congrats, <GradientText>{state.fullname}</GradientText>! Your ticket is
        ready.
      </h1>
      <p className="mx-auto max-w-[35ch] lg:max-w-[40ch] lg:text-xl">
        We've emailed your ticket to{" "}
        <span className="text-orange-500">{state.email}</span> and will send
        updates in the run up to the event.
      </p>
    </div>
  );
}

export default TicketHeader;
