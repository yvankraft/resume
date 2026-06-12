"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  X,
  MessageSquare,
  GraduationCap,
  Cpu,
  Building2,
  FlaskConical,
} from "lucide-react";
import { CopyCommand } from "./CopyCommand";

// Configuration des variantes pour la timeline
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 }, // Délai entre chaque enfant
  },
};

const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.4, 1, 0.8, 2] as any },
  },
};

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/yvan.Lebenslauf.pdf";
  link.download = "Yvan_wildis_ngone_tchinda_Lebenslauf.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTimelineOpen1, setIsTimelineOpen1] = useState(false);
  const [isTimelineOpen2, setIsTimelineOpen2] = useState(false);
  const [isTimelineOpen3, setIsTimelineOpen3] = useState(false);
  const [isTimelineOpen4, setIsTimelineOpen4] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className=" min-h-screen relative flex flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8 px-4 w-full mb-50"
      >
        <motion.h1
          variants={revealVariant}
          className="text-6xl md:text-8xl font-black tracking-tight leading-none flex justify-end items-center z-10 md:-translate-x-35 md:translate-y-14  "
        >
          Yvan
          <br /> Wildis <br />{" "}
          <motion.span variants={revealVariant} className="text-zinc-500">
            Ngone <br />
            tchinda
          </motion.span>
        </motion.h1>

        {/* Limitation avec max-h-full et w-auto */}
        <motion.img
          variants={revealVariant}
          src="./myCvPicture.png"
          alt="myCvPicture"
          className="bg-transparent w-auto h-[60vh] object-contain md:absolute md:left-4/6 z-0 mask-image [mask-image:linear-gradient(to_bottom,black,transparent)] rounded-b-4xl"
        />
      </motion.div>

      <section className=" grid grid-cols-1 md:grid-cols-12 gap-8 p-10 min-h-screen">
        {/* Colonne de gauche : Introduction */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Timeline</h1>
          <p className="text-zinc-400">
            Hover a section to see the information it contains, and click on it
            to view the details.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-20 hover:cursor-pointer hover:underline active:scale-95"
          >
            About me
          </button>
        </div>

        {/* Colonne de droite : Grille de 4 cartes (2x2) */}
        <div className="md:col-span-8 md:grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div
              onClick={() => {
                setIsTimelineOpen1(true);
              }}
              className="border border-zinc-800 p-8 aspect-[4/5] group overflow-hidden relative active:scale-95 rounded-2xl"
            >
              <div className="w-full h-full flex justify-center items-center">
                <GraduationCap size={100} opacity={0.4} />
              </div>
              <div className="bg-transparent absolute bottom-8 left-8 translate-y-[400%] group-hover:translate-y-0 transition-transform duration-800 ease-[0.22,1,0.36,1]">
                <span className="font-mono ">01. Study</span>
              </div>
            </div>
            <div
              onClick={() => setIsTimelineOpen2(true)}
              className="border border-zinc-800 p-8  aspect-square group overflow-hidden relative active:scale-95 rounded-2xl"
            >
              <div className="w-full h-full flex justify-center items-center">
                <Building2 size={100} opacity={0.4} />
              </div>
              <div className="bg-transparent absolute bottom-8 left-8 translate-y-[400%] group-hover:translate-y-0 transition-transform duration-800 ease-[0.22,1,0.36,1]">
                <span className=" font-mono ">
                  02. Professional Experience
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <div
              onClick={() => setIsTimelineOpen3(true)}
              className="border border-zinc-800 p-8  aspect-square group overflow-hidden relative active:scale-95 rounded-2xl"
            >
              <div className="w-full h-full flex justify-center items-center">
                <Cpu size={100} opacity={0.4} />
              </div>
              <div className="bg-transparent absolute bottom-8 left-8 translate-y-[400%] group-hover:translate-y-0 transition-transform duration-800 ease-[0.22,1,0.36,1]">
                <span className="font-mono">03. Skills</span>
              </div>
            </div>
            <div
              onClick={() => setIsTimelineOpen4(true)}
              className="border border-zinc-800 p-8 aspect-[4/5] group overflow-hidden relative active:scale-95 rounded-2xl"
            >
              <div className="w-full h-full flex justify-center items-center">
                <FlaskConical size={100} opacity={0.4} />
              </div>
              <div className="bg-transparent absolute bottom-8 left-8 translate-y-[400%] group-hover:translate-y-0 transition-transform duration-800 ease-[0.22,1,0.36,1]">
                <span className=" font-mono">04. Personal Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre de contact basse conditionnelle avec animation Framer Motion */}
      <section className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <AnimatePresence mode="wait">
          {!showContacts ? (
            /* Bouton d'action initial */
            <motion.button
              key="contact-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setShowContacts(true)}
              className="flex items-center gap-2 bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl border border-zinc-700/50 dark:border-zinc-300/50 hover:opacity-95 transition-all active:scale-95"
            >
              <MessageSquare size={16} />
              Kontaktieren
            </motion.button>
          ) : (
            /* Affichage des onglets de contact */
            <motion.div
              key="contact-tabs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="tabs tabs-box relative"
            >
              {/* Bouton pour réinitialiser et masquer les contacts */}
              <button
                onClick={() => setShowContacts(false)}
                className="absolute -top-3 -right-3 p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition z-50"
              >
                <X size={12} />
              </button>

              <input
                type="radio"
                name="my_tabs_6"
                className="tab"
                aria-label="Telefonnummer"
              />
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <CopyCommand command="+4915757528515" />
              </div>

              <input
                type="radio"
                name="my_tabs_6"
                className="tab"
                aria-label="E-Mail"
                defaultChecked
              />
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <CopyCommand command="yvanngone53@gmail.com" />
              </div>

              <input
                type="radio"
                name="my_tabs_6"
                className="tab"
                aria-label="Lebenslauf"
              />
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <button
                  onClick={handleDownload}
                  className="border border-gray-300  dark:border-white/10 bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 dark:text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-2 transition-all"
                >
                  Download
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <footer className="footer bg-base-400 text-base-content px-10 py-8">
        <div className="w-full flex flex-col items-center text-center gap-4">
          {/* Message de remerciement en anglais */}
          <p className="text-zinc-400 font-medium">
            Thanks for visiting! If you enjoyed my work, feel free to follow me.
          </p>

          {/* Invitation X */}
          <a
            href="https://x.com/wildisyvan53"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition-all"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            Follow on X
          </a>
        </div>
      </footer>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bottom-0 w-full"
      >
        <footer className="footer sm:footer-horizontal bg-base-400 text-base-content p-10 border-base-300 border-t">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">web devellopement </a>
            <a className="link link-hover">App devellopement </a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a
              href="https://yvanagency.yvancorps.com/about"
              className="link link-hover"
            >
              About us
            </a>
            <a
              href="https://yvanagency.yvancorps.com/contact"
              className="link link-hover"
            >
              Contact
            </a>
            <a href="https://yvancorps.com/Project" className="link link-hover">
              raslisation
            </a>
            <a
              href="https://yvanagency.yvancorps.com"
              className="link link-hover"
            >
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer bg-base-400 text-base-content border-base-300 border-t  px-10 py-4">
          <aside className="grid-flow-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Yvan wildis ngone tchinda.
              <br />
              Copyright © 2026 - All right reserved by Yvan wildis ngone tchinda
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              {/* X */}
              <a
                href="https://x.com/wildisyvan53"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/yvankraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </motion.div>

      {/* MODAL 1 : Presentation Candidate */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arrière-plan flou et sombre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Fenêtre de la Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 scrollbar-none"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
              >
                <X size={18} />
              </button>

              {/* Contenu interne de la Modal */}
              <div className="p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    About me
                  </span>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-1">
                    yvan wildis Ngone Tchinda
                  </h2>
                  <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    Electrical Engineering Student
                  </p>
                </div>

                <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  <p>
                    Passionate full-stack developer and electrical engineering
                    student with solid expertise in web development and Flutter.
                    I combine a technical understanding of systems with
                    practical experience in implementing and deploying
                    independent projects (Vercel, GitHub). As a
                    solution-oriented and resilient team player, I am motivated
                    to apply my programming skills and technical aptitude to
                    innovative projects and actively help shape digital
                    transformation.
                  </p>
                </div>

                <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />

                {/* Compétences clés */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      quality
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• Autonomy</li>
                      <li>• Rigor</li>
                      <li>• Teamwork & Cooperation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      Language
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• German (C1)</li>
                      <li>• French (Mother tongue)</li>
                      <li>• Englisch (B1)</li>
                    </ul>
                  </div>
                </div>

                {/* Infos de contact rapides */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>📍 Standort: 59065 Hamm</span>
                  <span>✉️ E-Mail: yvanngone53@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2 : Timeline  Éducation */}
      <AnimatePresence>
        {isTimelineOpen1 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arrière-plan flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTimelineOpen1(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Conteneur de la fenêtre modale (scrollable) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 scrollbar-none"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsTimelineOpen1(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition z-20"
              >
                <X size={18} />
              </button>

              {/* En-tête de la Modal */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Resume
                </span>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-1">
                  yvan wildis ngone tchinda
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  <span>📍 59065 hamm</span>
                  <span>✉️ yvanngone53@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 mb-8" />

              {/* Section Timeline */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                  01. educational background
                </h3>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-zinc-600 dark:text-zinc-400">
                  {/* Item 1 : Fh swf */}
                  <li>
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic text-xs text-zinc-400">
                        Summer Semester 2026
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        Electronics study
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        South Westphalia University of Applied Sciences
                        (Germany)
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        I have been studying electronics at the South Westphalia
                        University of Applied Sciences since the 2024 winter
                        semester.
                      </p>
                    </div>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                  </li>

                  {/* Item 2 */}
                  <li>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                      <time className="font-mono italic text-xs text-zinc-400">
                        02/2023 - 05/2024
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        Language course
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        in Cameroon/Germany
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        Intensive academic language course designed to refine
                        technical communication and facilitate professional
                        integration in Germany.
                      </p>
                    </div>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                  </li>

                  {/* Item 3 */}
                  <li>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic text-xs text-zinc-400">
                        06/2021
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        high school diploma
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        in Cameroon
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        School-leaving qualification with a technical focus,
                        specializing in scientific and fundamental technical
                        methods in Cameroon.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 3 : Timeline Expériences */}
      <AnimatePresence>
        {isTimelineOpen2 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arrière-plan flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTimelineOpen2(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Conteneur de la fenêtre modale (scrollable) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 scrollbar-none"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsTimelineOpen2(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition z-20"
              >
                <X size={18} />
              </button>

              {/* En-tête de la Modal */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Resume
                </span>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-1">
                  yvan wildis ngone tchinda
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  <span>📍 59065 hamm</span>
                  <span>✉️ yvanngone53@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 mb-8" />

              {/* Section Timeline */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                  02. Professional Experience
                </h3>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-zinc-600 dark:text-zinc-400">
                  {/* Item 1 : Fh swf */}
                  <li>
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic text-xs text-zinc-400">
                        Currently
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        Order picker
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        EDEKA (Germany)
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        I work part-time as an order picker for the food
                        supplier Edeka.
                      </p>
                    </div>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                  </li>

                  {/* Item 2 */}
                  <li>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                      <time className="font-mono italic text-xs text-zinc-400">
                        010/2021 - 08/2023
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        maintenance technician
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        Route d'afrique (cameroon)
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        During this period, I held the position of maintenance
                        and repair technician for ventilation and air
                        conditioning equipment.
                      </p>
                    </div>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                  </li>

                  {/* Item 3 */}
                  <li>
                    <hr className="bg-zinc-200 dark:bg-zinc-800" />
                    <div className="timeline-middle text-zinc-800 dark:text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic text-xs text-zinc-400">
                        (06/2020 - 08/2020)(06/2019-08/2019)
                      </time>
                      <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-0.5">
                        practical internship
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        afrique froid et climatisation (in Cameroon)
                      </div>
                      <p className="text-xs mt-2 leading-relaxed">
                        During this period, I participated in practical
                        on-the-job exercises in the refrigeration and air
                        conditioning sector.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 4 : skills */}
      <AnimatePresence>
        {isTimelineOpen3 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arrière-plan flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTimelineOpen3(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Conteneur de la fenêtre modale (scrollable) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 scrollbar-none"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsTimelineOpen3(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition z-20"
              >
                <X size={18} />
              </button>

              {/* En-tête de la Modal */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Resume
                </span>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-1">
                  yvan wildis ngone tchinda
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  <span>📍 59065 hamm</span>
                  <span>✉️ yvanngone53@gmail.com</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 mb-8" />

              {/* Section Timeline */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                  03. Technical Skills
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      Web & 3D
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• HTML</li>
                      <li>• CSS</li>
                      <li>• React</li>
                      <li>• Next.js</li>
                      <li>• Three.js</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      Backend & DB
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• Node.js</li>
                      <li>• MongoDB</li>
                      <li>•Prisma</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      Mobile & Langages
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• Dart</li>
                      <li>• C</li>
                      <li>• c#</li>
                      <li>• React Native</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
                      Outils
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• VS Code</li>
                      <li>• Git</li>
                      <li>•Blender</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 5 : personal projects */}
      <AnimatePresence>
        {isTimelineOpen4 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Arrière-plan flou */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTimelineOpen4(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Conteneur de la fenêtre modale (scrollable) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 scrollbar-none"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsTimelineOpen4(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition z-20"
              >
                <X size={18} />
              </button>

              {/* En-tête de la Modal */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Resume
                </span>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight mt-1">
                  yvan wildis ngone tchinda
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  <span>📍 59065 hamm</span>
                  <span>✉️ yvanngone53@gmail.com</span>
                </div>
              </div>
              <section className="mt-10 border-t border-zinc-800 pt-8">
                <h3 className="text-xs font-bold uppercase text-zinc-500 mb-6">
                  Personal Projects
                </h3>
                <div className="space-y-6">
                  {/* Projet 1 : Portfolio */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold ">Personal Portfolio</h4>
                      <a
                        href="https://yvancorps.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs  hover:underline"
                      >
                        Live Demo
                      </a>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">
                      Professionelles Portfolio zur Präsentation technischer
                      Projekte mit optimierter Performance.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        Next.js
                      </span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        TypeScript
                      </span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        Tailwind
                      </span>
                    </div>
                  </div>

                  {/* Projet 2 : Interaktiver Lebenslauf */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold ">Event Website</h4>
                      <a
                        href="https://crystalnigth.yvancorps.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs  hover:underline"
                      >
                        Live Demo
                      </a>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">
                      Development of a dynamic website for event presentation,
                      contest management, and event reservation management.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        React
                      </span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        Framer Motion
                      </span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        three.js
                      </span>
                    </div>
                  </div>

                  {/* Projet 3 : E-Shop */}
                  <div className="group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-zinc-100">
                        E-Shop Marketplace
                      </h4>
                      <a
                        href="https://mark.yvancorps.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs hover:underline"
                      >
                        Live Demo
                      </a>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">
                      Skalierbare E-Commerce-Plattform mit Fokus auf
                      Backend-Architektur und State Management.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        Next.js
                      </span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                        API Logic
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
