import React from "react";
import CountUp from "react-countup";

export default function CommonCount({
  end,
  title,
  className,
  scrollSpyDelay,
  separator
}) {
  return (
    <div className="number">
      <CountUp
        duration={5}
        className={className}
        end={end}
        scrollSpyDelay={scrollSpyDelay}
        separator={separator}
      />
    </div>
  );
}
