import type { Post } from "./types";

export const postFullMock: Post = {
  id: 0,
  image:
    "https://t3.ftcdn.net/jpg/01/32/36/62/360_F_132366202_h29Ryf57rEoh0GRLQQUHzNrSW3vWBEyj.jpg",
  text: "Russian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. Russian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. Russian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. Russian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight. Russian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 39,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: "Yuri Gagarin",
};

export const postLargeMock: Post = {
  id: 1,
  image:
    "https://t3.ftcdn.net/jpg/01/32/36/62/360_F_132366202_h29Ryf57rEoh0GRLQQUHzNrSW3vWBEyj.jpg",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 39,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: "Neil Armstrong",
};

export const postMediumMock: Post = {
  id: 2,
  image:
    "https://st4.depositphotos.com/15109688/24033/i/450/depositphotos_240335872-stock-photo-astronaut-walk-on-the-moon.jpg",
  text: " Italian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 39,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: "Neil Armstrong",
};

export const postSmallMock: Post = {
  id: 3,
  image:
    "https://static5.depositphotos.com/1035224/498/i/450/depositphotos_4986312-stock-photo-astronaut-background-planet.jpg",
  text: "Mongolian Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 39,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: "Neil Armstrong",
};

//массив объектов
export const postsAll: Post[] = [
  {
    id: 1,
    image:
      "https://t3.ftcdn.net/jpg/01/32/36/62/360_F_132366202_h29Ryf57rEoh0GRLQQUHzNrSW3vWBEyj.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "April 20, 2021",
    lesson_num: 1,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: "NASA Media Team",
  },
  {
    id: 2,
    image:
      "https://st4.depositphotos.com/15109688/24033/i/450/depositphotos_240335872-stock-photo-astronaut-walk-on-the-moon.jpg",
    text: "The robotic explorer has successfully collected core samples from a delta formation inside Jezero Crater. Scientists believe these sedimentary layers contain critical insights into whether microbial life ever existed on the Red Planet billions of years ago.",
    date: "September 14, 2022",
    lesson_num: 2,
    title: "Perseverance Rover Uncovers New Clues About Ancient Mars Lake",
    author: "Dr. Elena Rostova",
  },
  {
    id: 3,
    image:
      "https://static5.depositphotos.com/1035224/498/i/450/depositphotos_4986312-stock-photo-astronaut-background-planet.jpg",
    text: "A stunning new infrared image reveals hundreds of previously hidden stars inside the Cosmic Cliffs. The high-resolution data allows astronomers to analyze the gas and dust structures triggering star formation in unprecedented detail.",
    date: "January 08, 2023",
    lesson_num: 3,
    title:
      "James Webb Telescope Captures Breathtaking Views of Deep Stellar Nursery",
    author: "Alex Mercer",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1587601513/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BF%D0%BE%D0%BB%D0%B5%D1%82%D0%B0-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B2-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%B4%D0%BD%D1%8F-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%B8%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=1t709koaiE4pUcdd17h8WCbvr6KcNYYZ1LhRHA40LNM=",
    text: "Engineers have completed the orbital simulations for the upcoming lunar mission. The four-member crew will test deep-space communication networks and life-support systems while charting the closest path to the Moon's far side since Apollo.",
    date: "November 05, 2024",
    lesson_num: 4,
    title: "Artemis Program Finalizes Trajectory for Next Crewed Lunar Flyby",
    author: "Sarah Jenkins",
  },
  {
    id: 5,
    image:
      "https://www.shutterstock.com/shutterstock/videos/3588788041/thumb/1.jpg?ip=x480",
    text: "Using advanced transmission spectroscopy, researchers have identified significant atmospheric moisture signatures on a rocky world just 40 light-years away. Further observations will determine if the planet falls within the conservative habitable zone.",
    date: "June 22, 2025",
    lesson_num: 5,
    title: "Water Vapor Detected in Atmosphere of Nearby Earth-sized Exoplanet",
    author: "Prof. Michael Chang",
  },
  {
    id: 6,
    image:
      "https://st2.depositphotos.com/1000647/6366/i/950/depositphotos_63666425-stock-photo-astronaut-in-outer-space.jpg",
    text: "New data from ground-based telescopes reveals that 'ring rain' is draining water ice from Saturn's iconic rings at a maximum rate. Scientists estimate the ring system could completely vanish within 100 million years.",
    date: "February 11, 2026",
    lesson_num: 6,
    title: "Saturn's Rings are Disappearing Faster Than Previously Estimated",
    author: "Dr. Marcus Vance",
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/id/626103976/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D1%82-%D0%B2-%D0%BA%D0%BE%D1%81%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5.jpg?s=612x612&w=0&k=20&c=a-ey01-cZEUI2Adp_cQ6kPy1EI6brBgVIY34z-tSHQM=",
    text: "A commercial exploration vehicle has successfully deployed its anchoring mechanism on a carbonaceous asteroid. The mission aims to analyze platinum-group metals and water ice content for future orbital refueling stations.",
    date: "April 03, 2026",
    lesson_num: 7,
    title: "Deep Space Probe Successfully Anchors to Near-Earth Asteroid",
    author: "Elena Rostova",
  },
  {
    id: 8,
    image:
      "https://img.gazeta.ru/files3/819/13375819/Depositphotos_218650824_l-2015.jpg",
    text: "An X-class solar flare ejected a massive cloud of plasma directly toward Earth. While it caused minor shortwave radio blackouts, it created spectacular northern lights visible much further south than usual.",
    date: "May 19, 2026",
    lesson_num: 8,
    title: "Massive Solar Flare Triggers Stunning Aurorae Across Mid-Latitudes",
    author: "Solar Weather Bureau",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1353874144/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82-%D0%B2-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81%D0%B5-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82-%D1%81%D0%BE-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%BD%D1%8B%D0%BC-%D0%B8-%D0%B3%D0%B0%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D1%84%D0%BE%D0%BD%D0%BE%D0%BC-%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D0%BE-%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%8B%D0%B5.jpg?s=612x612&w=0&k=20&c=9g_RzEoOEjELKd26_6X7P3IWKGOmg5tw75y6v37nGc8=",
    text: "As the spacecraft completed its latest flyby of Jupiter's moon Europa, infrared sensors detected unexpected warm spots. Scientists suspect these areas might indicate thin ice zones where the subsurface ocean interacts with the surface.",
    date: "July 28, 2026",
    lesson_num: 9,
    title: "Europa Clipper Detects Thermal Anomalies in Icy Crust",
    author: "Dr. David Kim",
  },
  {
    id: 10,
    image:
      "https://images.techinsider.ru/upload/img_cache/bc2/bc293f87894d919fbf821c4cbf925a8e_ce_1876x1000x125x41.jpg",
    text: "Using a global network of synchronized radio dishes, researchers have captured a highly detailed polarized image of a black hole's event horizon, revealing strong spiral magnetic fields shaping its plasma jet.",
    date: "September 05, 2026",
    lesson_num: 10,
    title:
      "Astronomers Map the Magnetic Fields of a Supermassive Black Hole Jet",
    author: "Event Horizon Team",
  },
  {
    id: 11,
    image:
      "https://i.pinimg.com/736x/71/58/56/7158561b8c7f64135d75e5909474fe05.jpg",
    text: "An aerospace startup has achieved a major milestone by autonomously docking its commercial habitat module to an expanding private space station, paving the way for orbital tourism and industrial manufacturing.",
    date: "October 12, 2026",
    lesson_num: 11,
    title:
      "First Private Module Successfully Docks with Commercial Space Outpost",
    author: "Sarah Jenkins",
  },
  {
    id: 12,
    image:
      "https://masterpiecer-images.s3.yandex.net/b502ee9386b711eebbc3d20dae950626:upscaled",
    text: "Astronomers analyzing light curves from a distant star system have identified a secondary dip in brightness, strongly indicating the presence of a Neptune-sized moon orbiting a giant gas exoplanet.",
    date: "November 23, 2026",
    lesson_num: 12,
    title:
      "Webb Telescope Finds Compelling Evidence of First Confirmed Exomoon",
    author: "Prof. Michael Chang",
  },
  {
    id: 13,
    image:
      "https://glstatic.rg.ru/uploads/images/2022/04/11/den_kosmonaftiki_oblogka_960-960x540_e38.jpg",
    text: "Engineers have verified the durability of a new high-efficiency thruster designed for deep-space transport. This technology will significantly reduce transit times for upcoming human missions to outer planets.",
    date: "December 15, 2026",
    lesson_num: 13,
    title:
      "Next-Gen Ion Propulsion System Completes 10,000 Hours of Continuous Testing",
    author: "Alex Mercer",
  },
  {
    id: 14,
    image:
      "https://st3.depositphotos.com/1000423/18797/i/450/depositphotos_187978588-stock-photo-spaceman-carrying-his-mission-mixed.jpg",
    text: "Precision tracking of stellar motions in local galaxies reveals that our Milky Way and the neighboring Andromeda galaxy will begin their galactic merger slightly later than previously calculated, in about 4.5 billion years.",
    date: "January 20, 2027",
    lesson_num: 14,
    title: "New Gaia Data Refines Timeline of Andromeda-Milky Way Collision",
    author: "ESA Astronomy Desk",
  },
  {
    id: 15,
    image:
      "https://i.pinimg.com/736x/78/07/0c/78070c31f4644083fbed4c6d637ade79.jpg",
    text: "An experimental payload aboard a stationary lander has confirmed the successful germination of genetically modified seeds in a automated pressurized chamber, using treated Martian regolith as a growth medium.",
    date: "February 18, 2027",
    lesson_num: 15,
    title:
      "Automated Greenhouse Prototype Successfully Sprouts Crops on Mars Surface",
    author: "Dr. Elena Rostova",
  },
];
