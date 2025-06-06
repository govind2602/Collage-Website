import { useState } from 'react';
import './Contact.css';
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { FcPhone } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdFru0B9IRFLYzUpW-eUBdk_2BlBL952qHk_Q2f8Uhd0WerlQ/formResponse";

    // Replace with correct entry IDs from your Google Form
    const nameEntry = "entry.123456789";     // Replace with your actual entry ID for Name
    const phoneEntry = "entry.987654321";    // Replace with your actual entry ID for Phone
    const messageEntry = "entry.1112131415"; // Replace with your actual entry ID for Message

    const queryParams = new URLSearchParams({
      [nameEntry]: formData.name,
      [phoneEntry]: formData.phone,
      [messageEntry]: formData.message
    });

    window.open(`${googleFormBaseUrl}?${queryParams.toString()}`, "_blank");
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <BiSolidMessageRoundedDetail /></h3>
        <p>Feel free to reach out through the form or contact us directly.</p>
        <ul className='contactinf'>
          <li><IoMail /> govindchaubey638@gmail.com</li>
          <li><FcPhone /> +91 6387305456</li>
          <li><FaLocationDot className='location' /> Khandari Campus, Agra</li>
          <li className='loc'>Uttar Pradesh 282002</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder='Enter your name'
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder='Enter your phone number'
            onChange={handleChange}
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            value={formData.message}
            placeholder='Write your message here'
            rows='6'
            onChange={handleChange}
            required
          />

          <button type='submit' className='btn dark'>
            Submit Now <FaCircleArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
