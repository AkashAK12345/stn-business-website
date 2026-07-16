export type ProductItem = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  image: string;
  description?: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  image: string;
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "cat-1",
    name: "STN Pipe Brackets",
    slug: "stn-pipe-brackets",
    image: "/images/catalogue/stn-pipe-brackets.png",
    items: [
      { id: "p-1", name: "STN Pipe Brackets", slug: "stn-pipe-brackets-item", categoryId: "cat-1", image: "/images/catalogue/stn-pipe-brackets.png" },
    ],
  },
  {
    id: "cat-2",
    name: "TVS Hex Bolt & Nut",
    slug: "tvs-hex-bolt-nut",
    image: "/images/catalogue/tvs-hex-bolt-nut.png",
    items: [
      { id: "p-2", name: "TVS Hex Bolt", slug: "tvs-hex-bolt", categoryId: "cat-2", image: "/images/catalogue/tvs-hex-bolt-nut.png" },
      { id: "p-3", name: "TVS Hex Nut", slug: "tvs-hex-nut", categoryId: "cat-2", image: "/images/catalogue/tvs-hex-bolt-nut.png" },
    ],
  },
  {
    id: "cat-3",
    name: "Wheel Bolt & Nut",
    slug: "wheel-bolt-nut",
    image: "/images/catalogue/wheel-bolt-nut.png",
    items: [
      { id: "p-4", name: "Wheel Bolt", slug: "wheel-bolt", categoryId: "cat-3", image: "/images/catalogue/wheel-bolt-nut.png" },
      { id: "p-5", name: "Wheel Nut", slug: "wheel-nut", categoryId: "cat-3", image: "/images/catalogue/wheel-bolt-nut.png" },
    ],
  },
  {
    id: "cat-4",
    name: "Concrete Fasteners & Nails",
    slug: "concrete-fasteners",
    image: "/images/catalogue/concrete-fasteners.png",
    items: [
      { id: "p-6", name: "Concrete Nail", slug: "concrete-nail", categoryId: "cat-4", image: "/images/catalogue/concrete-fasteners.png" },
      { id: "p-7", name: "MS Pin", slug: "ms-pin", categoryId: "cat-4", image: "/images/catalogue/concrete-fasteners.png" },
      { id: "p-8", name: "Headless Nail", slug: "headless-nail", categoryId: "cat-4", image: "/images/catalogue/concrete-fasteners.png" },
    ],
  },
  {
    id: "cat-5",
    name: "Drill Bits & Taps",
    slug: "drill-bits",
    image: "/images/catalogue/drill-bits.png",
    items: [
      { id: "p-9", name: "Drill Bit", slug: "drill-bit", categoryId: "cat-5", image: "/images/catalogue/drill-bits.png" },
      { id: "p-10", name: "Tap Set", slug: "tap-set", categoryId: "cat-5", image: "/images/catalogue/drill-bits.png" },
      { id: "p-11", name: "Centre Drill Bit", slug: "centre-drill-bit", categoryId: "cat-5", image: "/images/catalogue/drill-bits.png" },
    ],
  },
  {
    id: "cat-6",
    name: "Stainless Steel Fasteners",
    slug: "stainless-fasteners",
    image: "/images/catalogue/stainless-fasteners.png",
    items: [
      { id: "p-12", name: "Stainless Steel Bolt", slug: "ss-bolt", categoryId: "cat-6", image: "/images/catalogue/stainless-fasteners.png" },
      { id: "p-13", name: "Stainless Steel Nut", slug: "ss-nut", categoryId: "cat-6", image: "/images/catalogue/stainless-fasteners.png" },
      { id: "p-14", name: "Stainless Steel Allen Screw", slug: "ss-allen-screw", categoryId: "cat-6", image: "/images/catalogue/stainless-fasteners.png" },
    ],
  },
  {
    id: "cat-7",
    name: "Threaded Rods & Channels",
    slug: "thread-rods",
    image: "/images/catalogue/thread-rods.png",
    items: [
      { id: "p-15", name: "Thread Rod", slug: "thread-rod", categoryId: "cat-7", image: "/images/catalogue/thread-rods.png" },
      { id: "p-16", name: "C Channel", slug: "c-channel", categoryId: "cat-7", image: "/images/catalogue/thread-rods.png" },
      { id: "p-17", name: "Tie Rod", slug: "tie-rod", categoryId: "cat-7", image: "/images/catalogue/thread-rods.png" },
    ],
  },
  {
    id: "cat-8",
    name: "Welding Accessories",
    slug: "welding-accessories",
    image: "/images/catalogue/welding-accessories.png",
    items: [
      { id: "p-18", name: "Welding Hose", slug: "welding-hose", categoryId: "cat-8", image: "/images/catalogue/welding-accessories.png" },
      { id: "p-19", name: "Welding Cable", slug: "welding-cable", categoryId: "cat-8", image: "/images/catalogue/welding-accessories.png" },
    ],
  },
  {
    id: "cat-9",
    name: "Hand Tools & Fixings",
    slug: "hand-tools",
    image: "/images/catalogue/hand-tools.png",
    items: [
      { id: "p-20", name: "Hammer Fixing Screw", slug: "hammer-fixing-screw", categoryId: "cat-9", image: "/images/catalogue/hand-tools.png" },
      { id: "p-21", name: "Hammer", slug: "hammer", categoryId: "cat-9", image: "/images/catalogue/hand-tools.png" },
      { id: "p-22", name: "Screw Driver", slug: "screw-driver", categoryId: "cat-9", image: "/images/catalogue/hand-tools.png" },
    ],
  },
  {
    id: "cat-10",
    name: "Emery Products",
    slug: "emery-products",
    image: "/images/catalogue/emery-products.png",
    items: [
      { id: "p-23", name: "Emery Sheet", slug: "emery-sheet", categoryId: "cat-10", image: "/images/catalogue/emery-products.png" },
      { id: "p-24", name: "Emery Belt", slug: "emery-belt", categoryId: "cat-10", image: "/images/catalogue/emery-products.png" },
      { id: "p-25", name: "Emery Roll", slug: "emery-roll", categoryId: "cat-10", image: "/images/catalogue/emery-products.png" },
    ],
  },
  {
    id: "cat-11",
    name: "Dowel Pins",
    slug: "dowel-pins",
    image: "/images/catalogue/dowel-pins.png",
    items: [
      { id: "p-26", name: "Dowel Pin", slug: "dowel-pin", categoryId: "cat-11", image: "/images/catalogue/dowel-pins.png" },
      { id: "p-27", name: "Spring Dowel Pin", slug: "spring-dowel-pin", categoryId: "cat-11", image: "/images/catalogue/dowel-pins.png" },
    ],
  },
  {
    id: "cat-12",
    name: "Circlips",
    slug: "circlips",
    image: "/images/catalogue/circlips.png",
    items: [
      { id: "p-28", name: "Circlip", slug: "circlip", categoryId: "cat-12", image: "/images/catalogue/circlips.png" },
      { id: "p-29", name: "E-Circlip", slug: "e-circlip", categoryId: "cat-12", image: "/images/catalogue/circlips.png" },
    ],
  },
];
