import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    emailjs.init('IUhMtBS-13_E5WdZD')
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_5jffko1',          
      'template_iqvu5p8',         
      formData                 
    ).then(
      () => {
        alert('Message sent!')
        setFormData({ title: '', name: '', email: '', message: '' })
      },
      (error) => {
        alert('Failed to send message.')
        console.error(error)
      }
    )
  }

  return (
    <form onSubmit={sendEmail} className="max-w-xl text-white space-y-4 p-4 ml-12 mt-12">
      <input
        type="text"
        name="title"
        placeholder="Subject / Title"
        required
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#0e3a5a] placeholder-white"
      />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#0e3a5a] placeholder-white"
      />
        <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#0e3a5a] placeholder-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 rounded bg-[#0e3a5a] placeholder-white h-32"
      />
      <button type="submit" className="bg-[#00bfff] px-4 py-2 rounded hover:bg-[#009fd6] transition">
        Send
      </button>
    </form>
  )
}
