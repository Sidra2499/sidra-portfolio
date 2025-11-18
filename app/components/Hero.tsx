'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
        Hi, I'm Sidra Khan
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in delay-200">
        Full Stack Developer | Passionate about building modern web experiences
      </p>
      <a
        href="#portfolio"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        See My Work
      </a>
    </section>
  );
}