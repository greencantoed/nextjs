"use client";

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from 'next/image'

export default function Greencanto() {
  const [activeSection, setActiveSection] = useState('home')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'mission', 'who', 'join', 'contact', 'faq']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'La Nostra Missione', id: 'mission' },
    { label: 'Chi Siamo', id: 'who' },
    { label: 'Unisciti a Noi', id: 'join' },
    { label: 'Contattaci', id: 'contact' },
    { label: 'FAQ', id: 'faq' },
  ]

  return (
    <div className="flex min-h-screen bg-[#FAF0E6]">
      {/* Left side - Large image placeholder */}
      <div className="hidden lg:block w-[960px] h-[6480px] bg-[#2D677D] fixed left-0 top-0">
        <Image
          src="/placeholder.svg?height=6480&width=960"
          alt="Large placeholder image"
          width={960}
          height={6480}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-1 lg:ml-[960px]">
        {/* Navigation */}
        <nav className="bg-[#2D677D] text-white p-4 sticky top-0 z-10">
          <ul className="flex justify-end space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className={`text-white hover:text-[#CEF1BD] ${activeSection === item.id ? 'bg-[#CEF1BD] text-[#2D677D]' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content sections */}
        <main className="space-y-32 py-16">
          {/* Home section */}
          <section id="home" className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-[#2D677D] mb-4">Greencanto</h1>
              <p className="text-xl text-[#2D677D] mb-4">Progetti agrivoltaici serializzati localizzati in Sicilia</p>
              <p className="text-lg text-[#2D677D] mb-8">Un'impresa sociale per il recupero dei terreni agricoli abbandonati.</p>
              <Button className="bg-[#2D677D] text-white hover:bg-[#CEF1BD] hover:text-[#2D677D]" onClick={() => scrollTo('mission')}>
                Learn More <ChevronDown className="ml-2" />
              </Button>
            </div>
          </section>

          {/* Our Mission section */}
          <section id="mission" className="min-h-screen flex items-center justify-center p-8 bg-[#CEF1BD]">
            <Card className="max-w-2xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-[#2D677D] mb-4">La Nostra Missione</h2>
                <p className="text-[#2D677D]">
                  La nostra missione è chiara: rigenerare terreni abbandonati e farli rifiorire grazie a investimenti sostenibili. Offriamo agli utenti l'opportunità di acquistare quote di aziende agricole, promuovendo un'agricoltura innovativa e sostenibile. Parallelamente, sosteniamo progetti di riqualificazione ambientale, con un focus speciale sulla Sicilia.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Who are we section */}
          <section id="who" className="min-h-screen flex items-center justify-center p-8">
            <Card className="max-w-2xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-[#2D677D] mb-4">Chi Siamo</h2>
                <p className="text-[#2D677D]">
                  Greencanto è nata dalla visione di Edoardo Cumitini e Giuseppe Marletta, professionisti con esperienza in agricoltura, finanza e sostenibilità. Siamo un team di esperti, uniti dall'obiettivo di creare un'agricoltura che rispetti l'ambiente, valorizzi le risorse naturali e generi benefici economici per i nostri investitori.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Join us now! section */}
          <section id="join" className="min-h-screen flex items-center justify-center p-8 bg-[#CEF1BD]">
            <Card className="max-w-2xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-3xl font-bold text-[#2D677D] mb-4">Unisciti a Noi</h2>
                <p className="text-[#2D677D] mb-6">
                  Greencanto non è solo un'opportunità di investimento; è una comunità di persone che credono in un futuro più sostenibile. Con il supporto del nostro team esperto, ci impegniamo a trasformare terreni abbandonati in risorse produttive, offrendo un ritorno economico tangibile ai nostri investitori e un impatto positivo sull'ambiente.
                </p>
                <Button className="bg-[#2D677D] text-white hover:bg-[#FAF0E6] hover:text-[#2D677D]">
                  Vai alla Pagina Privata
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contacts section */}
          <section id="contact" className="min-h-screen flex items-center justify-center p-8">
            <Card className="max-w-2xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-[#2D677D] mb-4">Contattaci</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Nome" required className="w-full p-2 border rounded" />
                  <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
                  <textarea placeholder="Messaggio" required className="w-full p-2 border rounded h-32"></textarea>
                  <Button type="submit" className="bg-[#2D677D] text-white hover:bg-[#CEF1BD] hover:text-[#2D677D]">
                    Invia
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* FAQ section */}
          <section id="faq" className="min-h-screen flex items-center justify-center p-8 bg-[#CEF1BD]">
            <Card className="max-w-2xl">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-[#2D677D] mb-4">Domande Frequenti</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "Cos'è l'agrivoltaico?",
                      answer: "L'agrivoltaico combina l'energia solare con l'agricoltura, permettendo di utilizzare lo stesso terreno per produrre energia elettrica e coltivare. Questo approccio innovativo massimizza l'uso della terra, genera energia pulita e sostiene l'agricoltura sostenibile."
                    },
                    {
                      question: "Quali sono i benefici dell'acquisto di quote?",
                      answer: "Acquistando quote, contribuisci allo sviluppo di terreni agricoli abbandonati, supportando l'agricoltura sostenibile e la rigenerazione ambientale. Inoltre, puoi ricevere ritorni finanziari dai profitti generati dall'azienda agricola."
                    },
                    {
                      question: "Come posso iniziare a investire?",
                      answer: "Per iniziare a investire, basta scaricare l'app, registrarsi, scegliere il progetto agricolo di interesse e acquistare le quote disponibili. Potrai monitorare i tuoi investimenti direttamente dall'app."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-[#2D677D] pb-2">
                      <button
                        className="flex justify-between items-center w-full text-left font-bold text-[#2D677D]"
                        onClick={() => toggleFaq(index)}
                      >
                        {faq.question}
                        {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      {openFaq === index && (
                        <p className="mt-2 text-[#2D677D]">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#2D677D] text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Greencanto. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}