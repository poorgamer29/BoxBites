import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Leaf, Wallet, Calendar, Truck, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-orange-500">
              <div className="flex h-full w-full items-center justify-center">
                <Utensils className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold">BoxBites</span>
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
                viewBox="0 0 24 0 24"
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-600">
                    Smart Meals, Packed for Student Life
                  </h1>
                  <p className="text-xl text-gray-600 md:text-2xl">Tastier Than the Canteen. Healthier Than Takeout.</p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">Say goodbye to bland mess food and expensive Swiggy orders.</p>
                  <p className="font-bold text-gray-800">Nutritious, home-style meals at student-friendly prices.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/plans">
                    <Button size="lg" className="gap-1 bg-orange-500 hover:bg-orange-600">
                      <span>📦</span> Try Our Starter Pack
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-500">3-day trial pack. No commitment.</p>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:aspect-square shadow-lg">
                <Image
                  src="/homestyle.png?height=800&width=800&text=Fresh+Homestyle+Meal+in+Vibrant+Box"
                  width={800}
                  height={800}
                  alt="A freshly prepared meal in a vibrant lunch box"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BoxBites Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-600">
                  Why Choose BoxBites?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're revolutionizing student meals with quality, convenience, and affordability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Delicious Variety</h3>
                <p className="text-center text-gray-600">Rotating menus with veg & non-veg options</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Leaf className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Health-Focused</h3>
                <p className="text-center text-gray-600">Balanced meals curated by nutritionists</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Wallet className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Affordable</h3>
                <p className="text-center text-gray-600">Plans starting at just ₹79 per meal</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Flexible Plans</h3>
                <p className="text-center text-gray-600">Weekly, monthly, and semester-long options</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <Truck className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Delivered Hot & Fresh</h3>
                <p className="text-center text-gray-600">Right to your dorm or apartment</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-orange-100 p-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Quality Guaranteed</h3>
                <p className="text-center text-gray-600">Fresh ingredients and hygienic preparation</p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/diverse.png?height=300&width=400&text=Diverse+Indian+Cuisine+Options"
                  width={400}
                  height={300}
                  alt="Various food options available at BoxBites"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-orange-50">
                  <h3 className="font-bold text-lg">Diverse Menu Options</h3>
                  <p className="text-sm text-gray-600">From North Indian to South Indian cuisines</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/studentsenjoying.png?height=300&width=400&text=Students+Enjoying+Meals+Together"
                  width={400}
                  height={300}
                  alt="Students enjoying BoxBites meals"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-orange-50">
                  <h3 className="font-bold text-lg">Perfect for Student Life</h3>
                  <p className="text-sm text-gray-600">Fits your busy schedule and budget</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/delivery.png?height=300&width=400&text=BoxBites+Delivery+Person+at+Dorm"
                  width={400}
                  height={300}
                  alt="BoxBites delivery service"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-orange-50">
                  <h3 className="font-bold text-lg">Convenient Delivery</h3>
                  <p className="text-sm text-gray-600">Right to your doorstep, on time, every time</p>
                </div>
              </div>
            </div>

            {/* Trust Badge Section */}
            <div className="mt-16 flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold text-center">Trusted by Students Across Campus</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Nutritionist Approved</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Fresh Ingredients</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Budget-Friendly</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Eco-Friendly Packaging</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 flex flex-col items-center justify-center space-y-4 bg-orange-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center text-orange-600">Ready to Try BoxBites?</h3>
              <p className="text-center text-gray-700 max-w-2xl">
                Join thousands of students who have made the smart choice for their daily meals. Start with our trial
                pack and taste the difference!
              </p>
              <Link href="/plans">
                <Button size="lg" className="mt-4 bg-orange-500 hover:bg-orange-600">
                  Get Started Today
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

