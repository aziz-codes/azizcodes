import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Avatar as ProfileImage } from "@/constants/images";
export default function Component() {
  return (
    <Card className="w-full max-w-full bg-[#1E1E1E]">
      <CardHeader className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={ProfileImage.src} alt="Developer Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">Noor Aziz</h2>
          <p className="text-muted-foreground">Frontend Web Developer</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Acme Inc.</h3>
          <p className="text-muted-foreground">
            Senior Software Engineer, 2020 - Present
          </p>
          <p className="text-muted-foreground">
            As a Senior Software Engineer at Acme Inc., I was responsible for
            leading the development of the company's flagship web application. I
            designed and implemented new features, optimized performance, and
            mentored junior developers on the team. I also played a key role in
            transitioning the application to a microservices architecture,
            improving scalability and reliability.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Globex Corporation</h3>
          <p className="text-muted-foreground">
            Software Engineer, 2018 - 2020
          </p>
          <p className="text-muted-foreground">
            At Globex Corporation, I was a Software Engineer responsible for
            developing and maintaining various web applications and APIs. I
            collaborated with cross-functional teams to deliver features on time
            and within budget, and I also implemented automated testing and
            CI/CD pipelines to improve the development workflow.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Stark Industries</h3>
          <p className="text-muted-foreground">
            Junior Software Engineer, 2016 - 2018
          </p>
          <p className="text-muted-foreground">
            As a Junior Software Engineer at Stark Industries, I worked on
            building and maintaining web applications for the company's internal
            and external customers. I gained valuable experience in full-stack
            development, working with various technologies and frameworks, and
            collaborating with senior engineers to deliver high-quality
            software.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}