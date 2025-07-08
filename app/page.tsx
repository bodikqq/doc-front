import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Сертифікований пластичний хірург
                </span>
              </div>
              
              <h1 className="heading-xl text-slate-900 mb-6">
                Др. <span className="text-blue-600">Світлана Работенко</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Пластична хірургія вищої категорії з досвідом понад 17 років. 
                Член Американської асоціації пластичних хірургів. Понад 1600 
                задоволених пацієнток з різних країн світу.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">17+</div>
                  <div className="text-sm text-slate-500">Років досвіду</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1600+</div>
                  <div className="text-sm text-slate-500">Пацієнток</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-500">Безпека</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Записатися на консультацію
                </a>
                <a href="#services" className="btn-secondary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Дізнатися більше
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-large p-8">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                    <Image
                      src="/doctor.png"
                      alt="Др. Світлана Работенко"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-lg text-slate-900 mb-4">
              Наші <span className="text-blue-600">Послуги</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Індивідуальний підхід до кожної пацієнтки з використанням найсучасніших 
              технологій та методик пластичної хірургії
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
            {[
              {
                title: 'Корекція фігури',
                description: 'Ліпосакція, абдомінопластика, мамопластика та інші процедури для створення ідеальних пропорцій тіла',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                features: ['Ліпосакція', 'Абдомінопластика', 'Мамопластика', 'Глютеопластика']
              },
              {
                title: 'Біо-ліфтинг обличчя',
                description: 'Омолоджуючі процедури для обличчя з використанням власних тканин та сучасних філерів',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                features: ['Фейсліфтинг', 'Блефаропластика', 'Ринопластика', 'Контурна пластика']
              },
              {
                title: 'Реконструктивна хірургія',
                description: 'Відновлення форми та функції після травм, операцій або вроджених дефектів',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-8 h-full hover:shadow-medium">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  
                  <h3 className="heading-md text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="heading-lg mb-8">
                Про <span className="text-blue-400">Світлану</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                <p>
                  Я пластичний хірург з досвідом понад 17 років. Навчалась у найкращих 
                  спеціалістів світу та виконую всі види пластичних операцій для жінок.
                </p>
                
                <p>
                  Понад 1600 пацієнток з різних країн довірили мені свою красу. 
                  Спеціалізуюсь на поверненні та створенні бажаних об'ємів фігури після 
                  пологів, а також індивідуальних програмах корекції обличчя та тіла.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Член Американської асоціації пластичних хірургів</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Сертифікований спеціаліст вищої категорії</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Постійне підвищення кваліфікації в Європі та США</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl transform -rotate-6 opacity-20"></div>
                <div className="relative bg-slate-800 rounded-3xl shadow-large p-8 border border-slate-700">
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src="/vercel.svg"
                      alt="Сертифікати та нагороди"
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-lg text-slate-900 mb-4">
              Зв'яжіться <span className="text-blue-600">зі мною</span>
            </h2>
            <p className="text-xl text-slate-600">
              Заповніть форму або зателефонуйте, щоб забронювати консультацію
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-large p-8 lg:p-12 animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Ваше ім'я *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введіть ваше ім'я"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+38 (0XX) XXX-XX-XX"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Цікавить послуга
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Оберіть послугу</option>
                  <option value="body">Корекція фігури</option>
                  <option value="face">Біо-ліфтинг обличчя</option>
                  <option value="reconstruction">Реконструктивна хірургія</option>
                  <option value="consultation">Консультація</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Розкажіть детальніше про ваші побажання..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center text-lg py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Надіслати заявку
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Телефон</h3>
                  <a href="tel:+380123456789" className="text-blue-600 hover:text-blue-700">
                    +38 (012) 345-67-89
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:info@clinic.com" className="text-blue-600 hover:text-blue-700">
                    info@clinic.com
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">Адреса</h3>
                  <p className="text-slate-600 text-sm">
                    м. Київ, вул. Медична, 123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}