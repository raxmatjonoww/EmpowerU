import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-american-red to-american-blue bg-clip-text text-transparent">EmpowerU</span>
            </h1>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
                <span className="mr-2">Nasiba</span>
              </h2>
              <span className="text-2xl md:text-3xl text-american-blue">🦋</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              English teacher, language enthusiast, and lifelong learner with a passion for personal and academic growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#about">
                <Button className="bg-american-red hover:bg-red-600 text-white">
                  Learn More
                </Button>
              </a>
              <a href="/#contact">
                <Button variant="outline" className="border-american-blue text-american-blue hover:bg-american-blue/10">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-american-red via-american-white to-american-blue blur-md opacity-70"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="/lovable-uploads/c17fe073-a09f-434f-a1fb-99b4f70d4f8c.png" 
                  alt="Nasiba" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
