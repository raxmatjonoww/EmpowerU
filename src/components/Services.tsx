
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🗣️",
      title: "Language Learning",
      description: "Practical methods to improve your English, Korean, and more with personalized guidance.",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
    },
    {
      icon: "🎓",
      title: "Study Abroad Insights",
      description: "Guidance on scholarships, applications, and everything you need for your academic dreams.",
      color: "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
    },
    {
      icon: "💻",
      title: "Freelancing & Productivity",
      description: "Side hustles, organization hacks, and time management strategies for busy professionals.",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
    },
    {
      icon: "📚",
      title: "Book Recommendations",
      description: "Reviews, recommendations, and deep dives into thought-provoking reads for all levels.",
      color: "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
    },
    {
      icon: "🗣",
      title: "Speaking Course",
      description: "Strategies to boost your confidence and fluency in English for academic and professional settings.",
      color: "bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
    },
    {
      icon: "🥗",
      title: "Healthy Living",
      description: "Simple, effective ways to stay fit and maintain wellness, even with a busy schedule.",
      color: "bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200"
    },
  ];

  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-3">
            <div className="h-1.5 w-24 bg-american-blue rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What I Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            If you're looking to grow, learn, and empower yourself, you're in the right place! 
            Let's build this journey together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-lg border-none overflow-hidden animate-fade-in ${service.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-american-blue hover:text-american-navy transition-colors duration-300 text-sm font-medium flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-american-navy mb-4">Start Your Journey Today</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to enhance your skills and reach your academic goals? Join me on this empowering journey.
            </p>
            <div className="inline-flex items-center gap-2 bg-american-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300">
              <span>💡 Empower Someone Today</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
