import { useState } from "react";

type Props = {
  onSave: (customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }) => void;
};

export default function CustomerForm({ onSave }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave({
      firstName,
      lastName,
      phone,
      email,
    });

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="text-xl font-bold text-yellow-500">
        Add Customer
      </h2>

      <input
        className="w-full rounded-lg bg-zinc-800 p-3"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        className="w-full rounded-lg bg-zinc-800 p-3"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        className="w-full rounded-lg bg-zinc-800 p-3"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="w-full rounded-lg bg-zinc-800 p-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black"
      >
        Save Customer
      </button>
    </form>
  );
}