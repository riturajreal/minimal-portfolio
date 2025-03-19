import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full pt-12 pb-[200px]">
      <div className="max-w-[600px] mx-auto flex flex-col items-center gap-4 px-6 py-6 bg-secondary/20 rounded-2xl text-center">
        <h2 className="text-3xl font-bold">Need a Full-Stack Developer?</h2>
        <p className="text-muted-foreground text-sm">
          I specialize in building scalable web applications. I turn ideas into reality. Let's collaborate!
        </p>

        <div className="flex gap-4 mt-4">
          <Button>
            Hire Me
          </Button>
          <Button variant="outline">
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
