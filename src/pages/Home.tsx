import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Shield,
  PenTool as Tool,
  ShieldCheck,
  ThumbsUp,
  Star,
  Server,
  Network,
  FileText,
  ShieldAlert,
} from "lucide-react";

function HeroSection() {
  return (
    <div className="relative min-h-[90vh] bg-primary-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center animate-fade-in">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empowering Technology,
          <span className="block gradient-text">Enhancing Security</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 mb-12 animate-slide-in">
          Your trusted partner in technology solutions and security systems
        </p>
        <Link
          to="/services"
          className="btn-gradient text-white font-semibold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <Link
      to="/services"
      className="service-card bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform flex flex-col items-center text-center"
    >
      <div className="text-primary-600 mb-6">{icon}</div>
      <h3 className="font-heading text-2xl font-semibold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="text-primary-600 font-semibold inline-flex items-center gap-2 group-hover:text-primary-800">
        Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl text-center">
      <div className="flex justify-center gap-1 text-yellow-400 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 text-lg">{content}</p>
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-gray-800">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive technology solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard icon={<Tool className="w-12 h-12" />} title="Device Repairs" description="Expert repair services for computers, laptops, tablets, and more" />
            <ServiceCard icon={<Shield className="w-12 h-12" />} title="Security Solutions" description="Professional security camera installation and maintenance" />
            <ServiceCard icon={<Monitor className="w-12 h-12" />} title="Electronics Sales" description="Quality new and refurbished devices at competitive prices" />
            <ServiceCard icon={<Server className="w-12 h-12" />} title="Server Installation" description="Professional setup and management of server infrastructures" />
            <ServiceCard icon={<Network className="w-12 h-12" />} title="Networking & Mailing Solutions" description="Efficient network setup and secure mailing solutions for businesses" />
            <ServiceCard icon={<FileText className="w-12 h-12" />} title="Software - Microsoft & Tally" description="Licensing and installation of Microsoft and Tally software" />
            <ServiceCard icon={<ShieldAlert className="w-12 h-12" />} title="Antivirus & Security Solutions" description="Advanced security software to protect your data and devices" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <TestimonialCard name="Sanjay" role="Client" content="Excellent service! They helped set up our entire society’s security system and provide great ongoing support." rating={5} />
            <TestimonialCard name="Amit" role="Business Owner" content="Helped me set up 50 PCs in our office! Great service was provided." rating={5} />
            <TestimonialCard name="Chetan" role="Business" content="Spectrum Infotech has been a great partner in our tech needs, always reliable and affordable." rating={4} />
          </div>
        </div>
      </section>
    </div>
  );
}
