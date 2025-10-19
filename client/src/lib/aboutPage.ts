interface Orderlist {
  chooseName: string;
  descriptions: string;
}

interface AboutConfig {
  name: string;
  descriptions?: string;
  orderlist?: Orderlist[];
}

export const aboutData: AboutConfig[] = [
  {
    name: "About Us",
    descriptions:
      "Welcome to Cloud vapers, your ultimate destination for premium vapes, pods, and e-liquids. We’re passionate about delivering high-quality vaping products that match your lifestyle—whether you’re a beginner exploring your first vape or a seasoned enthusiast looking for advanced gear.",
  },

  {
    name: "Our Story",
    descriptions:
      "Founded in 2025, Cloude vapers was built on a simple idea: to make vaping accessible, reliable, and enjoyable for everyone.We started as a small group of vape enthusiasts who wanted to create a trusted online store where customers could find authentic products, competitive prices, and excellent service all in one place.",
  },
  {
    name: "Our Mission",
    descriptions:
      "Our mission is to elevate your vaping experience by offering quality, convenience, and care.We aim to build a community of responsible vapers who appreciate innovation and authenticity.",
  },

  {
    name: "Why Choose Us",
    orderlist: [
      {
        chooseName: "💨 Authentic Products –",
        descriptions: "100% genuine items from trusted vape brands.",
      },
      {
        chooseName: "🚚 Fast & Secure Delivery –",
        descriptions: "We ensure quick shipping right to your doorstep.",
      },
      {
        chooseName: "💬 Excellent Customer Support –",
        descriptions: "Our team is always ready to help.",
      },
      {
        chooseName: "💰 Best Prices Guaranteed –s",
        descriptions: "Premium products without the premium cost.",
      },
    ],
  },
  {
    name: "Join Our Community",
    descriptions:
      "At Cloud vapers, we’re more than just a vape shop—we’re a community. Follow us on social media and stay updated with the latest releases, promotions, and vaping tips.",
  },
];
