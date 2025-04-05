import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Code,
  Download,
  ExternalLink,
  Figma,
  Github,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { JSX } from "react/jsx-dev-runtime";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col align-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <User className="h-5 w-5" />
            <span>Elton Escudero</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center w-fit gap-4 md:ml-2 md:gap-2 lg:gap-4">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Creative Developer <br />& Designer
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I build exceptional digital experiences that combine
                    stunning design with powerful functionality.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      Download Resume <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placehorder.svg?height=550&width=450"
                width={550}
                height={450}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last dark:border dark:border-muted"
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-secondary text-secondary-foreground">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who I Am
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate developer and designer with over 5 years of
                  experience creating digital solutions that help businesses
                  grow. I specialize in creating intuitive, user-friendly
                  interfaces and powerful backend systems that deliver
                  exceptional results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="text-muted-foreground">
                    I believe in creating solutions that not only look beautiful
                    but also solve real problems. Every project begins with
                    understanding your goals and audience, followed by a
                    strategic approach to design and development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Experience</h3>
                  <p className="text-muted-foreground">
                    With experience across various industries including
                    e-commerce, finance, and education, I bring a wealth of
                    knowledge to every project. I've worked with startups and
                    established businesses alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work across design and
                  development.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-3 mx-auto w-[60%]">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                      title="E-commerce Platform"
                      description="A full-featured online store with payment processing and inventory management."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["React", "Node.js", "MongoDB"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Financial Dashboard"
                      description="Interactive dashboard for tracking investments and financial metrics."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Vue.js", "D3.js", "Firebase"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Mobile Fitness App"
                      description="Workout tracking app with personalized recommendations."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["React Native", "GraphQL", "AWS"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Brand Identity"
                      description="Complete rebrand for a tech startup including logo, color palette, and guidelines."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Branding", "Figma", "Illustration"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Educational Platform"
                      description="Learning management system with video courses and progress tracking."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Next.js", "Tailwind CSS", "PostgreSQL"]}
                      link="#"
                    />
                    <ProjectCard
                      title="UI Component Library"
                      description="Reusable component system for rapid application development."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["TypeScript", "Storybook", "CSS Modules"]}
                      link="#"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="web" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                      title="E-commerce Platform"
                      description="A full-featured online store with payment processing and inventory management."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["React", "Node.js", "MongoDB"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Financial Dashboard"
                      description="Interactive dashboard for tracking investments and financial metrics."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Vue.js", "D3.js", "Firebase"]}
                      link="#"
                    />
                    <ProjectCard
                      title="Educational Platform"
                      description="Learning management system with video courses and progress tracking."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Next.js", "Tailwind CSS", "PostgreSQL"]}
                      link="#"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="design" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                      title="Brand Identity"
                      description="Complete rebrand for a tech startup including logo, color palette, and guidelines."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["Branding", "Figma", "Illustration"]}
                      link="#"
                    />
                    <ProjectCard
                      title="UI Component Library"
                      description="Reusable component system for rapid application development."
                      image="/placeholder.svg?height=300&width=400"
                      tags={["TypeScript", "Storybook", "CSS Modules"]}
                      link="#"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are the technologies and tools I specialize in.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                icon={<Code className="h-10 w-10" />}
                title="Frontend Development"
                skills={[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "HTML/CSS",
                  "JavaScript/TypeScript",
                  "Tailwind CSS",
                ]}
              />
              <SkillCard
                icon={<Github className="h-10 w-10" />}
                title="Backend Development"
                skills={[
                  "Node.js",
                  "Express",
                  "Python",
                  "Django",
                  "RESTful APIs",
                  "GraphQL",
                ]}
              />
              <SkillCard
                icon={<Figma className="h-10 w-10" />}
                title="Design"
                skills={[
                  "UI/UX Design",
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "Wireframing",
                  "Prototyping",
                ]}
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let's discuss how I can help bring
                  your vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>escudero.elton@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5" />
                    <Link
                      href="https://github.com/noucodes"
                      className="hover:underline"
                      target="_blank"
                    >
                      github.com/noucodes
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Send Me a Message</h3>
                  <p className="text-muted-foreground">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elton. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) {
  return (
    <Card className="overflow-hidden transition-colors">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm"
            asChild
          >
            <Link href={link} target="_blank">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View project</span>
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: JSX.Element;
  title: string;
  skills: string[];
}) {
  return (
    <Card className="transition-colors">
      <CardContent className="p-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
