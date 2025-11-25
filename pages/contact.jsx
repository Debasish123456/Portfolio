import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
    
        try {
            // Send email to Admin
            await emailjs.send(
                'service_1', // Replace with your EmailJS Service ID
                'template_o52hckw', // Replace with your EmailJS Template ID for Admin Notification
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                '6TGieJvvcWmHEE3Ux' // Replace with your EmailJS Public Key
            );
    
            // Send confirmation email to the sender
            await emailjs.send(
                'service_1', // Use the same EmailJS Service ID
                'template_43c8u5g', // Replace with your EmailJS Confirmation Template ID
                {
                    name: formData.name,
                    email: formData.email // Sender's email (so they receive the confirmation)
                },
                '6TGieJvvcWmHEE3Ux' // Your EmailJS Public Key
            );
    
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email sending failed:', error);
            setSuccess(false);
        }
    
        setIsSending(false);
        setIsOpen(true);
    };
    
    return (
        <BannerLayout>
            <div className="px-4 py-2">
                {/* Contact Information */}
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className="text-lg font-bold">Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        {/* Left Card */}
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Country:</span>
                                <span className="text-LightGray md:text-sm">India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">City:</span>
                                <span className="text-LightGray md:text-sm">Berhampur</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Company:</span>
                                <span className="text-LightGray md:text-sm">Infosys Limited</span>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Email:</span>
                                <span className="text-LightGray text-sm">codewithdp44@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">LinkedIn:</span>
                                <span className="text-LightGray text-sm">Debasish Panda</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Phone:</span>
                                <span className="text-LightGray text-sm">+91 8018499511</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:codewithdp44@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Debasish123456" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/debasish-panda-8248152b3/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/Debasish4488" target='_blank' rel="noreferrer"><FaTwitter /></a>
                </div>


                {/* Contact Form */}
                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className="text-lg font-bold">Get In Touch</h1>
                    <form onSubmit={sendEmail} className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        {/* Name Input */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                <HiUser />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input_stylings"
                                placeholder="Name"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                <HiMail />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input_stylings"
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="relative mb-6">
                            <div className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                <BsChatTextFill />
                            </div>
                            <textarea
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="input_stylings"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="my-4">
                            <button type="submit" className="button" disabled={isSending}>
                                {isSending ? 'Sending...' : 'SEND MESSAGE'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success/Error Modal */}
            <Modal
                wrapClassName="backdrop-blur-lg drop-shadow-2xl rounded-lg flex items-center justify-center"
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onCancel={() => setIsOpen(false)}
            >
                <div className="relative z-50 max-w-md w-full bg-EveningBlack p-6 rounded-lg text-center">
                    <h1 className={`text-2xl font-bold ${success ? 'text-Green' : 'text-Red'}`}>
                        {success ? 'Message Sent!' : 'Error Sending Message'}
                    </h1>
                    <p className="text-LightGray text-sm mb-4">
                        {success
                            ? 'Your message has been successfully sent. I will get back to you soon!'
                            : 'Something went wrong. Please try again later.'}
                    </p>
                    <button
                        className="mt-4 px-4 py-2 bg-Green text-white rounded-lg hover:bg-opacity-80 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </Modal>

            {/* Footer */}
            <Footer />
        </BannerLayout>
    );
};

export default Contact;
