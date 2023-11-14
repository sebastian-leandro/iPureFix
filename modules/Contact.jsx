"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (
      form.name.length > 0 &&
      form.phone.length > 0 &&
      form.message.length > 0 &&
      form.email.length > 0
    ) {
      handleSubmit(e);
    } else {
      setError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "iPure",
          from_email: form.email,
          to_email: "ipure.network@gmail.com",
          phone_number: form.phone,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      if (response.status === 200) {
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setError(null);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(true);
        setTimeout(() => setError(null), 3000);
        throw new Error(
          `The email service responded with a non-OK status ${response.text}`
        );
      }
    } catch (e) {
      console.error(`There was a problem: ${e}`);
      setError(true);
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleConfirm}
      ref={formRef}
      className="max-w-[480px] w-full flex flex-col gap-y-8 h-auto p-8 bg-tertiary relative"
    >
      <h3 className="title">Contactanos</h3>
      <div className="w-full flex flex-col gap-y-8 items-center justify-center h-full">
        <div className="w-full flex flex-col paragraph gap-y-1 justify-start">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-2 rounded-md outline-none bg-filter"
          />
        </div>
        <div className="w-full flex flex-col paragraph gap-y-1 justify-start ">
          <label htmlFor="email">Email</label>
          <input
            value={form.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 rounded-md outline-none bg-filter"
          />
        </div>
        <div className="w-full flex paragraph flex-col gap-y-1 justify-start">
          <label htmlFor="phone">Telefono</label>
          <input
            value={form.phone}
            onChange={handleChange}
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefono"
            className="p-2 rounded-md outline-none bg-filter"
          />
        </div>
        <div className="w-full paragraph flex flex-col gap-y-1 justify-start">
          <label htmlFor="subject">Asunto</label>
          <input
            value={form.message}
            onChange={handleChange}
            type="text"
            name="message"
            id="message"
            placeholder="Asunto"
            className="p-2 rounded-md outline-none bg-filter"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-slate-500 px-4 py-2 w-fit mt-8 rounded-lg paragraph"
      >
        {loading ? "Enviando" : "Enviar"}
      </button>
      {error && (
        <div className="w-auto absolute bottom-0 left-0 right-0 p-4 h-auto flex items-center justify-center rounded-md bg-filter shadow-sm shadow-red-600">
          <span className="paragraph text-white">
            {error || "Algo a ido mal reintente mas tarde"}
          </span>
        </div>
      )}
      {success && (
        <div className="w-auto absolute bottom-0 left-0 right-0 p-4 h-auto flex items-center justify-center rounded-md bg-filter shadow-sm shadow-green-400">
          <span className="paragraph text-white text-center">
            Mensaje enviado. En la brevedad nos pondremos en contacto.
          </span>
        </div>
      )}
    </form>
  );
};

export default Contact;
