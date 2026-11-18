import Header from '../components/Header'
import Footer from '../components/Footer'
function Information() {
  return (
    <>
      <Header />
      <section id="informacion" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Sobre Nuestra Empresa
            </h2>
            <p class="text-gray-600 mt-3 text-base sm:text-lg">
              Descubre nuestra historia, misión y valores que nos definen como líderes en tecnología.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Information