
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    { title: "IELTS Score", value: "8.0", detail: "8.5 in Speaking" },
    { title: "Public Speaking", value: "1st Place", detail: "Competition Winner" },
    { title: "Research Publication", value: "Published", detail: "Language Barriers Study" },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-3">
            <div className="h-1.5 w-24 bg-american-red rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            I hold a Bachelor's degree in Electrical and Computer Engineering, but my true calling has 
            always been communication, education, and empowering others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className={`overflow-hidden border-none shadow-md transition-transform duration-300 transform hover:-translate-y-1 animate-fade-in`} style={{animationDelay: `${index * 150}ms`}}>
              <div className="h-2 bg-gradient-to-r from-american-red to-american-blue"></div>
              <CardContent className="pt-8 pb-6 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <div className="my-4 text-3xl font-bold text-american-blue">{item.value}</div>
                <p className="text-gray-600">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4">
              Over the years, I've achieved an IELTS score of 8.0, won first place in a Public Speaking Competition, 
              and published research on "Language barriers international students in multilingual universities".
            </p>
            <p className="text-gray-600">
              Now, I'm here to share my journey and everything I've learned along the way, helping others achieve 
              their educational and personal goals.
            </p>
          </div>

          <div className="animate-slide-in" style={{animationDelay: '150ms'}}>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/0f06ace4-1fdc-482f-b9ba-a02a8ddfd7e5.png" 
                  alt="Nasiba playing chess" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-american-navy/80 to-transparent p-4">
                  <p className="text-white text-sm">Strategic thinking is key to learning and teaching</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-american-red rounded-full flex items-center justify-center text-white text-sm font-medium p-2 shadow-lg">
                Strategic Thinking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
