"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Users,
  Utensils,
  Camera,
  Trees,
  Mountain,
  Building,
  ShoppingBag,
  Church,
  Castle,
  MessageCircle,
  Instagram,
  ExternalLink,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MuchaanWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/images/night-entrance.jpeg",
    "/images/day-entrance.jpeg",
    "/images/entrance-gate.jpeg",
    "/placeholder.svg?height=800&width=1200&text=Cozy+Seating+Area",
    "/placeholder.svg?height=800&width=1200&text=Garden+View",
  ]

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#home" className="flex items-center">
              <Image
                src="/images/logo.jpeg"
                alt="Muchaan Resort Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-3">
                <div className="text-xl font-bold text-amber-400">MUCHAAN</div>
                <div className="text-xs text-stone-600 hidden sm:block">Stay Dine Unwind</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-amber-100 hover:text-amber-300 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-amber-100 hover:text-amber-300 transition-colors">
                About
              </Link>
              <Link href="#gallery" className="text-amber-100 hover:text-amber-300 transition-colors">
                Gallery
              </Link>
              <Link href="#explore" className="text-amber-100 hover:text-amber-300 transition-colors">
                Explore
              </Link>
              <Link href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors">
                Contact
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-stone-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="#home"
                  className="block px-3 py-2 text-stone-700 hover:text-amber-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="block px-3 py-2 text-stone-700 hover:text-amber-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#gallery"
                  className="block px-3 py-2 text-stone-700 hover:text-amber-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="#explore"
                  className="block px-3 py-2 text-stone-700 hover:text-amber-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-stone-700 hover:text-amber-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">Book Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Muchaan Resort - Slide ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 text-amber-100">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide drop-shadow-lg">MUCHAAN</h1>
          <p className="text-2xl md:text-3xl mb-6 font-medium drop-shadow-md text-amber-200">Stay. Dine. Unwind.</p>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto drop-shadow-md">
            A peaceful countryside escape in Nainwan, near Garhshankar, Punjab.
          </p>
          <p className="text-base md:text-lg mb-8 drop-shadow-md">
            Just 1.5 hours from Chandigarh — perfect for weekend stays, get-togethers, and quiet retreats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg shadow-lg">
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-700 px-8 py-3 text-lg bg-transparent shadow-lg"
            >
              Plan an Event
            </Button>
          </div>
        </div>
      </section>

      {/* About Muchaan */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">About Muchaan</h2>
              <p className="text-lg text-stone-600 mb-6">Muchaan (ਮੁਚਾਣ) means a cozy, peaceful corner.</p>
              <p className="text-base text-stone-600 mb-6 leading-relaxed">
                Located just 15 minutes from Garhshankar and 1.5 hrs from Chandigarh, Muchaan blends home-style warmth,
                nature, and quiet luxury in a countryside setting.
              </p>
              <div className="text-lg text-amber-800 font-medium italic">ਮੁਚਾਣ – ਜਿੱਥੇ ਸੁਆਦ, ਆਰਾਮ ਤੇ ਸੁਕੂਨ ਮਿਲਦੇ ਹਨ।</div>
              <p className="text-sm text-stone-500 mt-2">Muchaan – Jithe swaad, aaraam te sukoon milde han.</p>
            </div>
            <div className="relative">
              <Image
                src="/images/day-entrance.jpeg"
                alt="Cozy seating area at Muchaan"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Muchaan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Why Choose Muchaan</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Comfortable Stays</h3>
                <p className="text-stone-600 text-sm">
                  Rustic charm with modern comforts — ideal for families, couples, or groups.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Home-style Indian Meals</h3>
                <p className="text-stone-600 text-sm">Punjabi favorites and fresh seasonal dishes.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Private Lawn for Gatherings</h3>
                <p className="text-stone-600 text-sm">Ideal for intimate events and quiet celebrations.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-rose-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Photo-Ready Corners</h3>
                <p className="text-stone-600 text-sm">Rustic and natural spaces for photos and Instagram.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore Nearby */}
      <section id="explore" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Explore Nearby</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Church className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Anandpur Sahib</h3>
                    <p className="text-sm text-stone-600 mb-2">Historic town & Virasat-e-Khalsa</p>
                    <Badge variant="secondary" className="text-xs">
                      ~1.5 hrs
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Mountain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Nangal Dam</h3>
                    <p className="text-sm text-stone-600 mb-2">Scenic riverside views</p>
                    <Badge variant="secondary" className="text-xs">
                      ~1.5 hrs
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Church className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Naina Devi Temple</h3>
                    <p className="text-sm text-stone-600 mb-2">Shaktipeeth with views</p>
                    <Badge variant="secondary" className="text-xs">
                      ~2 hrs
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Jejo Village</h3>
                    <p className="text-sm text-stone-600 mb-2">Ghost town of Punjab</p>
                    <Badge variant="secondary" className="text-xs">
                      ~1 hr
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Castle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Garhshankar Fort</h3>
                    <p className="text-sm text-stone-600 mb-2">Local heritage</p>
                    <Badge variant="secondary" className="text-xs">
                      15 mins
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-1">Nawanshahr Market</h3>
                    <p className="text-sm text-stone-600 mb-2">For local shopping</p>
                    <Badge variant="secondary" className="text-xs">
                      30 mins
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Gallery</h2>
            <p className="text-stone-600 mb-4">
              Instagram Handle:{" "}
              <Link href="#" className="text-amber-700 hover:underline">
                @muchaanresort
              </Link>{" "}
              | Hashtag: <span className="text-amber-700">#MuchaanMoments</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Rooms at Muchaan"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gardens at Muchaan"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Bonfire at Muchaan"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Sunset at Muchaan"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Food at Muchaan"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Guest experiences"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Lawn area"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Peaceful corners"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-8">Plan Your Visit</h2>
          <p className="text-lg text-stone-600 mb-8">Muchaan is ideal for:</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-stone-700">Weekend stays</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-stone-700">Family getaways</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-stone-700">Couple retreats</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-stone-700">Small celebrations</span>
            </div>
          </div>

          <div className="bg-stone-50 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="text-lg font-medium text-stone-800">Nainwan, near Garhshankar, Punjab</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-600" />
                <span className="text-stone-700">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-600" />
                <span className="text-stone-700">muchaanresort@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3">
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 bg-transparent"
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">MUCHAAN</h3>
              <p className="text-stone-400 mb-4">Aa jao, thoda jeya sukoon le lo.</p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="text-stone-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-stone-400 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-stone-400 hover:text-white">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-stone-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#" className="block text-stone-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-stone-400 hover:text-white transition-colors">
                  Gallery
                </Link>
                <Link href="#" className="block text-stone-400 hover:text-white transition-colors">
                  Explore
                </Link>
                <Link href="#" className="block text-stone-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-stone-400">
                <p>Nainwan, near Garhshankar, Punjab</p>
                <p>+91-XXXXXXXXXX</p>
                <p>muchaanresort@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p>&copy; 2025 Muchaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
