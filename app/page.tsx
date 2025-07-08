import Image from "next/image";

export default function Home() {
  const inputClasses = `w-full px-4 py-3 border rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-[#0077b6]`;
  const buttonClasses = `w-full bg-[#0077b6] hover:bg-[#0096c7] 
    text-white font-semibold py-4 rounded-full transition`;
  return (
    <main className="space-y-0 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#edf6f9] pb-28 pt-35 px-6 lg:px-40">
        {/* Text Side */}
        <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-[#03045e] mb-6 leading-tight">
            Світлана Работенко
          </h1>
          <p className="text-xl text-[#6c757d] mb-8">
            Пластична хірургія вищої категорії, <br />
            член Американської асоціації пластичних хірургів
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0077b6] hover:bg-[#0096c7] text-white font-semibold py-4 px-8 rounded-full transition-shadow shadow-lg"
          >
            Записатися на консультацію
          </a>
        </div>

        {/* Image Side */}
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative w-100 h-100 bg-transparent">
            <Image
              src="/doctor.png"
              alt="Світлана Работенко"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl bg-transparent"
            />
          </div>
        </div>
      </section>


      {/* Services Section */}


      {/* About Section */}
      <section className="bg-[#094984] text-white py-10 px-10 lg:px-40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Про Світлану</h2>
            <p className="text-base leading-relaxed">
              Я пластичний хірург з досвідом понад 17 років. Навчалась у найкращих
              спеціалістів світу та виконую всі види пластичних операцій для жінок.
              Понад 1600 пацієнток з різних країн довірили мені свою красу.
              Спеціалізуюсь на поверненні та створенні бажаних об’ємів фігури після
              пологів, а також індивідуальних програмах корекції обличчя та тіла.
            </p>
          </div>
          <div className="flex justify-center max-w-2xl">
            <Image
              src="/vercel.svg"
              alt=""
              width={200}
              height={200}
            //className="border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-[#03045e] mb-12">
          Наші Послуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Корекція фігури', 'Біо-ліфтинг обличчя', 'Реконструктивна хірургія'].map(
            (service) => (
              <div
                key={service}
                className="p-6 border border-[#90e0ef] rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#03045e] mb-4">
                  {service}
                </h3>
                <p className="text-[#6c757d] leading-relaxed">
                  Детальний опис послуги та індивідуальний підхід для кожної пацієнтки.
                </p>
              </div>
            )
          )}
        </div>
      </section>
      {/* Contact CTA Section */}

     <section id="contact" className="bg-gradient-to-br from-[#e0f7fa] to-[#caf0f8] py-12 px-4 lg:px-16">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#03045e] mb-3">
            Зв’яжіться зі мною
          </h2>
          <p className="text-base text-[#4a4a4a]">
            Заповніть форму або зателефонуйте, щоб забронювати консультацію.
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-[#023e8a]">
              Ваше ім’я
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ім’я"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] text-gray-800 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-[#023e8a]">
              Ваш email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] text-gray-800 transition"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium text-[#023e8a]">
              Ваше повідомлення
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Напишіть ваше повідомлення тут..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b6] text-gray-800 transition resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#0077b6] hover:bg-[#0096c7] text-white font-semibold rounded-full shadow transition"
          >
            Надіслати
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-[#6c757d]">
          <p>Або зателефонуйте: <a href="tel:+380123456789" className="text-[#0077b6] hover:underline">+38 (012) 345-67-89</a></p>
        </div>
      </div>
    </section>


    </main>
  );
}
