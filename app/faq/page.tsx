import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
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
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-orange-500">
              Contact
            </Link>
            <Link href="/faq" className="text-sm font-medium transition-colors text-orange-500">
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
        {/* FAQ Page Header */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-600">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Find answers to common questions about BoxBites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="w-full py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input type="search" placeholder="Search for answers..." className="pl-10 pr-4 py-2" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg border border-orange-100">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Orders+and+Delivery"
                  width={100}
                  height={100}
                  alt="Orders and Delivery icon"
                  className="mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Orders & Delivery</h3>
                <p className="text-center text-gray-600 text-sm">
                  Questions about ordering, tracking, and receiving your meals
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg border border-orange-100">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Meal+Plans"
                  width={100}
                  height={100}
                  alt="Meal Plans icon"
                  className="mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Meal Plans</h3>
                <p className="text-center text-gray-600 text-sm">
                  Information about our subscription plans and pricing
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg border border-orange-100">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Food+and+Nutrition"
                  width={100}
                  height={100}
                  alt="Food and Nutrition icon"
                  className="mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Food & Nutrition</h3>
                <p className="text-center text-gray-600 text-sm">
                  Details about ingredients, allergens, and nutritional information
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg border border-orange-100">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=Account+and+Billing"
                  width={100}
                  height={100}
                  alt="Account and Billing icon"
                  className="mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Account & Billing</h3>
                <p className="text-center text-gray-600 text-sm">
                  Help with your account, payments, and billing issues
                </p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-orange-600">Common Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How fresh is the food?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      All our meals are prepared fresh daily using locally sourced ingredients. We never use
                      preservatives or artificial additives. Our meals are cooked in the morning and delivered to you
                      the same day to ensure maximum freshness and taste.
                    </p>
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Fresh+Ingredients+Preparation"
                      width={400}
                      height={200}
                      alt="Fresh ingredients being prepared in BoxBites kitchen"
                      className="rounded-lg mt-4 w-full h-auto"
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Are there vegetarian-only options?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, we offer fully vegetarian meal plans. You can select your preference (Vegetarian,
                      Non-Vegetarian, or Jain) when signing up or modify it anytime in your account settings. Our
                      vegetarian meals are prepared in separate sections of our kitchen to avoid cross-contamination.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if I have allergies?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      We take allergies very seriously. You can specify your allergies in your account profile, and our
                      system will automatically filter out meals containing those allergens. All our meals come with
                      detailed ingredient lists and allergen information. For severe allergies, please contact our
                      customer support team for personalized assistance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do deliveries work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      We deliver meals daily between 11 AM and 1 PM to ensure you get your lunch on time. You can also
                      customize your delivery schedule in your account settings. Our delivery partners use insulated
                      bags to keep your food at the right temperature. You'll receive real-time notifications when your
                      order is on the way and when it arrives.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I pause my subscription?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, you can pause your subscription for up to 30 days if you're going home for holidays or won't
                      be needing meals for a while. Simply go to your account settings and select the "Pause
                      Subscription" option. You can also specify the date when you want your deliveries to resume.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>What's your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      You can cancel your subscription at any time through your account settings. For weekly plans,
                      cancellations must be made at least 24 hours before the next billing cycle. For monthly and
                      semester plans, cancellations must be made at least 3 days before the next billing cycle. Refunds
                      are processed according to our refund policy, which you can find in our Terms of Service.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Do you cater to special dietary needs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Yes, we offer options for various dietary preferences including vegetarian, non-vegetarian, and
                      Jain. We also accommodate common dietary restrictions like gluten-free, dairy-free, and low-carb.
                      You can set your dietary preferences in your account profile, and our system will show you
                      compatible meal options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>How do I report issues with my order?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      If you experience any issues with your order, please contact our customer support team immediately
                      through WhatsApp, email, or the in-app chat. We aim to resolve all issues within 2 hours. For
                      quality or taste concerns, please provide photos if possible. We offer refunds or replacements for
                      valid complaints as per our customer satisfaction guarantee.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Policy Section */}
            <div className="max-w-3xl mx-auto mt-12">
              <h2 className="text-2xl font-bold mb-6 text-orange-600">Policies</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-orange-50 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-bold mb-2">Refund Policy</h3>
                  <p className="text-gray-600 mb-4">
                    We offer full refunds for missed or significantly delayed deliveries, and for quality issues
                    reported within 2 hours of delivery.
                  </p>
                  <Link href="/refund-policy">
                    <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                      Read Full Policy
                    </Button>
                  </Link>
                </div>

                <div className="p-6 bg-orange-50 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-bold mb-2">Delivery Timelines</h3>
                  <p className="text-gray-600 mb-4">
                    Standard delivery hours are 11 AM to 1 PM daily. Special delivery windows can be arranged for dinner
                    or early breakfast.
                  </p>
                  <Link href="/delivery-policy">
                    <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                      Read Full Policy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="max-w-3xl mx-auto mt-12 p-8 bg-orange-100 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Our customer support team is ready to help you with any other questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-orange-500 hover:bg-orange-600">Contact Support</Button>
                </Link>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Live Chat
                </Button>
              </div>
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

