// Third party imports
import { useEffect, useRef, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value, options = {}) {
  const { format = "number", maximumFractionDigits = 1 } = options;

  if (format === "compact") {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits,
    }).format(Math.round(value));
  }

  if (format === "compactCurrency") {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      style: "currency",
      currency: "USD",
      maximumFractionDigits,
    }).format(value);
  }

  if (format === "percent") {
    return `${value.toFixed(maximumFractionDigits)}`;
  }

  // default number
  return new Intl.NumberFormat("en", {
    maximumFractionDigits,
  }).format(value);
}

const CountUp = ({
  end = 0,
  duration = 1200,
  format = "number",
  decimals = 1,
  play = false,
  suffix = "",
}) => {
  const [display, setDisplay] = useState(() =>
    formatValue(0, { format, maximumFractionDigits: decimals }),
  );
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!play) return undefined;

    const start = performance.now();
    startRef.current = start;

    const from = 0;
    const to = end;

    function step(now) {
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = from + (to - from) * eased;

      setDisplay(
        formatValue(current, { format, maximumFractionDigits: decimals }),
      );

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [play, end, duration, format, decimals]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
