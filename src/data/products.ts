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
      { id: "p-1", name: "STN Pipe Brackets", slug: "stn-pipe-brackets-item", categoryId: "cat-1", image: "/images/products/p_stn_pipe_brackets_v2.png" },
    ],
  },
  {
    id: "cat-2",
    name: "TVS Hex Bolt & Nut",
    slug: "tvs-hex-bolt-nut",
    image: "/images/catalogue/tvs-hex-bolt-nut.png",
    items: [
      { id: "p-2", name: "TVS Hex Bolt", slug: "tvs-hex-bolt", categoryId: "cat-2", image: "/images/products/p_tvs_hex_bolt_1784379962205.png" },
      { id: "p-3", name: "TVS Hex Nut", slug: "tvs-hex-nut", categoryId: "cat-2", image: "/images/products/p_tvs_hex_nut_1784379972593.png" },
    ],
  },
  {
    id: "cat-3",
    name: "Wheel Bolt & Nut",
    slug: "wheel-bolt-nut",
    image: "/images/catalogue/wheel-bolt-nut.png",
    items: [
      { id: "p-4", name: "Wheel Bolt", slug: "wheel-bolt", categoryId: "cat-3", image: "/images/products/p_wheel_bolt_1784379985603.png" },
      { id: "p-5", name: "Wheel Nut", slug: "wheel-nut", categoryId: "cat-3", image: "/images/products/p_wheel_nut_1784380004440.png" },
    ],
  },
  {
    id: "cat-4",
    name: "Concrete Fasteners & Nails",
    slug: "concrete-fasteners",
    image: "/images/catalogue/concrete-fasteners.png",
    items: [
      { id: "p-6", name: "Concrete Nail", slug: "concrete-nail", categoryId: "cat-4", image: "/images/products/p_concrete_nail_1784380017341.png" },
      { id: "p-7", name: "MS Pin", slug: "ms-pin", categoryId: "cat-4", image: "/images/products/p_ms_pin_1784380030311.png" },
      { id: "p-8", name: "Headless Nail", slug: "headless-nail", categoryId: "cat-4", image: "/images/products/p_headless_nail_1784380050494.png" },
    ],
  },
  {
    id: "cat-5",
    name: "Drill Bits & Taps",
    slug: "drill-bits",
    image: "/images/catalogue/drill-bits.png",
    items: [
      { id: "p-9", name: "Drill Bit", slug: "drill-bit", categoryId: "cat-5", image: "/images/products/p_drill_bit_1784380064595.png" },
      { id: "p-10", name: "Tap Set", slug: "tap-set", categoryId: "cat-5", image: "/images/products/p_tap_set_1784380076168.png" },
      { id: "p-11", name: "Centre Drill Bit", slug: "centre-drill-bit", categoryId: "cat-5", image: "/images/products/p_centre_drill_bit_1784380098749.png" },
    ],
  },
  {
    id: "cat-6",
    name: "Stainless Steel Fasteners",
    slug: "stainless-fasteners",
    image: "/images/catalogue/stainless-fasteners.png",
    items: [
      { id: "p-12", name: "Stainless Steel Bolt", slug: "ss-bolt", categoryId: "cat-6", image: "/images/products/p_ss_bolt_1784380109353.png" },
      { id: "p-13", name: "Stainless Steel Nut", slug: "ss-nut", categoryId: "cat-6", image: "/images/products/p_ss_nut_1784380120336.png" },
      { id: "p-14", name: "Stainless Steel Allen Screw", slug: "ss-allen-screw", categoryId: "cat-6", image: "/images/products/p_ss_allen_screw_1784461084219.png" },
    ],
  },
  {
    id: "cat-7",
    name: "Threaded Rods & Channels",
    slug: "thread-rods",
    image: "/images/catalogue/thread-rods.png",
    items: [
      { id: "p-15", name: "Thread Rod", slug: "thread-rod", categoryId: "cat-7", image: "/images/products/p_thread_rod_1784461098626.png" },
      { id: "p-16", name: "C Channel", slug: "c-channel", categoryId: "cat-7", image: "/images/products/p_c_channel_1784461110423.png" },
      { id: "p-17", name: "Tie Rod", slug: "tie-rod", categoryId: "cat-7", image: "/images/products/p_tie_rod_1784461136784.png" },
    ],
  },
  {
    id: "cat-8",
    name: "Welding Accessories",
    slug: "welding-accessories",
    image: "/images/catalogue/welding-accessories.png",
    items: [
      { id: "p-18", name: "Welding Hose", slug: "welding-hose", categoryId: "cat-8", image: "/images/products/p_welding_hose_1784461147842.png" },
      { id: "p-19", name: "Welding Cable", slug: "welding-cable", categoryId: "cat-8", image: "/images/products/p_welding_cable_1784461158301.png" },
    ],
  },
  {
    id: "cat-9",
    name: "Hand Tools & Fixings",
    slug: "hand-tools",
    image: "/images/catalogue/hand-tools.png",
    items: [
      { id: "p-20", name: "Hammer Fixing Screw", slug: "hammer-fixing-screw", categoryId: "cat-9", image: "/images/products/p_hammer_fixing_screw_1784461180515.png" },
      { id: "p-21", name: "Hammer", slug: "hammer", categoryId: "cat-9", image: "/images/products/p_hammer_1784461191440.png" },
      { id: "p-22", name: "Screw Driver", slug: "screw-driver", categoryId: "cat-9", image: "/images/products/p_screw_driver_1784461202881.png" },
    ],
  },
  {
    id: "cat-10",
    name: "Emery Products",
    slug: "emery-products",
    image: "/images/catalogue/emery-products.png",
    items: [
      { id: "p-23", name: "Emery Sheet", slug: "emery-sheet", categoryId: "cat-10", image: "/images/products/p_emery_sheet_1784461225413.png" },
      { id: "p-24", name: "Emery Belt", slug: "emery-belt", categoryId: "cat-10", image: "/images/products/p_emery_belt_1784461239000.png" },
      { id: "p-25", name: "Emery Roll", slug: "emery-roll", categoryId: "cat-10", image: "/images/products/p_emery_roll_1784461251288.png" },
    ],
  },
  {
    id: "cat-11",
    name: "Dowel Pins",
    slug: "dowel-pins",
    image: "/images/catalogue/dowel-pins.png",
    items: [
      { id: "p-26", name: "Dowel Pin", slug: "dowel-pin", categoryId: "cat-11", image: "/images/products/p_dowel_pin_1784461273273.png" },
      { id: "p-27", name: "Spring Dowel Pin", slug: "spring-dowel-pin", categoryId: "cat-11", image: "/images/catalogue/dowel-pins.png" },
    ],
  },
  {
    id: "cat-12",
    name: "Circlips",
    slug: "circlips",
    image: "/images/catalogue/circlips.png",
    items: [
      { id: "p-28", name: "Circlip", slug: "circlip", categoryId: "cat-12", image: "/images/products/p_e_circlip_v7_1784518237181.png" },
      { id: "p-29", name: "E-Circlip", slug: "e-circlip", categoryId: "cat-12", image: "/images/products/p_e_circlip_v9_cropped.png" },
    ],
  },
];
