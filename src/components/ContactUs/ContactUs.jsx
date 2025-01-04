import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Ensure you have SweetAlert2 installed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_livvrzt", // replace with your service ID from EmailJS
        "template_bt29fva", // replace with your template ID from EmailJS
        e.target,
        "ELAnnJNt5Ls682KlA" // replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);

          // Reset the form state after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Show SweetAlert on successful form submission
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          // Optionally, show an error alert if needed
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send message",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <section id="ContactUs" className="text-white py-10 px-5 bg-[#1c1f23]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Address Section */}
        <div className="flex flex-col justify-center bg-gray-800 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">My Address</h3>
          <p className="text-gray-400">Chandpur, Bangladesh</p>
          <p className="text-gray-400 mt-2">
            Currently residing in Saudi Arabia
          </p>
          <p className="text-gray-400 mt-2">Phone: +966-533597085</p>
          <p className="text-gray-400 mt-2">Email: masudrana19981002@gmail.com</p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject of your message"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="hover:bg-white text-[#1c1f23] bg-gray-300 hover:text-[#1c1f23] py-2 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
