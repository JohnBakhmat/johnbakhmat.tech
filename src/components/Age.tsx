import { useState, useEffect } from "react";

function getAge() {
  return (
    (new Date().getTime() - new Date(2002, 1, 9).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  )
    .toString()
    .slice(0, 12);
}

export const Age = () => {
  const [age, setAge] = useState(getAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge());
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className="font-mono">{age}</span>;
};
