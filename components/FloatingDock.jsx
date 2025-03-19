import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const FloatingDock = () => {
  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-2xl flex items-center gap-6 px-6 py-4 border border-secondary/30
                 bg-secondary/20 backdrop-blur-xl shadow-lg z-50">

          
          <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 text-primary hover:text-primary/80 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-5 h-5 text-primary hover:text-primary/80 transition" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5 text-primary hover:text-primary/80 transition" />
      </a>
        </div>
      

          {/* Contact Button */}
          <Button clas>
              <Mail className="w-4 h-4" />
              <a 
        href="mailto:ganeshrana2039@gmail.com"
        className=""
      >
        Contact
      </a>
          </Button>
      
    </div>
  );
};

export default FloatingDock;
