import React, { useCallback, useState } from "react";

const Form = React.memo(
  ({
    onSubmit,
  }: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }) => {
    console.log("Form render");
    return (
      <form onSubmit={onSubmit}>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
);

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Email:", email);
    },
    [email]
  );

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <input
        className="bg-violet-200 p-2 rounded-md placeholder:text-white"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
