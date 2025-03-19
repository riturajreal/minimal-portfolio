import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full pt-12 pb-[200px]">
      <div className="max-w-[600px] mx-auto flex flex-col items-center gap-4 px-6 py-6 bg-secondary/20 rounded-2xl text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground text-sm">
          Join now and elevate your projects with powerful tools and seamless integrations.
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
