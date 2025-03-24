import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Check, Calendar, CalendarDays, GraduationCap } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PlansPage() {
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
            <Link href="/plans" className="text-sm font-medium transition-colors text-orange-500">
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
        {/* Plans Page Header */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-600">
                  Choose Your Plan
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Flexible meal plans designed to fit your student lifestyle and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Discount Banner */}
        <div className="bg-orange-500 text-white py-3 text-center">
          <p className="font-bold text-lg">Get 10% off your first month's subscription! Use code: NEWBIE10</p>
        </div>

        {/* Plan Options */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Weekly Plan */}
              <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-bold">📆 Weekly Plan</h3>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold">₹550</p>
                  <p className="text-gray-600">7 meals</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>1 meal per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Flexible delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Weekly menu rotation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Cancel anytime</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-orange-500 hover:bg-orange-600">Choose Weekly</Button>
              </div>

              {/* Monthly Plan */}
              <div className="flex flex-col p-6 bg-orange-50 rounded-lg border border-orange-200 shadow-md relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-bold">📅 Monthly Plan</h3>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold">₹1999</p>
                  <p className="text-gray-600">30 meals</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>1 meal per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Flexible delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Full menu access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Save ₹201 compared to weekly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Priority delivery</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-orange-500 hover:bg-orange-600">Choose Monthly</Button>
              </div>

              {/* Semester Plan */}
              <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-bold">🎓 Semester Plan</h3>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold">₹5999</p>
                  <p className="text-gray-600">90 meals</p>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>1 meal per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Flexible delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Full menu access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Save ₹1001 compared to monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Priority delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Free weekend dessert</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-orange-500 hover:bg-orange-600">Choose Semester</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Starter Pack Option */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg border shadow-md">
              <div className="md:w-1/3">
                <Image
                  src="/plans.png?height=300&width=300&text=3+Meal+Variety+Starter+Pack"
                  width={300}
                  height={300}
                  alt="BoxBites Starter Pack with 3 different meals"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Try 3 meals for just ₹99</h3>
                <p className="text-gray-600 mb-4">
                  Not sure which plan is right for you? Try our starter pack with 3 different meals to experience the
                  BoxBites difference before committing to a full plan.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>3 different meal varieties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Delivered over 3 consecutive days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>No commitment required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>₹100 credit towards your first plan</span>
                  </li>
                </ul>
                <Button className="bg-orange-500 hover:bg-orange-600">Get Starter Pack</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">Plan Comparison</h2>
              <p className="max-w-[700px] text-gray-600">Compare our plans to find the perfect fit for your needs.</p>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Detailed comparison of BoxBites meal plans.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Weekly Plan</TableHead>
                    <TableHead>Monthly Plan</TableHead>
                    <TableHead>Semester Plan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Price</TableCell>
                    <TableCell>₹550</TableCell>
                    <TableCell>₹1999</TableCell>
                    <TableCell>₹5999</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Number of Meals</TableCell>
                    <TableCell>7 meals</TableCell>
                    <TableCell>30 meals</TableCell>
                    <TableCell>90 meals</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Price per Meal</TableCell>
                    <TableCell>₹79</TableCell>
                    <TableCell>₹67</TableCell>
                    <TableCell>₹67</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Delivery Frequency</TableCell>
                    <TableCell>Daily or as scheduled</TableCell>
                    <TableCell>Daily or as scheduled</TableCell>
                    <TableCell>Daily or as scheduled</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Menu Access</TableCell>
                    <TableCell>Limited</TableCell>
                    <TableCell>Full</TableCell>
                    <TableCell>Full</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Delivery Priority</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Priority</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Special Perks</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Free weekend dessert</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Savings</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>₹201 vs Weekly</TableCell>
                    <TableCell>₹1001 vs Monthly</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-600">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-600">Common questions about our meal plans.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">Can I change my plan later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time through your account settings.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">How do deliveries work?</h3>
                <p className="text-gray-600">
                  We deliver meals daily between 11 AM and 1 PM, or you can customize your delivery schedule.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">Can I pause my subscription?</h3>
                <p className="text-gray-600">
                  Yes, you can pause your subscription for up to 30 days if you're going home for holidays.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-bold mb-2">Are there any hidden fees?</h3>
                <p className="text-gray-600">
                  No, the price you see is all-inclusive with no additional delivery or service charges.
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

