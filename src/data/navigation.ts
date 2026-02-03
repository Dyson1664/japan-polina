// Static navigation data extracted from components for better performance

export interface NavigationTrip {
  title: string;
  duration: string;
  location: string;
  link: string;
}

export interface NavigationDestination {
  city: string;
  country: string;
  description: string;
  link: string;
}

// Keep only Polina Japan
export const NAVIGATION_TRIPS: readonly NavigationTrip[] = [
  { title: "Japan 10 Day Polina", duration: "10 Days", location: "Japan", link: "/japan-polina-itinerary" },
] as const;

// No destinations needed for this trimmed site
export const NAVIGATION_DESTINATIONS: readonly NavigationDestination[] = [] as const;
