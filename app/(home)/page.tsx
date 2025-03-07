import Link from "next/link";
import { ArrowRight, icons } from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-12">
      <div className="w-full flex flex-col items-center justify-center px-4 py-16 text-center space-y-4">
        <Image
          src="/cpacc-logo.png"
          alt="CPACC Logo"
          width={200}
          height={200}
        />
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CPACC Certification
          </h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Your complete resource to prepare for the{" "}
            <strong>
              Certified Professional in Accessibility Core Competencies
            </strong>{" "}
            (IAAP) exam with structured materials, concept maps, and practice
            questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/docs" className="flex items-center gap-2">
                Start Learning <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/about">About the Exam</Link>
            </Button>
          </div>
        </div>
      </div>

      <footer className="w-full text-center py-6 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          Created with 💛 by Marta B.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/marta-bento"
            target="_blank"
            className="text-yellow-500 hover:underline flex items-center gap-1"
          >
            <icons.Linkedin size={16} />
          </Link>{" "}
          <Link
            href="https://github.com/martabento"
            target="_blank"
            className="text-yellow-500 hover:underline flex items-center gap-1"
          >
            <icons.Github size={16} />
          </Link>
        </div>
        <div className=" pt-4 flex items-center justify-center">
          <Link href="https://www.buymeacoffee.com/martabento" target="_blank">
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              width={217}
              height={60}
            />
          </Link>
        </div>
      </footer>
    </main>
  );
}
