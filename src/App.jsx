
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import HomePage from "./pages/HomePage"
import BookingModal from "./components/BookingModal"
import { useState } from "react"
function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header setIsBookingOpen={setIsBookingOpen} />
      <HomePage />
      <Footer />
      <BookingModal isBookingOpen={isBookingOpen} setIsBookingOpen={setIsBookingOpen} />
    </>
  )
}

export default App
