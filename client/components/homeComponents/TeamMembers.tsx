import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TeamMembersInfo = [
  {
    image: "/placeholder.svg?height=300&width=300",
    name: "Kabeer Arora",
    role: "Founder & CEO",
    bio: "Security inexpert with 0 years of experience in cybersecurity and software development.",
  },
];

export default function TeamMembers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              The passionate individuals behind SafeBox who are dedicated to
              keeping your digital life secure.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {TeamMembersInfo.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  image,
  name,
  role,
  bio,
}: {
  image: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={150}
            height={150}
            className="rounded-full object-cover h-32 w-32"
          />
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-green-600 font-medium">{role}</p>
          </div>
          <p className="text-muted-foreground text-sm">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
