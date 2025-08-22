"use client";

import { AudioToggle } from "./AudioToggle";
import { ProjectSection } from "./ProjectSection";
import { CertificatesSection } from "./CertificatesSection";
import { AboutSection } from "./AboutSection";
import { HeroLine } from "./HeroLine";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Пингуем Нейра фронт и бэк
    fetch("https://ai-stepik-next.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend ping failed", e)
    );
    fetch("https://ai-stepik-django.onrender.com/healthz/", { mode: "no-cors" }).catch(e =>
      console.debug("Backend ping failed", e)
    );
    // Пингуем демо-курс Render фронт и бэк
    fetch("https://ai-chat-frontend-wy6h.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend demo-course ping failed", e)
    );
    fetch("https://ai-chat-backend-3cba.onrender.com/healthz/", { mode: "no-cors" }).catch(e =>
      console.debug("Backend demo-course ping failed", e)
    );
    // Пингуем patientor
    fetch("https://patientor-4905.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("Frontend patientor ping failed", e)
    );
    // Пингуем mysite
    fetch("https://mysite-web-vubo.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("mysite ping failed", e)
    );
    fetch("https://mysite-nginx.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("mysite-nginx ping failed", e)
    );
    // Пингуем kid
    fetch("https://kid-front.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("kid-front ping failed", e)
    );
    fetch("https://kid-wlsf.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("kid-back ping failed", e)
    );
    // Пингуем pokedex
    fetch("https://full-stack-open-pokedex-op08.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("pokedex ping failed", e)
    );
    // Пингуем blogs
    fetch("https://blogs-jaml.onrender.com/", { mode: "no-cors" }).catch(e =>
      console.debug("blogs ping failed", e)
    );
  }, []);

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
