// Centralized site data — used across nav, footer, schema, CTAs
// Roofing Insurance Agency — connecting roofing contractors with specialized coverage

export const SITE = {
  name: "Roofing Insurance Agency",
  legalName: "Roofing Insurance Agency (by Contractors Choice Agency)",
  domain: "roofinginsuranceagency.com",
  url: "https://roofinginsuranceagency.com",
  tagline: "Your Dedicated Roofing Insurance Specialist",
  description:
    "Specialized commercial insurance for roofing contractors — general liability with completed operations, workers' compensation for roofing crews, commercial auto for work trucks, tools and equipment, commercial umbrella, contractors pollution liability, commercial property, and surety bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Roofing",
  brandSub: "Insurance Agency",
  nicheShort: "roofing contractor",
  nicheShortCap: "Roofing Contractor",
  nichePlural: "roofing contractors",
  nichePluralCap: "Roofing Contractors",
  operator: "roofing operation",
  operatorCap: "Roofing Operation",
  industry: "roofing",
  industryCap: "Roofing",
  audience: "roofing contractors",
  audienceCap: "Roofing Contractors",
  ownerTitle: "roofing contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Roofing Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "GL with completed operations for roofers",
    description:
      "The foundation of every roofing contractor's program. Covers third-party bodily injury and property damage during operations — and the completed-operations tail that extends years after a project is finished, covering latent defect and water-intrusion claims.",
    icon: "ShieldCheck",
    keywords: ["roofing contractor general liability", "roofer GL insurance", "roofing completed operations", "roofing liability coverage"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For roofing crews and laborers",
    description:
      "Roofing ranks among the highest-hazard trades — falls from heights, nail gun injuries, heat exposure. We place workers' comp with carriers that understand roofing operations and assign correct class codes for roofing labor.",
    icon: "HardHat",
    keywords: ["roofing workers compensation", "roofer workers comp", "roofing crew workers comp", "roofing injury insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Work trucks, vans, and trailers",
    description:
      "Coverage for the pickups, flatbeds, box trucks, and trailers your crew drives to every job — including hired and non-owned auto when employees use their own vehicles for roofing business.",
    icon: "Truck",
    keywords: ["roofing commercial auto", "roofer truck insurance", "roofing vehicle coverage", "contractor commercial auto"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Nail guns, compressors, and staging",
    description:
      "Inland marine coverage for nail guns, air compressors, generators, ladders, scaffolding, and staging equipment. Covers theft, accidental damage, and mysterious disappearance at job sites, in transit, and at your shop.",
    icon: "Wrench",
    keywords: ["roofing tools equipment insurance", "roofer equipment coverage", "roofing tools theft insurance", "contractor inland marine"],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella Insurance",
    short: "Excess limits above GL and auto",
    description:
      "An umbrella policy sits above your general liability and commercial auto, providing additional limits when a single claim exhausts the underlying coverage. Essential for roofers with larger project exposures or GC certificate requirements.",
    icon: "Umbrella",
    keywords: ["roofing umbrella insurance", "roofer excess liability", "roofing contractor umbrella", "contractor umbrella policy"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Office, storage yard, and equipment",
    description:
      "Covers your office, warehouse, storage yard, and business personal property inside them — including inventory, materials in storage, and office equipment. Built for roofing contractors who operate from a fixed location or yard.",
    icon: "Building2",
    keywords: ["roofing commercial property insurance", "roofer business property", "roofing contractor office insurance", "contractor property coverage"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Asphalt fumes, solvents, and materials",
    description:
      "Roofing involves hot asphalt, solvents, adhesives, and coatings that create pollution exposure. CPL covers third-party bodily injury and property damage from pollutants released during roofing work — including asbestos disturbance on tear-offs.",
    icon: "Droplets",
    keywords: ["roofing pollution liability", "roofer CPL insurance", "roofing asphalt fume coverage", "contractor pollution coverage"],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds & Licensing",
    short: "License bonds and contract bonds",
    description:
      "Many states require roofing contractors to carry a license bond. We place contractor license bonds and bid/performance bonds quickly — coordinated with your insurance program for a single point of contact.",
    icon: "FileCheck",
    keywords: ["roofing surety bond", "roofer license bond", "roofing contractor bond", "contractor performance bond"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Dallas · Houston · San Antonio", blurb: "Texas roofing contractors face hail-season surge, high-volume storm work, and strict licensing requirements. We place GL, workers' comp, and commercial auto programs built for Texas roofing operations." },
  { slug: "florida", name: "Florida", region: "Miami · Tampa · Orlando", blurb: "Florida's hurricane exposure makes roofing one of the state's most active trades. We insure Florida roofers with completed-operations coverage that holds through long-tail claims after major storm events." },
  { slug: "southeast", name: "Southeast", region: "GA · SC · NC · TN", blurb: "Roofing contractors across the Southeast manage storm-season spikes and varied state licensing rules. We build programs that travel with multi-state roofing operations across the region." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Midwest roofing contractors work through severe weather seasons with freeze-thaw and hail exposure. We place GL and workers' comp programs suited for full-service roofers across the region." },
  { slug: "southwest", name: "Southwest", region: "AZ · NV · NM · CO", blurb: "Southwest roofers face intense UV, monsoon-season damage, and commercial flat-roof specialties. We insure roofing contractors across Arizona, Nevada, New Mexico, and Colorado." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID · MT", blurb: "Mountain-region roofers work with snow-load exposures and steep-pitch residential work. We build insurance programs for roofing contractors in the Mountain West." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · MA", blurb: "Northeast roofing contractors navigate dense urban work, tight licensing requirements, and high-value commercial projects. We place comprehensive programs for roofers across the Northeast corridor." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "West Coast roofers manage seismic exposure, wildfire-adjacent work zones, and California's strict contractor licensing rules. We insure Pacific-region roofing contractors with markets that understand the region." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Roofing-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 320, suffix: "+", label: "Roofing contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trade contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "A completed-operations claim came in 3 years after a reroof job — the homeowner alleged water intrusion from improper flashing. Our policy was structured with the right completed-ops tail and the claim was defended without a gap. This agency knows roofing coverage.", name: "Marcus D.", role: "Roofing Contractor", location: "Texas" },
  { quote: "We had a crew member fall from a second-story roof and break his arm. Workers' comp was structured correctly for roofing class codes so the claim was handled without dispute and he got care fast. These guys understand roofing.", name: "Sandra K.", role: "Operations Manager", location: "Florida" },
  { quote: "Our tools trailer got broken into at a job site — nail guns, compressors, generators, all gone. The inland marine claim was paid within a week. Having tools coverage that actually covers theft off-premises made all the difference.", name: "Joel R.", role: "Owner-Operator", location: "Ohio" },
] as const;
