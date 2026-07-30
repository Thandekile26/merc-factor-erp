import { useEffect, useState } from "react";
import type { Customer } from "../types";

type CustomerFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  address: string;
};

type Props = {
  onSave: (customer: CustomerFormData) => void;
  initialData?: Customer;
  onCancel?: () => void;
};

export default function CustomerForm({
  onSave,
  initialData,
  onCancel,
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.firstName);
      setLastName(initialData.lastName);
      setPhone(initialData.phone);
      setEmail(initialData.email);
      setCompany(initialData.company ?? "");
      setAddress(initialData.address ?? "");
    }
  }, [initialData]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
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

    if (!initialData) {
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setCompany("");
      setAddress("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl bg-zinc-900 p-6"
    >
      <h2 className="text-2xl font-bold text-yellow-500">
        {initialData ? "Edit Customer" : "Add Customer"}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          placeholder="First Name *"
          className="rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Last Name *"
          className="rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        placeholder="Phone Number *"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Email Address"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Company"
        className="w-full rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <textarea
        placeholder="Address"
        rows={3}
        className="w-full rounded-lg bg-zinc-800 p-3 text-white outline-none focus:ring-2 focus:ring-yellow-500"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
        >
          {initialData ? "Update Customer" : "Save Customer"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-zinc-700 px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}