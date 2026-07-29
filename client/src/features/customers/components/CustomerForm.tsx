import { useState } from "react";

type Props = {
  onSave: (customer: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    company: string;
    address: string;
  }) => void;
};

export default function CustomerForm({ onSave }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!firstName || !lastName || !phone) {
      alert("Please complete all required fields.");
      return;
    }

    onSave({
      firstName,
      lastName,
      phone,
      email,
      company,
      address,
    });

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setAddress("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl bg-zinc-900 p-6"
    >
      <h2 className="text-2xl font-bold text-yellow-500">
        Add Customer
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="First Name *"
          className="rounded-lg bg-zinc-800 p-3 text-white"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Last Name *"
          className="rounded-lg bg-zinc-800 p-3 text-white"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        placeholder="Phone Number *"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Email Address"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Company"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <textarea
        placeholder="Address"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white"
        rows={3}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
      >
        Save Customer
      </button>
    </form>
  );
}