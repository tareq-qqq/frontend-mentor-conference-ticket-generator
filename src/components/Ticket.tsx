import { useLocation } from "react-router";
import TicketHeader from "./ui/TicketHeader";
import { cn } from "../helpers/utils";
import styles from "./Ticket.module.css";

function Ticket() {
  const { state } = useLocation();
  console.log(state);

  function generateId() {
    const idNum = String(Math.round(Math.random() * 10000)).padStart(5, "0");
    return "#" + idNum;
  }

  return (
    <div className="pb-40">
      <TicketHeader />
      <div className="relative mx-auto max-w-120 px-4 lg:max-w-132">
        <div className="absolute inset-0 z-0 flex flex-col justify-between px-8 py-4">
          {/* top */}
          <div className="flex items-start gap-4">
            <img
              src="/assets/images/logo-mark.svg"
              alt=""
              className="w-8 pt-2 lg:pt-4"
            />
            <div>
              <h2 className="text-[1.5rem] leading-8 font-extrabold text-neutral-50 md:text-3xl lg:leading-12">
                Coding Conf
              </h2>
              <small className="font-medium text-neutral-300 md:text-lg">
                <time dateTime="2025-01-31">Jan 31, 2025</time> /{" "}
                <address className="inline not-italic">Austin, TX</address>
              </small>
            </div>
          </div>

          <div className="flex gap-4">
            {state.preview && (
              <img
                className="aspect-square h-12 w-12 rounded-md object-cover object-center md:h-16 md:w-16"
                src={state.preview}
                alt=""
              />
            )}
            <div className="flex flex-col">
              <p className="text-xl leading-[1] font-bold text-neutral-50 md:text-2xl lg:text-3xl">
                {state.fullname}
              </p>
              <div className="flex gap-1">
                <img
                  src="/assets/images/icon-github.svg"
                  className="w-5"
                  alt=""
                />
                <small className="font-medium text-neutral-300 md:text-lg">
                  @{state.username}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* id */}
        <p
          className={cn(
            "absolute top-1/2 right-[clamp(1rem,5vw,2rem)] origin-bottom-left -translate-y-1/2 py-4 text-[clamp(1.25rem,5vw,1.75rem)] text-neutral-500",
            styles.id,
          )}
        >
          {generateId()}
        </p>

        <img className="" src="/assets/images/pattern-ticket.svg" alt="" />
      </div>
    </div>
  );
}

export default Ticket;
