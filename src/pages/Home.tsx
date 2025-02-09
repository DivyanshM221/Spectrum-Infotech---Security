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
    <div className="relative min-h-[90vh] bg-primary-900 text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Technology,
            <span className="block gradient-text">Enhancing Security</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 animate-slide-in">
            Your trusted partner in technology solutions and security systems
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Link
              to="/services"
              className="btn-gradient text-white font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card transform bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-all group flex flex-col items-center justify-center">
      <div className="text-primary-600 mb-6">{icon}</div>
      <h3 className="font-heading text-2xl font-semibold mb-4 text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <p className="text-gray-600 italic">"{content}"</p>
      <h4 className="font-semibold text-lg text-gray-800 mt-4">{name}</h4>
      <p className="text-primary-600">{role}</p>
      <div className="text-yellow-500 mt-2">{"★".repeat(rating)}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-gray-800">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ServiceCard icon={<Tool className="w-12 h-12" />} title="Device Repairs" description="Expert repair services." />
            <ServiceCard icon={<Shield className="w-12 h-12" />} title="Security Solutions" description="Professional security camera installations." />
            <ServiceCard icon={<Monitor className="w-12 h-12" />} title="Electronics Sales" description="New and refurbished devices." />
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Sanjay" role="Client" content="Excellent service!" rating={5} />
            <TestimonialCard name="Amit" role="Business Owner" content="Great service for office setup." rating={5} />
            <TestimonialCard name="Chetan" role="Business" content="Reliable and affordable." rating={4} />
          </div>
        </div>
      </section>
    </div>
  );
}
