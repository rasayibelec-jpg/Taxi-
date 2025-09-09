import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Clock, Star, Car, Train } from "lucide-react";

const TaxiZugPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Taxi Zug - Ihr zuverlässiger Partner am Zugersee
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Stressfrei unterwegs mit 24/7 Mercedes-Taxi-Service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:076 611 31 31" 
                className="flex items-center space-x-2 bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>076 611 31 31</span>
              </a>
              <a 
                href="#buchen" 
                className="flex items-center space-x-2 bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg transition-colors duration-200 font-bold text-lg"
              >
                <Car className="w-6 h-6" />
                <span>Online Buchen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Taxi Türlihof in Zug */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Taxi Zug - Ihr Taxi Bahnhof Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stressfrei unterwegs mit Taxi Turlihof – Ihr Taxi Bahnhof und zuverlässiger 
              Partner am Zugersee für alle Ihre Transportbedürfnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-teal-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Train className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Bahnhof-Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Direkter Service vom und zum Bahnhof Zug - immer pünktlich zu Ihrem Zug
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-teal-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">24/7 Verfügbar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rund um die Uhr erreichbar - auch für frühe Züge oder späte Ankünfte
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-teal-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Car className="w-8 h-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Business-Fahrten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfekt für Geschäftsreisende - diskret, pünktlich und komfortabel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zug Ziele */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beliebte Ziele in und um Zug
            </h2>
            <p className="text-xl text-gray-600">
              Wir bringen Sie überall in der Region Zug hin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bahnhof Zug",
              "Zugersee", 
              "Altstadt Zug",
              "Zugerberg",
              "Baar",
              "Cham",
              "Steinhausen",
              "Walchwil"
            ].map((destination, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-teal-50 transition-colors duration-200">
                <MapPin className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">{destination}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business-Services in Zug
            </h2>
            <p className="text-xl text-gray-600">
              Zug als Wirtschaftsstandort - wir bringen Sie zu allen wichtigen Terminen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <Train className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Bahnhof-Transfer</h3>
              </div>
              <p className="text-gray-600">
                Zuverlässiger Transport vom und zum Bahnhof Zug. Wir sorgen dafür, dass Sie Ihren Zug nicht verpassen.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <Car className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Firmen-Fahrten</h3>
              </div>
              <p className="text-gray-600">
                Geschäftsfahrten zu Kunden, Meetings oder Events - diskret und professionell.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zu Taxi Zug
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Wie schnell sind Sie am Bahnhof Zug?
              </h3>
              <p className="text-gray-600">
                Vom Bahnhof Zug aus erreichen wir die meisten Ziele in der Stadt innerhalb von 5-15 Minuten.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bieten Sie auch Firmen-Accounts an?
              </h3>
              <p className="text-gray-600">
                Ja, für Unternehmen in Zug bieten wir spezielle Business-Tarife und Abrechnungsmodelle an. Kontaktieren Sie uns für ein individuelles Angebot.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="buchen" className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Jetzt Taxi in Zug buchen
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stressfrei am Zugersee unterwegs - Ihr zuverlässiger Taxi-Partner!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:076 611 31 31" 
              className="flex items-center space-x-2 bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Jetzt anrufen: 076 611 31 31</span>
            </a>
            <a 
              href="/#buchen" 
              className="flex items-center space-x-2 bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg transition-colors duration-200 font-bold text-lg"
            >
              <Car className="w-6 h-6" />
              <span>Online Buchen</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxiZugPage;