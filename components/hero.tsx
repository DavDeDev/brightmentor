import { BarChart, BookOpen, Calendar, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Hero() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Empower Your School's Mentorship Program
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                BrghtMentor helps schools effortlessly manage and scale their mentorship programs, fostering growth and success for every student.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-bold">Mentor-Mentee Matching</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Intelligent algorithm to pair mentors with mentees based on goals and interests.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-bold">Session Scheduling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Easy-to-use calendar for scheduling and managing mentorship sessions.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-bold">Progress Tracking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Monitor and analyze the impact of your mentorship program with detailed reports.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-bold">Resource Library</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Curated collection of materials to support mentors and mentees throughout their journey.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your School's Mentorship Program?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the growing community of schools using BrghtMentor to nurture student growth and success.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your school email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Start your free 30-day trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
