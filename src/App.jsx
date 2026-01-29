import React, { useEffect, useState } from 'react'
import Advantages from './components/Advantages/Advantages'
import ContactSection from './components/ContactSection/ContactSection'
import FAQSection from './components/FAQSection/FAQSection'
import FloatingContactButton from './components/FloatingContactButton/FloatingContactButton'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Loader from './components/Loader/Loader'
import LocationSection from './components/LocationSection/LocationSection'
import Navbar from './components/Navbar/Navbar'
import { LANGUAGES, translations } from './data/translations'

const SECTION_IDS = {
  hero: 'hero',
  advantages: 'advantages',
  howItWorks: 'how-it-works',
  location: 'location',
  faq: 'faq',
  contact: 'contact',
}

function App() {
  const [language, setLanguage] = useState(LANGUAGES.uz)
  const [loading, setLoading] = useState(true)

  const t = translations[language.toLowerCase()]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <header>
        <Navbar
          language={language}
          setLanguage={setLanguage}
          onNavigate={handleScrollTo}
          labels={t.navbar}
        />
      </header>

      <main>
        <section id={SECTION_IDS.hero}>
          <Hero content={t.hero} onPrimaryClick={() => handleScrollTo(SECTION_IDS.advantages)} />
        </section>

        <section id={SECTION_IDS.advantages}>
          <Advantages content={t.advantages} />
        </section>

        <section id={SECTION_IDS.howItWorks}>
          <HowItWorks content={t.howItWorks} />
        </section>

        <section id={SECTION_IDS.location}>
          <LocationSection content={t.location} />
        </section>

        <section id={SECTION_IDS.faq}>
          <FAQSection content={t.faq} />
        </section>

        <section id={SECTION_IDS.contact}>
          <ContactSection content={t.contact} />
        </section>
      </main>

      <FloatingContactButton />

      <footer>
        <Footer content={t.footer} navLabels={t.navbar} onNavigate={handleScrollTo} />
      </footer>
    </>
  )
}

export default App
