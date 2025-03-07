interface GradientTextPops {
  children: string;
}

function GradientText({ children }: GradientTextPops) {
  const words = children.split(" ");

  function capitalize(w: string) {
    const firstChar = w.charAt(0);
    return firstChar.toUpperCase() + w.slice(1);
  }

  return words.map((w, i) => (
    <span
      key={i}
      className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent"
    >
      {capitalize(w)}
      {i !== words.length - 1 && " "}
    </span>
  ));
}

export default GradientText;
