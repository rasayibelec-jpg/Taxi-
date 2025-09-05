import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Car, MapPin, Star } from "lucide-react";

const FleetGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fleetImages = [
    {
      url: "https://customer-assets.emergentagent.com/job_webseite-bauer/artifacts/50r7ds6f_20250504_053743.jpg",
      title: "Mercedes-Flotte bei Nacht",
      description: "Unsere professionellen Taxis bereit für den 24/7 Service"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_webseite-bauer/artifacts/p68khw91_20240707_163617.jpg", 
      title: "Mercedes E-Klasse",
      description: "Komfort und Sicherheit auf höchstem Niveau"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_webseite-bauer/artifacts/qrjrp7sc_20240712210744_edited_1732630664572.png",
      title: "Stadtfahrt bei Regen", 
      description: "Zuverlässig bei jedem Wetter"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_webseite-bauer/artifacts/yomelklg_20240712121846_edited_1732630664532.png",
      title: "Mercedes mit Bergpanorama",
      description: "Spektakuläre Fahrten in der Zentralschweiz"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_webseite-bauer/artifacts/nq4c2nhv_20240712_121059.jpg",
      title: "E-Klasse Frontalansicht",
      description: "Moderne und gepflegte Fahrzeuge"
    }
  ];

  const serviceAreas = [
    {
      url: "https://images.unsplash.com/photo-1566789168779-73d46d92b809",
      title: "Luzern",
      description: "Historische Altstadt und Kapellbrücke"
    },
    {
      url: "https://images.unsplash.com/photo-1517664604184-9c1d2962d0a6",
      title: "Vierwaldstättersee",
      description: "Wunderschöne Fahrten rund um den See"
    },
    {
      url: "https://images.unsplash.com/photo-1583035283307-3d4af0848227",
      title: "Weggis & Vitznau",
      description: "Malerische Seeufer-Gemeinden"
    },
    {
      url: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
      title: "Schwyz & Brunnen",
      description: "Traditionelle Schweizer Berglandschaft"
    },
    {
      url: "https://images.unsplash.com/photo-1541696724920-864a966cc4c9",
      title: "Zug",
      description: "Moderne Stadt am Zugersee"
    },
    {
      url: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
      title: "Arth-Goldau",
      description: "Tor zu Rigi und Pilatus"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fleetImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fleetImages.length) % fleetImages.length);
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unsere Flotte */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Flotte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne Mercedes-Fahrzeuge für höchsten Komfort und Sicherheit. 
              Alle Taxis sind klimatisiert, gepflegt und bestens ausgestattet.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-8">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={fleetImages[currentImageIndex].url}
                  alt={fleetImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{fleetImages[currentImageIndex].title}</h3>
                  <p className="text-gray-200">{fleetImages[currentImageIndex].description}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
              size="lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
              size="lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Fleet Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Car className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mercedes-Fahrzeuge</h3>
              <p className="text-gray-600">Ausschließlich hochwertige Mercedes-Benz Fahrzeuge für maximalen Komfort</p>
            </Card>
            <Card className="text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Top-Ausstattung</h3>
              <p className="text-gray-600">Klimaanlage, Ledersitze, WLAN und mobile Kartenlesegeräte</p>
            </Card>
            <Card className="text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GPS-Navigation</h3>
              <p className="text-gray-600">Modernste Navigationstechnik für die schnellste Route</p>
            </Card>
          </div>
        </div>

        {/* Unsere Servicegebiete */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Servicegebiete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der historischen Stadt Luzern bis zu den malerischen Bergdörfern - 
              wir bringen Sie sicher an Ihr Ziel in der schönsten Region der Schweiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={area.url}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{area.title}</h3>
                    <p className="text-gray-200 text-sm">{area.description}</p>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-yellow-600 text-white">
                    Servicegebiet
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;