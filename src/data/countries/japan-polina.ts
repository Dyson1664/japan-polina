// Import images - reusing from japan.ts
import japanHero30 from "@/assets/tokyoooo.jpg";
import japanHero33 from "@/assets/polina1.jpeg";
import tilepolina3  from "@/assets/polina3.jpg";
import tilepolina2  from "@/assets/polina2.jpeg";

import polinaDay01  from "@/assets/polinaday1.jpg";
import polinaDay02  from "@/assets/polinaday2.jpg";
import polinaDay03  from "@/assets/polinaday3.jpg";
import polinaDay05  from "@/assets/polinaday5.jpg";
import polinaDay06  from "@/assets/polinaday6.jpg";
import polinaDay07  from "@/assets/polinaday7.jpg";
import polinaDay08  from "@/assets/polinaday8.jpg";
import polinaDay09  from "@/assets/polinaday9.jpg";

import polinaDay10  from "@/assets/japan-mt-fuji.jpg";


import kyotohostel  from "@/assets/hostel-kyoto-1.jpg";
import kyotohostel2  from "@/assets/hostel-kyoto-2.jpg";
import kyotohostel3  from "@/assets/hostel-kyoto-3.jpg";

import osakahostel  from "@/assets/osaka-hostel.jpg";
import osakahostel2  from "@/assets/osaka-hostel-2.jpg";

import tokyohostel  from "@/assets/tokyo-hostel-1.jpg";
import tokyohostel2  from "@/assets/tokyo-hostel-2.jpg";

import japanHero3 from "@/assets/japan-hero3.jpg";
import japanGarden from "@/assets/japan-garden.jpg";
import japanTokyo from "@/assets/japan-tokyo.jpg";
import japanSushi from "@/assets/japan-sushi.jpg";

import japanDay01  from "@/assets/japan-day01-groupbb.jpg";
import japanDay03  from "@/assets/japan-day03-group.jpg";
import japanDay04  from "@/assets/japan-day04-main-hakone-mt-fuji.jpg";
import japanDay05  from "@/assets/japan-day05-main-fushimi-inari.jpg";

import japantea from "@/assets/japan-tea2.jpg";
import japansword from "@/assets/japan-sword2.jpg";

import japanDay07  from "@/assets/japan-last-day.jpg";

import tile01  from "@/assets/japan-tile01.jpg";
import tile02  from "@/assets/japan-tile02.jpg";
import tile03  from "@/assets/japan-tile03.jpg";
import tile04  from "@/assets/japan-tile04.jpg";

import tokyoReel from "@/assets/japan/tokyo.mp4";
import kyotoReel from "@/assets/japan/kyoto.mp4";
import mtfujiReel from "@/assets/japan/mt-fuji.mp4";

import tokyocover from "@/assets/japan/tokyo-cover.jpeg";
import kyotocover from "@/assets/japan/kyoto-cover.jpeg";
import mtfujicover from "@/assets/japan/mt-fuji-cover.jpeg";

import tokyoHotel from "@/assets/japan/tokyo-hotel.mp4";

import { Home, Zap, Plane, Users, Soup, TreePine } from "lucide-react";

export const japanPolinaData = {
  id: "japan-polina",
  slug: "japan-polina",
  title: "Best of Japan",
  tags: [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🧳", label: "Solo" }
  ],
  subtitle: "An extended journey through the perfect harmony of ancient traditions and cutting-edge modernity",
  location: "Japan",
  duration: "10 days",
  heroImage: japanHero33,
  price: "USD $1,779",
  route: ["Tokyo", "Mt. Fuji", "Kyoto", "Osaka"],
  aboutDescription: [
    "Experience the mesmerizing contrast of Japan, where bullet trains glide past ancient temples and neon-lit cities coexist with serene gardens. This extended 10-day group journey takes you from the vibrant energy of Tokyo to the cultural heart of Kyoto and onward to Osaka, with thoughtfully paced days and time to uncover hidden gems.",
    "Immerse yourself in Japanese culture through temple and shrine visits, sake tastings, street food, and unforgettable landscapes—from Mount Fuji's iconic scenery to historic cities rich in tradition. Blending curated highlights with free time and optional activities, this journey offers the perfect balance of structure, flexibility, and shared experiences."
  ],
  overviewGallery2x:[tilepolina3, tilepolina2, tile02, tile03],
  aboutImages: [japanGarden, japanTokyo],

  highlights: [
    {
      title: "Tokyo",
      image: tokyocover,
      video: tokyoReel
    },
    {
      title: "Kyoto",
      image: kyotocover,
      video: kyotoReel
    },
    {
      title: "Mt. Fuji & Hakone Loop",
      image: mtfujicover,
      video: mtfujiReel
    },
  ],

  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMM",
      description: "Comfortable stays in well-located hostels."
    },
    {
      icon: Zap,
      title: "SIGNATURE<br />ACTIVITIES",
      description: "Sushi-making class, temple visits, bullet trains, Golden Gai, Sake tasting experience & authentic experiences.",
      link: {
        text: "Explore the itinerary",
        url: "#itinerary"
      }
    },
    {
      icon: Plane,
      title: "AIRPORT PICKUP",
      description: "Train transfer to the hotel is covered by the tour's provided IC card."
    },
    {
      icon: Users,
      title: "CULTURAL<br />EXPERTS",
      description: "Knowledgeable local guides who speak fluent English and provide deep cultural insights."
    },
    {
      icon: Soup,
      title: "AUTHENTIC<br />CUISINE",
      description: "Sushi lunch, welcome dinner + 2 hour free flow."
    },
    {
      icon: TreePine,
      title: "100% CARBON<br />NEUTRAL",
      description: "Your Japan journey is completely carbon neutral through our verified environmental program."
    }
  ],

  accommodations: [
    {
      title: "Wise Owl Hostels Shibuya",
      description: "Stylish contemporary hostel in the heart of Tokyo's Shibuya district with easy metro access.",
      images: [tokyohostel, tokyohostel2]
    },
    {
      title: "Piece Hostel Sanjo",
      description: "Stylish design hostel in central Kyoto with easy access to Gion, temples, and the Kamo River.",
      images: [kyotohostel, kyotohostel2, kyotohostel3]
    },
    {
      title: "Cogo Tennoji",
      description: "Contemporary hostel in Osaka's Tennoji district, close to Shinsekai and excellent transit links.",
      images: [osakahostel, osakahostel2]
    }
  ],

  itinerary: [
    {
      day: 1,
      title: "Tokyo | Arrival & Welcome Night",
      location: "Tokyo, Japan",
      heroImage: polinaDay01,
      description:
        "Welcome to Japan! Arrive in Tokyo and make your way to the hotel by train (your tour guide will assist every step of the way). After settling in, meet your fellow travelers and kick things off with a lively welcome dinner with 2 hours of free-flow drinks included.",
      meals: "Dinner",
      accommodation: { name: "Wise Owl Hostels Shibuya or similar" },
      highlights: "Welcome dinner with 2 hours free flow",
      transportation: {
          mode: "Train",
        from: "Haneda Airport",
        to: "Wise Owl Hostels Shibuya",
        duration: "≈ 50 Minutes by train",

      }
    },
    {
      day: 2,
      title: "Tokyo | Temples, Sake & Street Food",
      location: "Tokyo, Japan",
      heroImage: polinaDay02,
      description:
        "Start the day at the iconic Kaminarimon Gate, followed by a visit to Senso-ji Temple. Enjoy a guided sake tasting at a premium sake pub, then stroll through Ameyoko Shopping Street, sampling local snacks and soaking in the atmosphere. Evening is free or join an optional group dinner.",
      accommodation: { name: "Wise Owl Hostels Shibuya or similar" },
      highlights: "Sake tasting experience"
    },
    {
      day: 3,
      title: "Tokyo | Shrines, Fashion & Nightlife",
      location: "Tokyo, Japan",
      heroImage: polinaDay03,
      description:
        "Begin at the peaceful Meiji Jingu Shrine, hidden within a lush forest. Head to Harajuku's Takeshita Street for bold fashion and pop culture, followed by free time. Optional activities include the famous Shibuya Crossing, visiting quirky animal cafés or racing through the streets in a Mario Kart-style go-kart experience. At night, experience Tokyo nightlife in Golden Gai, famous for its tiny themed bars.",
      accommodation: { name: "Wise Owl Hostels Shibuya or similar" },
      highlights: "Meiji Jingu Shrine, Shibuya Crossing, Golden Gai nightlife"
    },
    {
      day: 4,
      title: "Mount Fuji → Kyoto | Scenic Travel Day",
      location: "Kyoto, Japan",
      heroImage: polinaDay10,
      description:
        "Today is all about the journey. Travel toward Mount Fuji, riding cable cars, enjoying stunning views, and cruising by boat across Lake Ashi. Continue on to Kyoto via trains and bus, taking in Japan's beautiful countryside along the way.",
      accommodation: { name: "Piece Hostel Sanjo, Kyoto or similar" },
      highlights: "Hakone loop, Lake Ashi cruise, Owakudani ropeway, Mt Fuji views, shinkansen to Kyoto"
    },
    {
      day: 5,
      title: "Kyoto | Fushimi Inari & Ancient Japan",
      location: "Kyoto, Japan",
      heroImage: polinaDay05,
      description:
        "Rise early to beat the crowds at the iconic Fushimi Inari Taisha, famous for its endless red torii gates. Continue to Kiyomizu-dera, Kyoto's iconic wooden temple perched on a hillside with stunning views. The rest of the day is relaxed with time to explore Kyoto at your own pace.",
      accommodation: { name: "Piece Hostel Sanjo, Kyoto or similar" },
      highlights: "Fushimi Inari, Kiyomizu-dera"
    },
    {
      day: 6,
      title: "Kyoto | Bamboo Forest & Monkeys",
      location: "Kyoto, Japan",
      heroImage: polinaDay06,
      description:
        "Enjoy a slow morning before walking through the magical Arashiyama Bamboo Forest. Continue on to the Monkey Forest, where wild monkeys roam freely with panoramic views over Kyoto.",
      accommodation: { name: "Piece Hostel Sanjo, Kyoto or similar" },
      highlights: "Arashiyama Bamboo Forest"
    },
    {
  day: 7,
  title: "Osaka | Bullet Train & Osaka Castle",
  location: "Osaka, Japan",
  heroImage: polinaDay08,
  description:
    "Travel to Osaka by bullet train, then visit Osaka Castle, one of Japan’s most famous landmarks. The rest of the day is free for shopping and exploring the city at your own pace.",
  accommodation: { name: "Cogo Tennoji, Osaka or similar" },
  highlights: "Bullet Train, Osaka Castle, Shopping"
},
{
  day: 8,
  title: "Osaka | Nara Park & Great Buddha",
  location: "Nara, Japan",
  heroImage: polinaDay07,
  description:
    "Head out to Nara Park to meet the friendly, free-roaming deer and explore the area. Then enjoy a free afternoon to wander, relax, and explore more of Nara or return to Osaka.",
  accommodation: { name: "Cogo Tennoji, Osaka or similar" },
  highlights: "Nara Park"
},

    {
      day: 9,
      title: "Osaka | Sushi & Farewell Night",
      location: "Osaka, Japan",
      heroImage: polinaDay09,
      description:
        "Dive into Japanese culture with a hands-on sushi-making class in the morning. Spend the afternoon at leisure before gathering for a memorable farewell dinner with the group.",
      accommodation: { name: "Cogo Tennoji, Osaka or similar" },
      highlights: "Sushi-making class"
    },
    {
      day: 10,
      title: "Check Out & Departures",
      location: "Osaka, Japan",
      heroImage: japanDay07,
      description:
        "Check out and say goodbye to Japan and your travel crew, leaving with unforgettable memories and new friendships."
    }
  ],

  summary: {
    duration: "10 Days",
    activities: "20 Experiences",
    areas: "3 Cities",
    type: "Culture & Nature"
  },

  included: [
    {
      title: "Transportation & Passes",
      items: [
        { text: "Pre-loaded IC transit card covering all itinerary travel + extra credit for airport → hotel transfer" },
        { text: "Shinkansen (bullet train) from Tokyo to Kyoto" }
      ]
    },
    {
      title: "Meals",
      items: [
        { text: "1 × Dinner" },
        { text: "1 × Lunch" },
        { text: "Sake tasting experience" },
      ]
    },
    {
      title: "Tokyo Highlights",
      items: [
        { text: "Guided visit to Sensō-ji Temple" },
        { text: "Visit to Meiji Shrine" },
        { text: "Shibuya crossing" },
        { text: "Golden Gai night crawl (bar entrances not included)" }
      ]
    },
    {
      title: "Mount Fuji & Hakone",
      items: [
        { text: "Mount Fuji viewpoints (weather permitting)" },
        { text: "Lake Ashi pirate boat ride" },
        { text: "Hakone ropeway ride" }
      ]
    },
    {
      title: "Kyoto & Nara Experiences",
      items: [
        { text: "Fushimi Inari Shrine visit" },
        { text: "Arashiyama Bamboo Grove" },
        { text: "Nara Deer Park visit" },
        { text: "Kiyomizu-dera" },
        { text: "Nishiki Market visit" }
      ]
    },
    {
      title: "Osaka Experiences",
      items: [
        { text: "Osaka Castle" },
        { text: "Sushi-making class" }
      ]
    }
  ],

  faqs: [
    {
      question: "Is this an active walking tour?",
      answer: "This is a walking-focused trip. Expect to walk an average of 2–3 miles per day at a relaxed pace with frequent stops."
    },
    {
      question: "Which airport do I need to fly into?",
      answer: "You can arrive at either Narita International Airport (NRT) or Tokyo International Airport (HND, a.k.a. Haneda)."
    },
    {
      question: "Which airport do I need to fly out from?",
      answer: "For this 10-day trip, we recommend departing from Osaka's Kansai International Airport (KIX). You can also take the shinkansen back to Tokyo if needed."
    },
    {
      question: "Do you have an age limit for tours?",
      answer: "Our tours cater to adventurous travelers aged 18–45, with most guests between 21–35. If you're close to this range and feel you're a good fit, reach out."
    },
    {
      question: "What is the local currency?",
      answer: "Japanese Yen (JPY). Many places accept cards, but having some cash is useful for smaller shops and street food."
    },
    {
      question: "What are the visa requirements?",
      answer: "Visa requirements depend on your nationality and length of stay. Please check your own government's travel site and Japan's official guidance. For U.S. travelers, see \"Japan International Travel Information\" from the U.S. Department of State: https://travel.state.gov"
    }
  ],

  review: {
    testimonialText: "Did the Japan tour and it was honestly the best time of my life! A great mix of experiencing culture, food and nightlife. Would definitely recommend, one ticked off the bucket list!",
    author: "Daniel Riley, United Kingdom",
    images: []
  }
};
