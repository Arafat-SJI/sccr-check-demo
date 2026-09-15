import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection/FAQSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center text-white overflow-hidden">
          <Image
            src="/stitch/hero-bg.jpg"
            alt="Horologe Genève Hero"
            fill
            priority
            sizes="100vw"
            className="z-0 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 text-center p-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
              Horologe Genève
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              The Art of Time, Reimagined.
            </p>
            <Link href="/product" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Discover Our Collection
            </Link>
          </div>
        </section>

        {/* Collection Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-tight">
              Our Exquisite Collections
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Collection Card 1 */}
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/stitch/collection-1.jpg"
                  alt="Collection 1"
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">The Heritage Series</h3>
                  <p className="text-gray-700 mb-4">Timeless elegance inspired by classic designs.</p>
                  <Link href="/collection/heritage" className="text-blue-600 hover:underline">
                    View Collection
                  </Link>
                </div>
              </div>
              {/* Example Collection Card 2 */}
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/stitch/collection-2.jpg"
                  alt="Collection 2"
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Modern Chronographs</h3>
                  <p className="text-gray-700 mb-4">Precision and performance for the contemporary adventurer.</p>
                  <Link href="/collection/modern" className="text-blue-600 hover:underline">
                    View Collection
                  </Link>
                </div>
              </div>
              {/* Example Collection Card 3 */}
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/stitch/collection-3.jpg"
                  alt="Collection 3"
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Limited Editions</h3>
                  <p className="text-gray-700 mb-4">Exclusive pieces for the discerning collector.</p>
                  <Link href="/collection/limited" className="text-blue-600 hover:underline">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-16 md:py-24 bg-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-tight">
              Unrivaled Craftsmanship
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              At Horologe Genève, every timepiece is a testament to centuries of Swiss watchmaking tradition, combined with cutting-edge innovation. Our master artisans meticulously craft each detail, ensuring unparalleled precision and enduring beauty.
            </p>
            <Link href="/about" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Learn More About Our Heritage
            </Link>
          </div>
        </section>

        {/* Call to Action / Newsletter Signup */}
        <section className="py-16 md:py-24 bg-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              Stay Informed
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
              Join our newsletter for exclusive updates, new collection launches, and special events.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section (new) */}
        <FAQSection />

      </main>
      <Footer />
    </>
  );
}
