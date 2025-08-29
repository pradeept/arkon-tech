import { Send } from "lucide-react";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormStatus("loading");

    try {
      // Simulate API call - Replace this with actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For actual implementation, use EmailJS:
      /*
      await emailjs.send(
        'your_service_id',
        'your_template_id', 
        {
          to_email: 'abc@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        'your_public_key'
      );
      */

      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      console.error("Email sending failed:", error);
    }
  };

  const services = [
    "Custom PC Build",
    "Laptop Repair",
    "Software Installation",
    "Hardware Repair",
    "UPS Setup",
    "Network Configuration",
    "Data Recovery",
    "System Optimization",
    "Other",
  ];
  return (
    <div>
      <div className='bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10'>
        <h3 className='text-2xl font-bold text-white mb-6'>
          Send us a Message
        </h3>

        {formStatus === "success" && (
          <div className='mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3'>
            <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
            <p className='text-green-300'>
              Message sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}

        {formStatus === "error" && (
          <div className='mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3'>
            <AlertCircle className='w-5 h-5 text-red-400 flex-shrink-0' />
            <p className='text-red-300'>
              Failed to send message. Please try again or contact us directly.
            </p>
          </div>
        )}

        <div className='space-y-6'>
          {/* Name */}
          <div>
            <label htmlFor='name' className='block text-white font-medium mb-2'>
              Full Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500/50"
                  : "border-white/20 focus:ring-white/50 focus:border-white/40"
              }`}
              placeholder='Enter your full name'
            />
            {errors.name && (
              <p className='text-red-400 text-sm mt-1'>{errors.name}</p>
            )}
          </div>

          {/* Email & Phone */}
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-white font-medium mb-2'
              >
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500/50"
                    : "border-white/20 focus:ring-white/50 focus:border-white/40"
                }`}
                placeholder='your@email.com'
              />
              {errors.email && (
                <p className='text-red-400 text-sm mt-1'>{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-white font-medium mb-2'
              >
                Phone Number *
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500/50"
                    : "border-white/20 focus:ring-white/50 focus:border-white/40"
                }`}
                placeholder='+91 98765 43210'
              />
              {errors.phone && (
                <p className='text-red-400 text-sm mt-1'>{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor='service'
              className='block text-white font-medium mb-2'
            >
              Service Needed *
            </label>
            <select
              id='service'
              name='service'
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.service
                  ? "border-red-500 focus:ring-red-500/50"
                  : "border-white/20 focus:ring-white/50 focus:border-white/40"
              }`}
            >
              <option value='' className='bg-gray-900'>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className='bg-gray-900'>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className='text-red-400 text-sm mt-1'>{errors.service}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='message'
              className='block text-white font-medium mb-2'
            >
              Message *
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-vertical transition-all duration-300 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500/50"
                  : "border-white/20 focus:ring-white/50 focus:border-white/40"
              }`}
              placeholder='Tell us about your requirements...'
            />
            {errors.message && (
              <p className='text-red-400 text-sm mt-1'>{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={formStatus === "loading"}
            className='w-full bg-white text-black py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
          >
            {formStatus === "loading" ? (
              <>
                <div className='w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin'></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
