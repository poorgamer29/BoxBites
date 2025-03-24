import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Star, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
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
            <Link href="/testimonials" className="text-sm font-medium transition-colors text-orange-500">
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
        {/* Testimonials Page Header */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-600">
                  Student Reviews
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Hear what our customers have to say about BoxBites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="w-full py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex items-center gap-1">
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-2xl font-bold">Average: 4.8/5</p>
              <p className="text-gray-600">Based on 500+ student reviews</p>
            </div>
          </div>
        </section>

        {/* User Quotes */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">What Students Say</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Aditi+MBA"
                        width={100}
                        height={100}
                        alt="Aditi, MBA Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Aditi</p>
                      <p className="text-sm text-gray-600">MBA Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "Tastes like home! And it fits my budget. BoxBites has been a lifesaver during my busy MBA
                    schedule."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Rohan+Eng"
                        width={100}
                        height={100}
                        alt="Rohan, Engineer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Rohan</p>
                      <p className="text-sm text-gray-600">Engineer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "I finally stopped skipping meals. The food is delicious and the delivery is always on time, even
                    during exam weeks."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Priya+Med"
                        width={100}
                        height={100}
                        alt="Priya, Medical Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Priya</p>
                      <p className="text-sm text-gray-600">Medical Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "As a medical student, I have no time to cook. BoxBites provides healthy, balanced meals that keep
                    me going through long hospital shifts."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Arjun+CS"
                        width={100}
                        height={100}
                        alt="Arjun, Computer Science Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Arjun</p>
                      <p className="text-sm text-gray-600">Computer Science Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "Great variety and the app makes it super easy to customize my meals. Would love more spicy options
                    though!"
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Neha+Law"
                        width={100}
                        height={100}
                        alt="Neha, Law Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Neha</p>
                      <p className="text-sm text-gray-600">Law Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "The semester plan saved me so much money compared to eating out. The food quality is consistent and
                    delicious."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src="/placeholder.svg?height=100&width=100&text=Vikram+Design"
                        width={100}
                        height={100}
                        alt="Vikram, Design Student"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Vikram</p>
                      <p className="text-sm text-gray-600">Design Student</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <blockquote className="italic text-gray-700">
                    "I appreciate the eco-friendly packaging. The food is fresh and the portion sizes are perfect for
                    me."
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-orange-500 hover:bg-orange-600">Load More Reviews</Button>
            </div>
          </div>
        </section>

        {/* Student Photos */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">Happy Students, Happy Meals</h2>
              <p className="max-w-[700px] text-gray-600">See our customers enjoying BoxBites meals across campus.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Student+Eating+Lunch"
                  width={300}
                  height={300}
                  alt="Student enjoying BoxBites meal in campus cafeteria"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Group+Lunch+with+BoxBites"
                  width={300}
                  height={300}
                  alt="Group of students sharing BoxBites meals"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Student+in+Dorm+Room"
                  width={300}
                  height={300}
                  alt="Student enjoying BoxBites meal in dorm room"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Student+Studying+with+Meal"
                  width={300}
                  height={300}
                  alt="Student studying while eating BoxBites meal"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Library+Lunch+Break"
                  width={300}
                  height={300}
                  alt="Student taking a lunch break with BoxBites in library"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Campus+Outdoor+Meal"
                  width={300}
                  height={300}
                  alt="Student enjoying BoxBites meal outdoors on campus"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Delivery+Handoff"
                  width={300}
                  height={300}
                  alt="BoxBites delivery person handing meal to student"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Happy+Student+Selfie"
                  width={300}
                  height={300}
                  alt="Student taking selfie with BoxBites meal"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">Video Testimonials</h2>
              <p className="max-w-[700px] text-gray-600">Watch 30-second testimonials from real students.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-100 shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Aditi+Video+Testimonial"
                  width={500}
                  height={300}
                  alt="Video testimonial from Aditi about her BoxBites experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-orange-500/90 p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                  <p className="font-medium">Aditi's Experience</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-100 shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Rohan+Video+Testimonial"
                  width={500}
                  height={300}
                  alt="Video testimonial from Rohan about his BoxBites experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-orange-500/90 p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                  <p className="font-medium">Rohan's Story</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-100 shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Priya+Video+Testimonial"
                  width={500}
                  height={300}
                  alt="Video testimonial from Priya about her BoxBites experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-orange-500/90 p-3">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                  <p className="font-medium">Priya's Journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center p-8 bg-orange-100 rounded-xl">
              <h2 className="text-2xl font-bold text-orange-600">Join the BoxBites Family</h2>
              <p className="max-w-[700px] text-gray-700">
                Experience the difference that thousands of students are raving about.
              </p>
              <Link href="/plans">
                <Button size="lg" className="mt-4 bg-orange-500 hover:bg-orange-600">
                  Try BoxBites Today
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

