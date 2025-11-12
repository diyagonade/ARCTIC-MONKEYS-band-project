import { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

// --- Hardcoded Data for Demo Realism ---
const mockTourData = [
  {
    id: 1,
    date: '2026-03-10',
    city: 'London, UK',
    venue: 'The O2 Arena',
    status: 'available',
  },
  {
    id: 2,
    date: '2026-03-14',
    city: 'New York, USA',
    venue: 'Madison Square Garden',
    status: 'sold_out',
  },
  {
    id: 3,
    date: '2026-03-18',
    city: 'Mexico City, Mexico',
    venue: 'Foro Sol',
    status: 'available',
  },
  {
    id: 4,
    date: '2026-03-25',
    city: 'Sydney, Australia',
    venue: 'Qudos Bank Arena',
    status: 'available',
  },
];
// ----------------------------------------

export function Tours() {
  // Use mock data directly for the front-end demo
  const tours = mockTourData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="tours" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">ARCTIC MONKEYS TOUR DATES</h2>

        {/* Band Context and History */}
        <div className="max-w-4xl mx-auto mb-16 p-6 bg-white rounded-xl shadow-lg border-t-4 border-black">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Band History</h3>
          <p className="text-gray-700 leading-relaxed">
            Formed in **Sheffield, England in 2002**, the **Arctic Monkeys**—comprising **Alex Turner, Matt Helders, Jamie Cook, and Nick O'Malley**—rose to prominence by distributing their **early demos via the internet**, leading to their record-breaking 2006 debut album, *Whatever People Say I Am, That's What I'm Not*. They are widely regarded as pioneers of the second wave of post-punk revival and one of the most successful British bands of the 21st century.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {tours.map((tour) => {
            const isSoldOut = tour.status === 'sold_out';
            return (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 
                         flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6 flex-1">
                  
                  <div className="flex items-center gap-2 text-gray-600 min-w-[140px]">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{formatDate(tour.date)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-800">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">{tour.city}</span>
                  </div>

                  <span className="text-gray-600 hidden md:block">{tour.venue}</span>
                </div>

                <button 
                  disabled={isSoldOut}
                  className={`px-6 py-2 font-bold rounded-full transition-colors whitespace-nowrap ${
                    isSoldOut 
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => !isSoldOut && console.log(`Navigating to ticketing for ${tour.venue}`)}
                >
                  {isSoldOut ? 'SOLD OUT' : 'BUY TICKETS'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}