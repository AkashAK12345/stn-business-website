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
    name: "Metal Bolts",
    slug: "metal-bolts",
    image: "/images/metal-bolts.png",
    items: [
      { id: "p-1", name: "High Tensile Bolt", slug: "high-tensile-bolt", categoryId: "cat-1", image: "/images/products/metal-bolts/high-tensile-bolt.png" },
      { id: "p-2", name: "B7 Stud Bolt", slug: "b7-stud-bolt", categoryId: "cat-1", image: "/images/products/metal-bolts/b7-stud-bolt.png" },
      { id: "p-3", name: "MS Hex Bolt", slug: "ms-hex-bolt", categoryId: "cat-1", image: "/images/products/metal-bolts/ms-hex-bolt.png" },
      { id: "p-4", name: "Hexagonal Bolt", slug: "hexagonal-bolt", categoryId: "cat-1", image: "/images/products/metal-bolts/hexagonal-bolt.png" },
    ],
  },
  {
    id: "cat-2",
    name: "Metal Screws",
    slug: "metal-screws",
    image: "/images/metal-screws.png",
    items: [
      { id: "p-5", name: "Allen Cap Screw", slug: "allen-cap-screw", categoryId: "cat-2", image: "/images/products/metal-screws/allen-cap-screw.png" },
      { id: "p-6", name: "Socket Head Cap Screw", slug: "socket-head-cap-screw", categoryId: "cat-2", image: "/images/products/metal-screws/socket-head-cap-screw.png" },
      { id: "p-7", name: "Carbon Steel Allen Screw", slug: "carbon-steel-allen-screw", categoryId: "cat-2", image: "/images/products/metal-screws/carbon-steel-allen-screw.png" },
    ],
  },
  {
    id: "cat-4",
    name: "Drill Bits",
    slug: "drill-bits",
    image: "/images/drill-bits.png",
    items: [
      { id: "p-10", name: "HSS Drill Bit", slug: "hss-drill-bit", categoryId: "cat-4", image: "/images/products/drill-bits/hss-drill-bit.png" },
      { id: "p-11", name: "Long Drill Bit", slug: "long-drill-bit", categoryId: "cat-4", image: "/images/products/drill-bits/long-drill-bit.png" },
      { id: "p-12", name: "Morse Taper Drill Bit", slug: "morse-taper-drill-bit", categoryId: "cat-4", image: "/images/products/drill-bits/morse-taper-drill-bit.png" },
    ],
  },
  {
    id: "cat-5",
    name: "Hand Tools",
    slug: "hand-tools",
    image: "/images/hand-tools.png",
    items: [
      { id: "p-13", name: "Eastman Ring Spanner", slug: "eastman-ring-spanner", categoryId: "cat-5", image: "/images/products/hand-tools/eastman-ring-spanner.png" },
      { id: "p-14", name: "T Spanner", slug: "t-spanner", categoryId: "cat-5", image: "/images/products/hand-tools/t-spanner.png" },
    ],
  },
  {
    id: "cat-6",
    name: "Threaded Studs",
    slug: "threaded-studs",
    image: "/images/threaded-studs.png",
    items: [
      { id: "p-15", name: "Double Ended Full Threaded Stud", slug: "double-ended-full-threaded-stud", categoryId: "cat-6", image: "/images/products/threaded-studs/double-ended-full-threaded-stud.png" },
      { id: "p-16", name: "Mild Steel Threaded Stud", slug: "mild-steel-threaded-stud", categoryId: "cat-6", image: "/images/products/threaded-studs/mild-steel-threaded-stud.png" },
    ],
  },
];
