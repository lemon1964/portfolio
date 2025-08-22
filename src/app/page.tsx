"use client";

import { AudioToggle } from "./AudioToggle";
import { ProjectSection } from "./ProjectSection";
import { CertificatesSection } from "./CertificatesSection";
import { AboutSection } from "./AboutSection";
import { HeroLine } from "./HeroLine";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <AudioToggle />
      <section className="max-w-3xl mx-auto py-10">
        <HeroLine />
      </section>
      {/* <section className="max-w-3xl mx-auto text-center py-10">
        <p className="text-lg text-gray-600">
          Создаю проекты на React, Django и Next.js просто потому, что мне нравится это делать.
        </p>
      </section> */}
      <ProjectSection />
      <CertificatesSection />
      <AboutSection />
      <section className="max-w-2xl mx-auto mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Контакты</h2>
        <p>
          Email:{" "}
          <a href="mailto:lemon.design@mail.ru" className="text-blue-600">
            lemon.design@mail.ru
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a href="https://wa.me/79991234567" className="text-blue-600">
            +7 (916) 250-23-46
          </a>
        </p>
      </section>
    </main>
  );
}
