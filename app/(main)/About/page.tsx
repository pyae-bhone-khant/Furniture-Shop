import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Award, 
  Truck, 
  Shield, 
  Heart, 
  Star,
  Clock,
  Package
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
              Since 2020
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Your
              <span className="text-amber-600"> Dream Spaces</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're more than just a furniture store. We're your partners in creating 
              beautiful, functional spaces that reflect your unique style and enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Explore Our Collection
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Visit Our Showroom
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, label: "Products Sold", value: "10,000+" },
              { icon: Users, label: "Happy Customers", value: "5,000+" },
              { icon: Star, label: "Average Rating", value: "4.8/5" },
              { icon: Award, label: "Awards Won", value: "15+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-amber-100 text-amber-800">Our Story</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  From a Small Workshop to Your Trusted Furniture Partner
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    What started as a small woodworking workshop in 2020 has grown into 
                    one of the most trusted furniture brands in the region. Our passion 
                    for craftsmanship and commitment to quality has remained unchanged.
                  </p>
                  <p>
                    We believe that furniture should be more than just functional – it should 
                    tell a story, create memories, and make your house feel like home. 
                    Every piece in our collection is carefully selected or crafted with 
                    this philosophy in mind.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers who trust us to 
                    provide beautiful, durable furniture that stands the test of time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Heart className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-2xl font-bold">Made with Love</p>
                    <p className="text-lg">Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from selecting materials 
              to serving our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Quality First",
                description: "We never compromise on quality. Every piece is inspected to meet our high standards."
              },
              {
                icon: Users,
                title: "Customer Centric",
                description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Fast, safe, and reliable delivery to your doorstep, anywhere in the region."
              },
              {
                icon: Clock,
                title: "Timeless Design",
                description: "We create furniture that remains beautiful and functional for years to come."
              },
              {
                icon: Heart,
                title: "Sustainable Practices",
                description: "We source responsibly and use eco-friendly materials whenever possible."
              },
              {
                icon: Award,
                title: "Expert Craftsmanship",
                description: "Our team of skilled craftsmen brings decades of experience to every piece."
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                    <value.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The People Behind Your Perfect Space
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of designers, craftsmen, and customer service experts 
              are here to help you create your dream space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                description: "With 15 years in furniture design, Sarah brings vision and passion to every project."
              },
              {
                name: "Michael Chen",
                role: "Head Craftsman",
                description: "Master woodworker with over 20 years of experience creating bespoke furniture pieces."
              },
              {
                name: "Emily Rodriguez",
                role: "Customer Experience Lead",
                description: "Dedicated to ensuring every customer has an exceptional experience from start to finish."
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Let us help you create the home of your dreams. Browse our collection 
            or schedule a consultation with our design experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}