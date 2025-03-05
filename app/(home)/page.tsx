import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">Master CPACC Certification</h1>
      <p className="mb-6 text-lg text-fd-muted-foreground max-w-2xl">
        Prepare for the{" "}
        <strong>
          Certified Professional in Accessibility Core Competencies (CPACC)
        </strong>{" "}
        exam with structured materials, key concepts, and practice questions.
      </p>
      <Link
        href="/docs"
        className="bg-fd-primary text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-opacity-80"
      >
        Start Learning
      </Link>

      <section className="mt-10 grid gap-6 md:grid-cols-3 text-left max-w-4xl">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">📚 Comprehensive coverage</h2>
          <p className="text-sm text-fd-muted-foreground">
            Covers all CPACC exam domains, including disabilities, laws, and
            universal design.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">🎯 Exam-oriented content</h2>
          <p className="text-sm text-fd-muted-foreground">
            Focuses on the most important topics to help you pass the CPACC
            exam.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">✅ Practice questions</h2>
          <p className="text-sm text-fd-muted-foreground">
            Test your knowledge with quizzes and mock exam questions.
          </p>
        </div>
      </section>
    </main>
  );
}
