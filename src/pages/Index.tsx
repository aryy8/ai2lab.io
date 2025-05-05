
import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Book, Award, Users, Lightbulb, GraduationCap, Brain, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Mentor data without images
  const mentors = [
    {
      name: "Prof. (Dr.) Sandeep Chaurasia",
      role: "Director, Directorate of Corporate Relations and Placements, MUJ",
      initials: "SC",
      linkedin: "https://www.linkedin.com/in/prof-dr-sandeep-chaurasia-0457568a/"
    },
    {
      name: "Danush Khanna",
      role: "Co-founder",
      initials: "DK",
      linkedin: "https://www.linkedin.com/in/danushkhanna/"
    },
    {
      name: "Abhilekh Borah",
      role: "Co-founder",
      initials: "AB",
      linkedin: "https://www.linkedin.com/in/abhilekh-borah-aa758a15a/"
    },
    {
      name: "Disha Sheshanarayana",
      role: "Mentor",
      initials: "DS",
      linkedin: "https://www.linkedin.com/in/disha-sheshanarayana-b54730253/"
    },
    {
      name: "Krishanu Bujarbaruah",
      role: "Mentor",
      initials: "KB",
      linkedin: "https://www.linkedin.com/in/krishanubujarbaruah/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="./lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
              alt="AI² Logo" 
              className="h-8 w-auto"
            />
            <span className="font-semibold text-xl">AI² Research Lab</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#perks" className="text-sm font-medium hover:text-primary transition-colors">Perks</a>
            <a href="#mentors" className="text-sm font-medium hover:text-primary transition-colors">Mentors</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with logo as background */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <img 
            src="./lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
            alt="AI² Logo Background" 
            className="w-full max-w-2xl mx-auto"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-24 h-24 mb-4">
              <img 
                src="./lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
                alt="AI² Logo" 
                className="w-full h-auto"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              computAtional linguIstics & vIsion Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Fostering innovation and excellence in AI research
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              <Linkedin className="mr-2 h-4 w-4" />
              <a href="https://www.linkedin.com/company/ai2lab/" target="_blank" rel="noopener noreferrer" className="no-underline">
                Connect with us on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About AI²</h2>
            <p className="text-gray-700 mb-4">
              AI² is a research group & facility under the leadership of Prof. (Dr.) Sandeep Chaurasia (Director, Directorate of Corporate Relations and Placements, MUJ), co-founded by Danush Khanna & Abhilekh Borah.
            </p>
            <p className="text-gray-700">
              Our objective is to create an environment where students from all years (1-4) can learn and engage in meaningful AI research, present their research as patents, papers, and receive mentorship that equips them to solve real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section id="perks" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Why Join AI²</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Book className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learning & Growth</h3>
              <p className="text-gray-700 mb-4">
                Build a strong foundation in ML, DL, NLP/CV & sharpen problem-solving skills through real-world challenges.
              </p>
            </Card>
            
            <Card className="p-6">
              <Award className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Enhancement</h3>
              <p className="text-gray-700 mb-4">
                Improve prospects for roles like Applied, Research or Data Scientist, AI/ML Engineer, and internships.
              </p>
            </Card>
            
            <Card className="p-6">
              <GraduationCap className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Academic Success</h3>
              <p className="text-gray-700 mb-4">
                Boost chances for MS/PhD programs and positions at research labs like MSR and IBM Research.
              </p>
            </Card>
            
            <Card className="p-6">
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Mentorship</h3>
              <p className="text-gray-700 mb-4">
                Get 1-to-1 personalized guidance from experienced mentors & professors in the field.
              </p>
            </Card>
            
            <Card className="p-6">
              <ExternalLink className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conference Presentations</h3>
              <p className="text-gray-700 mb-4">
                Represent the group at top venues like ACL, NeurIPS, CVPR & Cods Comad, in India and abroad.
              </p>
            </Card>
            
            <Card className="p-6">
              <Lightbulb className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hands-on Experience</h3>
              <p className="text-gray-700 mb-4">
                Work with state-of-the-art technologies, including LLMs, VLMs, and GPUs for practical research.
              </p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-indigo-600 font-semibold mb-2">
              Non-profit organization - Freshers and beginners welcome!
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Mentors */}
      <section id="mentors" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Meet Your Mentors</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor, index) => (
              <Card key={index} className="p-6 flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="bg-indigo-100 text-indigo-800 text-xl font-medium">
                    {mentor.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{mentor.role}</p>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="no-underline">
                    LinkedIn
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="./lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
                alt="AI² Logo" 
                className="h-8 w-auto"
              />
              <span className="font-semibold">AI² Research Lab</span>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} AI² Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
