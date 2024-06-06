import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Enter") submit();
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return <></>;
}

export default App;
