// Major city location database with accurate coordinates & timezone offsets
export const CITY_PRESETS = [
  { city: 'Pune', state: 'Maharashtra', country: 'India', lat: 18.5204, lng: 73.8567, timezone: '+05:30' },
  { city: 'Mumbai', state: 'Maharashtra', country: 'India', lat: 19.0760, lng: 72.8777, timezone: '+05:30' },
  { city: 'New Delhi', state: 'Delhi', country: 'India', lat: 28.6139, lng: 77.2090, timezone: '+05:30' },
  { city: 'Bengaluru', state: 'Karnataka', country: 'India', lat: 12.9716, lng: 77.5946, timezone: '+05:30' },
  { city: 'Hyderabad', state: 'Telangana', country: 'India', lat: 17.3850, lng: 78.4867, timezone: '+05:30' },
  { city: 'Chennai', state: 'Tamil Nadu', country: 'India', lat: 13.0827, lng: 80.2707, timezone: '+05:30' },
  { city: 'Kolkata', state: 'West Bengal', country: 'India', lat: 22.5726, lng: 88.3639, timezone: '+05:30' },
  { city: 'Ahmedabad', state: 'Gujarat', country: 'India', lat: 23.0225, lng: 72.5714, timezone: '+05:30' },
  { city: 'Jaipur', state: 'Rajasthan', country: 'India', lat: 26.9124, lng: 75.7873, timezone: '+05:30' },
  { city: 'Nagpur', state: 'Maharashtra', country: 'India', lat: 21.1458, lng: 79.0882, timezone: '+05:30' },
  { city: 'Nashik', state: 'Maharashtra', country: 'India', lat: 19.9975, lng: 73.7898, timezone: '+05:30' },
  { city: 'Chhatrapati Sambhajinagar (Aurangabad)', state: 'Maharashtra', country: 'India', lat: 19.8762, lng: 75.3433, timezone: '+05:30' },
  { city: 'Kolhapur', state: 'Maharashtra', country: 'India', lat: 16.7050, lng: 74.2433, timezone: '+05:30' },
  { city: 'Satara', state: 'Maharashtra', country: 'India', lat: 17.6805, lng: 74.0183, timezone: '+05:30' },
  { city: 'Solapur', state: 'Maharashtra', country: 'India', lat: 17.6599, lng: 75.9064, timezone: '+05:30' },
  { city: 'Thane', state: 'Maharashtra', country: 'India', lat: 19.2183, lng: 72.9781, timezone: '+05:30' },
  { city: 'Indore', state: 'Madhya Pradesh', country: 'India', lat: 22.7196, lng: 75.8577, timezone: '+05:30' },
  { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India', lat: 26.8467, lng: 80.9462, timezone: '+05:30' },
  { city: 'Patna', state: 'Bihar', country: 'India', lat: 25.5941, lng: 85.1376, timezone: '+05:30' },
  { city: 'Chandigarh', state: 'Punjab/Haryana', country: 'India', lat: 30.7333, lng: 76.7794, timezone: '+05:30' },
  { city: 'Surat', state: 'Gujarat', country: 'India', lat: 21.1702, lng: 72.8311, timezone: '+05:30' },
  { city: 'Varanasi', state: 'Uttar Pradesh', country: 'India', lat: 25.3176, lng: 82.9739, timezone: '+05:30' },
  { city: 'London', state: 'England', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, timezone: '+00:00' },
  { city: 'New York', state: 'New York', country: 'United States', lat: 40.7128, lng: -74.0060, timezone: '-05:00' },
  { city: 'San Francisco', state: 'California', country: 'United States', lat: 37.7749, lng: -122.4194, timezone: '-08:00' },
  { city: 'Dubai', state: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708, timezone: '+04:00' },
  { city: 'Singapore', state: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, timezone: '+08:00' },
  { city: 'Sydney', state: 'New South Wales', country: 'Australia', lat: -33.8688, lng: 151.2093, timezone: '+10:00' },
  { city: 'Toronto', state: 'Ontario', country: 'Canada', lat: 43.6532, lng: -79.3832, timezone: '-05:00' }
];

export const searchCities = (query) => {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return CITY_PRESETS.filter(item => 
    item.city.toLowerCase().includes(q) ||
    item.state.toLowerCase().includes(q) ||
    item.country.toLowerCase().includes(q)
  );
};

export const getDefaultLocation = () => CITY_PRESETS[0]; // Pune, India
