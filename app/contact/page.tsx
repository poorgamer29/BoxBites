import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation - Same as other pages */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-orange-500">
              <div className="flex h-full w-full items-center justify-center">
                <Utensils className="h-5 w-5 text-white" />
              </div>
            </div>
            <Link href="/">
              <span className="text-xl font-bold">BoxBites</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors hover:text-orange-500">
              Menu
            </Link>
            <Link href="/plans" className="text-sm font-medium transition-colors hover:text-orange-500">
              Plans
            </Link>
            <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-orange-500">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors text-orange-500">
              Contact
            </Link>
            <Link href="/faq" className="text-sm font-medium transition-colors hover:text-orange-500">
              FAQ
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm" className="hidden md:flex bg-orange-500 hover:bg-orange-600">
              Sign up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Contact Page Header */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-600">
                  Contact Us
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  We're here to help with any questions or feedback you might have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details and Form */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-orange-600">Customer Support</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 p-3 mt-1">
                      <Phone className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">WhatsApp Support</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Fastest way to reach us!</p>
                      <Button className="mt-3 bg-green-500 hover:bg-green-600">Chat on WhatsApp</Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 p-3 mt-1">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600">support@boxbites.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 p-3 mt-1">
                      <MapPin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Office Address</h3>
                      <p className="text-gray-600">123 Campus Road, Student Hub</p>
                      <p className="text-gray-600">Bangalore, Karnataka 560001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100 p-3 mt-1">
                      <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Working Hours</h3>
                      <p className="text-gray-600">Monday to Saturday: 9 AM - 8 PM</p>
                      <p className="text-gray-600">Sunday: 10 AM - 4 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Google+Maps+Location"
                    width={500}
                    height={300}
                    alt="BoxBites office location on Google Maps"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-orange-600">Send Us a Message</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to newsletter
                      </Label>
                      <p className="text-sm text-gray-500">
                        Get meal updates, offers, and nutrition tips in your inbox.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick FAQs */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">Quick FAQs</h2>
              <p className="max-w-[700px] text-gray-600">Find quick answers to common questions.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">How do I track my delivery?</h3>
                <p className="text-gray-600">
                  You can track your delivery in real-time through our app or website once you've placed an order.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">Can I customize my meals?</h3>
                <p className="text-gray-600">
                  Yes, you can customize your meals based on dietary preferences and restrictions through your account
                  settings.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">What if I need to cancel an order?</h3>
                <p className="text-gray-600">
                  Orders can be canceled up to 2 hours before the scheduled delivery time through your account.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">Do you deliver to all campuses?</h3>
                <p className="text-gray-600">
                  We currently deliver to major campuses in Bangalore, with plans to expand to more locations soon.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-gray-50 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-2 items-center">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-orange-500">
              <div className="flex h-full w-full items-center justify-center">
                <Utensils className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold">BoxBites</span>
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            &copy; {new Date().getFullYear()} BoxBites. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-orange-500">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-orange-500">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-orange-500">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

