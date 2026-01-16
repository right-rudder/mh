// ==============================
// Brand Assets And Information
// ==============================
export const OG_IMAGE = "/og-image.png";
export const FAVICON = "/favicon.png";
export const LOGO = "/logo.png";

export const LOGO_ASSETS = "/src/assets/brand/logo.png";
export const LOGO_ASSETS_ALTERNATIVE = "/src/assets/brand/logo-anternative.png";
export const LOGO_ASSETS_2 = "/src/assets/brand/MH Aviation White.png";
export const LOGO_ASSETS_3 = "/src/assets/brand/MH Aviation Black.png"; 

export const COMPANY_NAME = "MH Aviation";
export const COMPANY_NAME_CAPS = "MH AVIATION";
export const COMPANY_NICKNAME = "MH Aviation";

export const COMPANY_PRIMARY_SERVICE = "Flight School"
export const COMPANY_SECONDARY_SERVICE = "Aviation Maintenance"

export const PHONE_NUMBER = "(661) 948-7779";
export const PHONE_NUMBER_HEADER = "(661) 948-7779";

export const ADDRESS_LINE_1 = "4651 William J Barnes Avenue";
export const ADDRESS_LINE_2 = "Lancaster, CA 93536";

export const ADDRESS = "4651 William J Barnes Avenue, Lancaster, CA 93536";
export const ADDRESS_CITY = "Lancaster";
export const ADDRESS_STATE = "California";
export const ADDRESS_ZIP = "93536";

export const AIRPORT = "Gen. William Fox Airfield";
export const AIRPORT_CODE = "KWJF";
export const AIRPORT_WITH_CODE = "Gen. William Fox Airfield (KWJF)"
export const AIRPORT_WITH_CODE_SHORT = "Fox Field (KWJF)"

export const GMAPS = ""; // CONTEXT MISSING
export const EMAIL_ADDRESS = "info@mhaviation.com";
export const WEBSITE_DOMAIN = "www.mhaviation.com"
export const WEBSITE_DOMAIN_COMPLETE = "https://www.mhaviation.com"

export const FACEBOOK_URL = "https://www.facebook.com/mhaviation/"; // CONTEXT MISSING
export const INSTAGRAM_URL = "https://www.instagram.com/mhaviationinc"; // CONTEXT MISSING
export const LINKEDIN_URL = ""; // CONTEXT MISSING
export const X_URL = ""; // CONTEXT MISSING
export const YOUTUBE_URL = ""; // CONTEXT MISSING
export const YELP_URL = "https://www.yelp.com/biz/mh-aviation-lancaster";
export const GITHUB_URL = ""; // CONTEXT MISSING
export const COMPANY_STRATUS_LINK = "https://apply.stratus.finance/"

export const LOCATIONS = [
  {
    title: "Gen. William Fox Airfield",
    address: "4651 William J Barnes Avenue",
    city: "Lancaster",
    state: "CA",
    zip: "93536",
    gMaps: "https://maps.app.goo.gl/xFh24wDBdqwYerwx6", 
    phone: "(661) 948-7779",
    forwardPhone: "(661) 948-7779",
    fullAddress: "4651 William J Barnes Avenue, Lancaster, CA 93536",
    fullAddressLineBreak: "4651 William J Barnes Avenue\nLancaster, CA 93536",
  },
];

// ==============================
// SEO - Website Metatags
// ==============================
export const SITE_TITLE = `${COMPANY_NAME} | ${COMPANY_PRIMARY_SERVICE}${
  COMPANY_SECONDARY_SERVICE?.trim() ? ` & ${COMPANY_SECONDARY_SERVICE}` : ""
}`;
export const SITE_DESCRIPTION =
  `${COMPANY_NAME} is a family-owned flight school, FBO, and FAA Repair Station at ${LOCATIONS[0].title} in ${LOCATIONS[0].city}, ${LOCATIONS[0].state}, offering ${COMPANY_PRIMARY_SERVICE} and ${COMPANY_SECONDARY_SERVICE}.`;

// ==============================
// SEO - Website Keywords
// ==============================
export const KEYWORDS = [
  "MH Aviation",
  "flight school Lancaster CA",
  "Gen. William Fox Airfield flight training",
  "aircraft maintenance Lancaster",
  "multi-engine training",
  "private pilot training",
  "instrument rating training",
  "FBO Lancaster CA",
  "MH Fuels",
  "FAA repair station 145",
  "pilot training Antelope Valley",
].join(", ");

export const PRIMARY_KEYWORDS = {
  informational:
    "how to become a pilot, flight training requirements, aircraft annual inspection cost, FAA repair station services, multi-engine rating requirements",
  navigational:
    "MH Aviation, MH Fuels, Fox Field flight school, MH Aviation Lancaster",
  commercial:
    "flight training Lancaster CA, multi-engine rating near me, aircraft maintenance shop, learn to fly Fox Field",
  transactional:
    "schedule discovery flight, contact MH Aviation, book aircraft maintenance, flight instruction Lancaster CA",
};

export const PROGRAM_KEYWORDS = {
  privatePilot:
    "private pilot training, PPL Lancaster CA, learn to fly single engine",
  instrumentRating:
    "instrument rating training, IFR certification, instrument flight rules training",
  commercialPilot:
    "commercial pilot training, CPL certificate, professional pilot career",
  flightInstructor:
    "CFI training, CFII instructor job, MEI training, multi-engine instructor",
};

export const LOCATION_KEYWORDS = {
  primary: "Gen. William Fox Airfield flight training, Lancaster CA flight school",
  secondary:
    "Antelope Valley pilot training, Palmdale flight school, Quartz Hill aviation, Rosamond flight training",
};

export const CITY_AND_STATE = "Lancaster, CA"

// ==============================
// Others consts for program/service/crew information were removed, use content collections instead
// If generates a specific page = Use Astro Content Collection (.md)
// If used in pages = Use a const here
// ==============================

// ==============================
// Project Specific stuff
// ==============================

export type MenuItem = {
  label: string;
  url: string;
  children?: MenuItem[];
};

export const footerMenu: MenuItem[] = [
  {
    label: "About",
    url: "/about-us",
    children: [
      { label: "New to Flying?", url: "/new-to-flying/" },
      { label: "About Us", url: "/about-us/" },
      { label: "FAQs", url: "/faqs/" },
      { label: "Financing", url: "/financing/" },
      { label: "Blog", url: "/blog" },
      { label: "Contact Us", url: "/contact/" },
    ],
  },
];

export const navbarMenu: MenuItem[] = [
  {
    label: "New to Flying?",
    url: "/new-to-flying",
    children: [
      { label: "New to Flying?", url: "/new-to-flying" },
      { label: "Financing", url: "/financing" },
      { label: "FAQs", url: "/faqs" },
    ],
  },
  {
    label: "About Us",
    url: "/about-us",
    children: [
      { label: "About Us", url: "/about-us" },
      { label: "Our Fleet", url: "/fleet" },
      { label: "Our Blog", url: "/blog" },
    ],
  },
];