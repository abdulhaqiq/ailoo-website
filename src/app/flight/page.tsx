'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Plane, 
  Calendar, 
  Users, 
  ChevronDown, 
  ArrowLeftRight, 
  Search, 
  Clock, 
  MapPin, 
  Wifi, 
  Utensils, 
  Zap, 
  Play, 
  Luggage, 
  Filter,
  SortAsc,
  ChevronUp,
  ChevronRight,
  Star,
  Shield,
  CheckCircle,
  Phone
} from 'lucide-react'

export default function FlightPage() {
  const [tripType, setTripType] = useState('one-way')
  const [fromLocation, setFromLocation] = useState('New York (JFK)')
  const [toLocation, setToLocation] = useState('London (LHR)')
  const [departureDate, setDepartureDate] = useState('Mon, May 15')
  const [returnDate, setReturnDate] = useState('Mon, May 18')
  const [passengers, setPassengers] = useState('1 Adult, Economy')
  const [selectedFlight, setSelectedFlight] = useState(null)

  const flights = [
    {
      id: 1,
      airline: 'United Airlines',
      class: 'Business',
      logo: 'UA',
      departure: { time: '8:45 AM', airport: 'JFK', date: 'Thu May 25th' },
      arrival: { time: '8:40 PM', airport: 'LHR', date: 'Fri May 26th' },
      duration: '6h 55m',
      stops: '1 stop via XYZ',
      price: '$567.00',
      points: {
        chase: { points: '1,78,000', fee: '+$6.00' },
        bilt: { points: '1,77,600', fee: '+1' }
      },
      amenities: ['Baggage', 'Wifi', 'Meal', 'Power/USB', 'Entertainment'],
      segments: [
        {
          departure: { time: '8:45 AM', airport: 'New York (EWR)', date: 'Thu May 25th' },
          arrival: { time: '8:40 PM', airport: 'Paris (CDG)', date: 'Fri May 26th' },
          duration: '6h 55m Flight Duration'
        },
        {
          departure: { time: '8:45 AM', airport: 'New York (EWR)', date: 'Thu May 25th' },
          arrival: { time: '8:40 PM', airport: 'Paris (CDG)', date: 'Fri May 26th' },
          duration: '6h 55m Flight Duration'
        }
      ]
    },
    {
      id: 2,
      airline: 'British Airways',
      class: 'Economy',
      logo: 'BA',
      departure: { time: '10:30 AM', airport: 'JFK', date: 'Thu May 25th' },
      arrival: { time: '9:15 PM', airport: 'LHR', date: 'Fri May 26th' },
      duration: '7h 45m',
      stops: 'Direct',
      price: '$489.00',
      points: {
        chase: { points: '1,56,000', fee: '+$4.00' },
        bilt: { points: '1,55,200', fee: '+1' }
      },
      amenities: ['Baggage', 'Wifi', 'Meal'],
      segments: []
    },
    {
      id: 3,
      airline: 'American Airlines',
      class: 'First',
      logo: 'AA',
      departure: { time: '2:15 PM', airport: 'JFK', date: 'Thu May 25th' },
      arrival: { time: '11:30 PM', airport: 'LHR', date: 'Fri May 26th' },
      duration: '8h 15m',
      stops: '1 stop via BOS',
      price: '$789.00',
      points: {
        chase: { points: '2,10,000', fee: '+$8.00' },
        bilt: { points: '2,09,500', fee: '+2' }
      },
      amenities: ['Baggage', 'Wifi', 'Meal', 'Power/USB', 'Entertainment', 'Lounge'],
      segments: []
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-8">
            {/* Trip Type Selection - Commented Out */}
            {/* 
            <div className="flex gap-2 mb-6">
              {[
                { id: 'one-way', label: 'One Way', icon: CheckCircle },
                { id: 'round-trip', label: 'Return', icon: CheckCircle },
                { id: 'multi-city', label: 'Multi City', icon: CheckCircle }
              ].map((option) => (
                <Button
                  key={option.id}
                  variant={tripType === option.id ? "default" : "outline"}
                  onClick={() => setTripType(option.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    tripType === option.id
                      ? 'bg-[#DFFF50] text-black'
                      : 'border-gray-700 text-gray-300 hover:border-[#DFFF50] hover:text-[#DFFF50]'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  {option.label}
                </Button>
              ))}
            </div>
            */}

            {/* Main Search Fields - From/To Removed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Departure Date */}
              <div className="relative">
                <label className="block text-sm text-gray-300 mb-2">Departure Date</label>
                <div className="relative">
                  <Input
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50] h-12"
                    placeholder="20 March"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                    Sunday
                  </div>
                </div>
              </div>

              {/* Return Date */}
              <div className="relative">
                <label className="block text-sm text-gray-300 mb-2">Return Date</label>
                <div className="relative">
                  <Input
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className={`bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50] h-12 ${tripType === 'one-way' ? 'opacity-50' : ''}`}
                    placeholder="28 March"
                    disabled={tripType === 'one-way'}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                    Friday
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button size="lg" className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Search Flight
                </Button>
              </div>
            </div>

            {/* Bottom Row with Passengers */}
            <div className="flex justify-center">
              <div className="flex gap-4">
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DFFF50]"
                >
                  <option value="1 Adult, Economy">1 Adult</option>
                  <option value="2 Adult, Economy">2 Adult</option>
                  <option value="1 Adult, Business">1 Adult, Business</option>
                  <option value="1 Adult, First">1 Adult, First</option>
                </select>
                
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#DFFF50]">
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Information Banners - Commented Out */}
          {/* 
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Cheapest</h3>
              <p className="text-gray-300">Enjoy trip with the most affordable flight available!</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Fastest</h3>
              <p className="text-gray-300">Get quickest flight to your destination!</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Quickest Flights: {fromLocation} → {toLocation}
            </h2>
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              Pricing displayed is one-way only. Return flight pricing will be displayed after selecting an outbound flight. 
              Additional bag fees and other fees may apply. We show real time results and airline inventory can change quickly. 
              Availability and pricing are not guaranteed.
            </p>
          </div>
          */}

          {/* Filters and Sort - Commented Out */}
          {/* 
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <span className="text-gray-400 text-sm font-medium">FILTER:</span>
              <div className="flex flex-wrap gap-2">
                {['Airlines', 'Stops', 'Times', 'Programs'].map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-[#DFFF50] hover:text-[#DFFF50]"
                  >
                    {filter}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="loyalty" className="rounded border-gray-700" />
                <label htmlFor="loyalty" className="text-gray-300 text-sm">
                  Filter results to match my card & airline loyalty programs
                </label>
                <Shield className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-medium">SORT:</span>
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                  <option>Quickest Flights</option>
                  <option>Cheapest Flights</option>
                  <option>Best Value</option>
                </select>
              </div>
            </div>
          </div>
          */}

          {/* Flight Results - Commented Out for Launch */}
          {/* 
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Select your departing flight to "Cox's Bazar"
              </h3>
              <span className="text-gray-400 text-sm">4 Results found for you</span>
            </div>

            <div className="space-y-4">
              {flights.map((flight) => (
                <div key={flight.id} className="bg-gray-900 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#DFFF50] rounded-lg flex items-center justify-center text-black font-bold text-xl">
                        {flight.logo}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{flight.airline}</h4>
                        <p className="text-gray-400 text-sm">{flight.class}</p>
                        <button className="text-[#DFFF50] text-sm hover:underline mt-1">
                          View details
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#DFFF50]">{flight.price}</div>
                      <Button
                        size="sm"
                        className="mt-2 bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{flight.departure.time}</div>
                      <div className="text-gray-400 text-sm">{flight.departure.airport}</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center mx-8">
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">{flight.duration}</span>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                      </div>
                      <div className="text-center ml-4">
                        <div className="text-gray-400 text-sm">{flight.stops}</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{flight.arrival.time}</div>
                      <div className="text-gray-400 text-sm">{flight.arrival.airport}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {flight.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 text-gray-400">
                        {amenity === 'Baggage' && <Luggage className="w-4 h-4" />}
                        {amenity === 'Wifi' && <Wifi className="w-4 h-4" />}
                        {amenity === 'Meal' && <Utensils className="w-4 h-4" />}
                        {amenity === 'Power/USB' && <Zap className="w-4 h-4" />}
                        {amenity === 'Entertainment' && <Play className="w-4 h-4" />}
                        <span className="text-xs">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {selectedFlight === flight.id && (
                    <div className="border-t border-gray-700 pt-4">
                      <div className="space-y-4">
                        {flight.segments.map((segment, index) => (
                          <div key={index} className="bg-gray-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white font-semibold">{segment.departure.time}</div>
                                <div className="text-gray-400 text-sm">{segment.departure.airport}</div>
                                <div className="text-gray-400 text-xs">{segment.departure.date}</div>
                              </div>
                              <div className="flex-1 flex items-center justify-center mx-4">
                                <div className="flex items-center gap-2 text-gray-400">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">{segment.duration}</span>
                                </div>
                              </div>
                              <div>
                                <div className="text-white font-semibold">{segment.arrival.time}</div>
                                <div className="text-gray-400 text-sm">{segment.arrival.airport}</div>
                                <div className="text-gray-400 text-xs">{segment.arrival.date}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedFlight(selectedFlight === flight.id ? null : flight.id)}
                      className="text-gray-400 hover:text-white"
                    >
                      {selectedFlight === flight.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Show Details
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}

          {/* Launching Soon Section */}
          <div className="mb-8">
            <div className="bg-gray-900 rounded-2xl p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-12 h-12 text-black" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Flight Booking Coming Soon!</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're working hard to bring you the best flight booking experience. 
                  Stay tuned for our launch announcement!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 px-8 py-3">
                    Get Notified
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
