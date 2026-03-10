import { useEffect } from "react"
import { Background } from "./components/Background"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Deliverables } from "./components/Deliverables"
import { ROIModal } from "./components/ROIModal"
import { Location } from "./components/Location"
import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonials"
import { SideWidgets } from "./components/SideWidgets"
import { Footer } from "./components/Footer"
import { CookieBanner } from "./components/CookieBanner"

function App() {
  useEffect(() => {
    // Send Server-Side Tracking Event (Conversions API)
    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: "PageView",
        eventUrl: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch(err => console.error("Tracking failed:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
      <Background />
      <Header />
      <SideWidgets />
      
      <main className="relative z-10">
        <Hero />
        <Deliverables />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <ROIModal />

      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
