import image1 from "@/assets/images/products/Advanced-pod-Mod.png";
import image2 from "@/assets/images/products/AIO-pod.png";
import image3 from "@/assets/images/products/Box-Mod-Vape.png";
import image4 from "@/assets/images/products/Disposable-Vape.png";
import image5 from "@/assets/images/products/Large-High-Wattage-Box.png";
import image6 from "@/assets/images/products/Mechanical-Mod.png";
import image7 from "@/assets/images/products/Modern-Pod-System.png";
import image8 from "@/assets/images/products/Open-Pod-System.png";
import image9 from "@/assets/images/products/Pen-Style-Vape.png";
import image10 from "@/assets/images/products/Pod-Style-vape.png";
import image11 from "@/assets/images/products/Small-Discreet-Pod.png";
import image12 from "@/assets/images/products/Sub-Ohnm-Tank.png";

interface Product {
  id: number;
  name: string;
  subName: string;
  price: number;
  imgUrl: string;
  category: string;
  rating: number;
  stock: number;
  description: string;
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Pro Pod Mod",
    subName: "Advanced Chipset Edition",
    price: 64.99,
    imgUrl: image1,
    category: "Pod Mods",
    rating: 4.8,
    stock: 45,
    description:
      "Bridging the gap between convenience and power, this advanced pod mod offers adjustable wattage and airflow.",
  },
  {
    id: 2,
    name: "AIO Elite",
    subName: "All-In-One System",
    price: 49.99,
    imgUrl: image2,
    category: "AIO Kits",
    rating: 4.5,
    stock: 60,
    description:
      "The perfect all-in-one solution. Compact design with an internal tank system for mess-free vaping.",
  },
  {
    id: 3,
    name: "Standard Box Mod",
    subName: "Dual 18650 Kit",
    price: 75.0,
    imgUrl: image3,
    category: "Mods",
    rating: 4.7,
    stock: 35,
    description:
      "Reliable and sturdy, this box mod delivers consistent power with a user-friendly interface.",
  },
  {
    id: 4,
    name: "EasyPuff Disposable",
    subName: "Menthol Ice - 3000 Puffs",
    price: 12.99,
    imgUrl: image4,
    category: "Disposables",
    rating: 4.2,
    stock: 300,
    description:
      "Grab and go convenience. No charging or refilling required, pre-filled with premium nic salts.",
  },
  {
    id: 5,
    name: "Titan 200W",
    subName: "High Wattage Beast",
    price: 119.99,
    imgUrl: image5,
    category: "Advanced Mods",
    rating: 4.9,
    stock: 15,
    description:
      "For the cloud chasers. This large device supports high wattage output and massive battery life.",
  },
  {
    id: 6,
    name: "Mech Tube V1",
    subName: "Mechanical Hybrid",
    price: 89.99,
    imgUrl: image6,
    category: "Mechanical",
    rating: 4.6,
    stock: 10,
    description:
      "A solid brass mechanical mod for expert users only. Direct battery output with no regulation chips.",
  },
  {
    id: 7,
    name: "Neo Pod System",
    subName: "Modern Series",
    price: 32.5,
    imgUrl: image7,
    category: "Pod Systems",
    rating: 4.4,
    stock: 80,
    description:
      "Sleek lines and modern aesthetics. Features USB-C fast charging and auto-draw activation.",
  },
  {
    id: 8,
    name: "Open Air Pod",
    subName: "Refillable Kit",
    price: 28.99,
    imgUrl: image8,
    category: "Pod Systems",
    rating: 4.3,
    stock: 95,
    description:
      "An open system allowing you to choose your own e-liquid. Economical and eco-friendly.",
  },
  {
    id: 9,
    name: "Classic Pen",
    subName: "Starter Stick",
    price: 19.99,
    imgUrl: image9,
    category: "Vape Pens",
    rating: 4.1,
    stock: 150,
    description:
      "The traditional pen style vape. Simple one-button operation perfect for beginners.",
  },
  {
    id: 10,
    name: "Pod Style V2",
    subName: "Ergonomic Grip",
    price: 39.99,
    imgUrl: image10,
    category: "Pod Systems",
    rating: 4.5,
    stock: 55,
    description:
      "Designed to fit perfectly in the palm of your hand, offering great flavor production.",
  },
  {
    id: 11,
    name: "Stealth Mini",
    subName: "Discreet Edition",
    price: 24.99,
    imgUrl: image11,
    category: "Pod Systems",
    rating: 4.6,
    stock: 120,
    description:
      "Ultra-small form factor. Ideal for stealth vaping and fits easily in a coin pocket.",
  },
  {
    id: 12,
    name: "Cloud Tank Z",
    subName: "Sub-Ohm Atomizer",
    price: 29.99,
    imgUrl: image12,
    category: "Tanks",
    rating: 4.7,
    stock: 70,
    description:
      "High airflow sub-ohm tank designed for maximum vapor production and rich flavor profiles.",
  },
];

export const priceRange: { name: string }[] = [
  {
    name: "10-15",
  },
  {
    name: "20-30",
  },
  {
    name: "35-50",
  },
];
