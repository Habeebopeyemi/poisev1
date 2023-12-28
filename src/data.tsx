import product1 from "assets/img/charisma.png";
import product2 from "assets/img/class.png";
import product4 from "assets/img/JPG 1.png";
import product5 from "assets/img/JPG 2.png";

import social1 from "assets/img/Ellipse 1.png";
import platform1 from "assets/img/Vector.png";
import social2 from "assets/img/Ellipse 5.png";
import platform2 from "assets/img/Vector2.png";
export const header_info = [
  {
    id: 1,
    location: "#about",
    text: "About Us",
  },
  {
    id: 2,
    location: "#products",
    text: "Products",
  },
  {
    id: 3,
    location: "#contact",
    text: "Contact Us",
  },
];

export const images_arr = [
  {
    src: product1,
    alt: "poise" + Math.random(),
    id: Math.random() * 100,
  },
  {
    src: product2,
    alt: "poise" + Math.random(),
    id: Math.random() * 100,
  },
  {
    src: product4,
    alt: "poise" + Math.random(),
    id: Math.random() * 100,
  },
  {
    src: product5,
    alt: "poise" + Math.random(),
    id: Math.random() * 100,
  },
];

export const feedback = [
  {
    id: Math.random() * 200,
    handle: "- Eboreime AK.",
    comment:
      "The product is very good and your packaging is also very nice. It's been long since I have gotten value for money paid for an item.Thank you. Also,your customer service is very good. Please keep it up.",
    src: social1,
    platform: platform1,
  },
  {
    id: Math.random() * 200,
    handle: "- Mr. Sam.",
    comment:
      "I received it, and it’s lovely.  It’s my first time trying a Nigeria-made bag.",
    src: social2,
    platform: platform2,
  },
  {
    id: Math.random() * 200,
    handle: "- King Roms.",
    comment:
      "Good evening. The products are good. And I haven't had issues with the zipper or leather either. I like the purse.",
    src: social1,
    platform: platform1,
  },
  {
    id: Math.random() * 200,
    handle: "- Ginikachukwu Tagbo.",
    comment:
      "Ah! You guys are too much. I just got the package and I'm honestly shocked. This has to be the best branding I've seen in a very long time. I'm happy I patronized you guys.",
    src: social2,
    platform: platform2,
  },
];
