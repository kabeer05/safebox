import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-green-100 p-8">
              <LockKeyhole className="h-24 w-24 text-green-600" />
            </div>
          </div>
          <div className="space-y-4 max-w-[800px]">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
              Secure Your Digital Life with SafeBox
            </h1>
            <p className="text-muted-foreground md:text-xl mx-auto">
              The modern password manager that keeps your credentials safe and
              accessible across all your devices.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
