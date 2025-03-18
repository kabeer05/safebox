import {
  Shield,
  Lock,
  Users,
  RefreshCw,
  Smartphone,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      id="features"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Features for Complete Security
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              SafeBox provides everything you need to manage your passwords
              securely and efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-green-600" />}
            title="End-to-End Encryption"
            description="Your data is encrypted and decrypted locally on your device, ensuring only you can access your passwords."
          />
          <FeatureCard
            icon={<Lock className="h-10 w-10 text-green-600" />}
            title="Password Generator"
            description="Create strong, unique passwords with our advanced generator to enhance your online security."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-green-600" />}
            title="Secure Sharing"
            description="Share passwords and secure notes with family members or colleagues without compromising security."
          />
          <FeatureCard
            icon={<RefreshCw className="h-10 w-10 text-green-600" />}
            title="Automatic Sync"
            description="Your passwords automatically sync across all your devices, so you're always up to date."
          />
          <FeatureCard
            icon={<Smartphone className="h-10 w-10 text-green-600" />}
            title="Mobile Access"
            description="Access your passwords on the go with our mobile apps for iOS and Android."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-green-600" />}
            title="Browser Extensions"
            description="Seamlessly autofill passwords in your browser with extensions for Chrome, Firefox, and more."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-[220px] flex flex-col">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
