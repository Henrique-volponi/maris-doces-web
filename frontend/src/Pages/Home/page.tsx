import React, { useCallback } from 'react'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const HomePage: React.FC = () => {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Hero
        onViewProducts={() => scrollTo('products')}
        onContact={() => scrollTo('contact')}
      />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
