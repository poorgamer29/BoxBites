import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Utensils, Leaf, AlertCircle, Wheat, Nut, Milk } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation - Same as home page */}
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
            <Link href="/menu" className="text-sm font-medium transition-colors text-orange-500">
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
        {/* Menu Page Header */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-600">
                  Our Menu
                </h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                  Discover our delicious, nutritious meals crafted specially for student life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meal Structure Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-2xl font-bold text-orange-600">What's in the Box?</h2>
              <p className="max-w-[700px] text-gray-600">
                Every BoxBites meal is carefully crafted to provide a complete, balanced dining experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border shadow-sm">
                <div className="rounded-full bg-orange-100 p-4">
                  <span className="text-3xl">🍚</span>
                </div>
                <h3 className="text-xl font-bold">Main Course</h3>
                <p className="text-center text-gray-600">Rice/Roti + Curry/Protein</p>
                <Image
                  src="/maincourse1.png?height=200&width=300&text=Rice+and+Butter+Chicken+Curry"
                  width={300}
                  height={200}
                  alt="Main course meal with rice and curry"
                  className="rounded-lg w-full h-auto mt-2"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border shadow-sm">
                <div className="rounded-full bg-orange-100 p-4">
                  <span className="text-3xl">🥗</span>
                </div>
                <h3 className="text-xl font-bold">Side Dish/Salad</h3>
                <p className="text-center text-gray-600">Rotates daily for variety</p>
                <Image
                  src="/salad.png?height=200&width=300&text=Fresh+Garden+Salad+with+Dressing"
                  width={300}
                  height={200}
                  alt="Fresh side salad"
                  className="rounded-lg w-full h-auto mt-2"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border shadow-sm">
                <div className="rounded-full bg-orange-100 p-4">
                  <span className="text-3xl">🍰</span>
                </div>
                <h3 className="text-xl font-bold">Pickle/Dessert</h3>
                <p className="text-center text-gray-600">On rotation for variety</p>
                <Image
                  src="/dessert.png?height=200&width=300&text=Gulab+Jamun+Dessert"
                  width={300}
                  height={200}
                  alt="Sweet dessert option"
                  className="rounded-lg w-full h-auto mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-2xl font-bold text-orange-600">Meal Gallery</h2>
              <p className="max-w-[700px] text-gray-600">Take a look at some of our popular meal combinations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/northindian.png?height=300&width=400&text=North+Indian+Thali+with+Roti+and+Paneer"
                  width={400}
                  height={300}
                  alt="North Indian Thali with roti and paneer"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">North Indian Thali</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/southindian.png?height=300&width=400&text=South+Indian+Meal+with+Dosa+and+Sambar"
                  width={400}
                  height={300}
                  alt="South Indian meal with rice and sambar"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">South Indian Meal</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/chinese.png?height=300&width=400&text=Chinese+Fusion+Hakka+Noodles"
                  width={400}
                  height={300}
                  alt="Chinese fusion meal with noodles"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Chinese Fusion</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/continental.png?height=300&width=400&text=Continental+Pasta+Box"
                  width={400}
                  height={300}
                  alt="Continental meal box with pasta"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Continental Box</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/nonveg.png?height=300&width=400&text=High+Protein+Chicken+Bowl"
                  width={400}
                  height={300}
                  alt="High protein meal with chicken"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Protein Special</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/vegan.png?height=300&width=400&text=Vegan+Vegetable+Curry+Bowl"
                  width={400}
                  height={300}
                  alt="Vegan meal with fresh vegetables"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Vegan Delight</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/jain.png?height=300&width=400&text=Jain+Special+No+Onion+Garlic"
                  width={400}
                  height={300}
                  alt="Jain special meal without onion and garlic"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Jain Special</h4>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/dessert.png?height=300&width=400&text=Assorted+Indian+Desserts"
                  width={400}
                  height={300}
                  alt="Assortment of desserts"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold">Dessert Collection</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Allergen Information */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-2xl font-bold text-orange-600">Allergen Information</h2>
              <p className="max-w-[700px] text-gray-600">
                We clearly mark all potential allergens to help you make informed choices.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 rounded-full bg-green-100 px-4 py-2">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Vegan</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-yellow-100 px-4 py-2">
                <Wheat className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">Gluten-Free</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-2">
                <Nut className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Nut-Free</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-blue-100 px-4 py-2">
                <Milk className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Dairy-Free</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-red-100 px-4 py-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium">Contains Allergens</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-600 text-center">
                <strong>Note:</strong> All our meals come with detailed ingredient lists. If you have specific
                allergies, please mention them in your profile preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Diet Customization */}
        <section className="w-full py-12 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-2xl font-bold text-orange-600">Diet Customization</h2>
              <p className="max-w-[700px] text-gray-600">Choose the meal type that suits your dietary preferences.</p>
            </div>

            <Tabs defaultValue="veg" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="veg">Vegetarian</TabsTrigger>
                <TabsTrigger value="non-veg">Non-Vegetarian</TabsTrigger>
                <TabsTrigger value="jain">Jain</TabsTrigger>
              </TabsList>
              <TabsContent value="veg" className="p-4 bg-white rounded-lg mt-4 border">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Image
                    src="/veggroup.png?height=300&width=300&text=Paneer+Butter+Masala+and+Naan"
                    width={300}
                    height={300}
                    alt="Vegetarian meal options"
                    className="rounded-lg w-full md:w-1/3 h-auto"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Vegetarian Options</h3>
                    <p className="text-gray-600 mb-4">
                      Our vegetarian meals are packed with protein and nutrients, featuring paneer, tofu, legumes, and a
                      variety of fresh vegetables.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Paneer butter masala with jeera rice</li>
                      <li>Dal makhani with garlic naan</li>
                      <li>Vegetable biryani with raita</li>
                      <li>Palak paneer with tawa roti</li>
                      <li>Chole bhature with pickle</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="non-veg" className="p-4 bg-white rounded-lg mt-4 border">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Image
                    src="/nonveggroup.png?height=300&width=300&text=Butter+Chicken+with+Naan"
                    width={300}
                    height={300}
                    alt="Non-vegetarian meal options"
                    className="rounded-lg w-full md:w-1/3 h-auto"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Non-Vegetarian Options</h3>
                    <p className="text-gray-600 mb-4">
                      Our non-vegetarian meals feature quality chicken, fish, and eggs prepared in various styles to
                      provide optimal protein and taste.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Butter chicken with jeera rice</li>
                      <li>Chicken biryani with raita</li>
                      <li>Fish curry with steamed rice</li>
                      <li>Egg curry with paratha</li>
                      <li>Chicken tikka with rumali roti</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="jain" className="p-4 bg-white rounded-lg mt-4 border">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Image
                    src="/jaingroup.png?height=300&width=300&text=Jain+Paneer+Masala+No+Onion+Garlic"
                    width={300}
                    height={300}
                    alt="Jain meal options"
                    className="rounded-lg w-full md:w-1/3 h-auto"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Jain Options</h3>
                    <p className="text-gray-600 mb-4">
                      Our Jain meals are prepared without onion, garlic, and root vegetables, while still maintaining
                      delicious flavors and nutritional value.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Jain paneer masala with jeera rice</li>
                      <li>Jain dal fry with phulka</li>
                      <li>Jain vegetable pulao with raita</li>
                      <li>Jain aloo matar with tawa roti</li>
                      <li>Jain kaju curry with steamed rice</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 flex justify-center">
              <Link href="/plans">
                <Button className="bg-orange-500 hover:bg-orange-600">Choose Your Plan</Button>
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

