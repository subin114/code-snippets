function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    startTransition(() => {
      setInput(e.target.value);
    });
  };

  return (
    <div>
      <h1>Input: {input}</h1>
      <input type="text" onChange={handleInput} />
      {isPending && <h2>Transition Pending</h2>}
    </div>
  );
}

export default App;
