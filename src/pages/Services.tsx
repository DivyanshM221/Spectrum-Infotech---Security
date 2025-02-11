import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Shield, Monitor, Server, Network, Code, ShieldCheck, CheckCircle } from 'lucide-react';

function ServiceHero() {
  return (
    <div className="bg-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
          Professional tech repair, security solutions, and device sales backed by years of expertise
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-primary-600 mb-4">{icon}</div>
        <h3 className="font-heading text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Tool className="w-12 h-12" />, 
      title: "Device Repairs", 
      description: "Expert repair services for all your electronic devices with quick turnaround times.",
      features: ["Computer & laptop repairs", "Tablet & iPad servicing", "Hardware upgrades", "Software troubleshooting", "Data recovery services"]
    },
    {
      icon: <Shield className="w-12 h-12" />, 
      title: "Security Solutions", 
      description: "Comprehensive security camera systems for homes and businesses.",
      features: ["CCTV installation", "Access Control Systems", "Video Door Phones (VDP)", "Fire Alarm Systems",  "Boom Barriers"]
    },
    {
      icon: <Monitor className="w-12 h-12" />, 
      title: "Electronics Sales", 
      description: "Quality new and refurbished devices at competitive prices.",
      features: ["New & refurbished laptops", "Desktop computers", "Tablets & iPads", "Security cameras", "Warranty on all products"]
    },
    {
      icon: <Server className="w-12 h-12" />, 
      title: "Server Installation", 
      description: "Reliable server installation and maintenance services for businesses.",
      features: ["Enterprise server setup", "Cloud server solutions", "Backup & disaster recovery", "Scalability & performance tuning", "Ongoing server support"]
    },
    {
      icon: <Network className="w-12 h-12" />, 
      title: "Networking & Mailing Solutions", 
      description: "Seamless networking and professional email solutions for businesses.",
      features: ["LAN & WAN setup", "Email server configuration", "Cloud email services", "Network security", "VoIP solutions"]
    },
    {
      icon: <Code className="w-12 h-12" />, 
      title: "Software - Microsoft & Tally", 
      description: "Genuine software solutions for businesses, including Microsoft and Tally.",
      features: ["Microsoft Office licensing", "Tally ERP solutions", "Software installation & updates", "User training & support", "Software troubleshooting"]
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />, 
      title: "Antivirus & Security Solutions", 
      description: "Protect your devices and business with industry-leading security solutions.",
      features: ["Enterprise antivirus setup", "Firewall security", "Ransomware protection", "Regular security audits", "Secure data encryption"]
    }
  ];

  return (
    <div>
      <ServiceHero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you find the perfect solution for your needs.
          </p>
          <Link
            to="/contact" 
            className="bg-accent-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
