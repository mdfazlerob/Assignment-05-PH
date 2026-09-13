# Dev Stack

## চালানোর নিয়ম

```bash
npm install
npm run dev
```

## ⚠️ একটা কাজ বাকি আছে

`src/components/Hero.jsx`-এ একটা image path দেওয়া আছে:
```
/images/hero-cube.png
```
এই ফাইলটা `public/images/` ফোল্ডারে এখনো নেই — তোমার পছন্দের একটা tech/cube-themed ছবি (Unsplash, AI generated, বা যেকোনো জায়গা থেকে) নিয়ে ওই নামে `public/images/hero-cube.png` হিসেবে রেখে দাও, তাহলে hero section-এ ছবি দেখাবে।

## যা যা fix করা হয়েছে

1. **TechnologyCard.jsx** — `stack` prop-এর বদলে সরাসরি `isAdded` prop নিচ্ছে (আগে এখানে crash হতো)।
2. **Technologies.jsx** — CSS class নাম `technology-section` / `technology-layout` (আগে `technologies-` লেখা ছিল, CSS-এর সাথে mismatch হচ্ছিল)।
3. **Hero.jsx** — button class `primary-btn` / `secondary-btn` (আগে `btn-primary` / `btn-secondary` ছিল, style apply হতো না) + placeholder cube div-এর বদলে আসল `<img>` ট্যাগ।
4. **YourStack.jsx** — "Technologies" শব্দের গ্রামার ঠিক করা হয়েছে (আগে "Technologyies" দেখাতো)।
5. **Navbar.jsx** — মোবাইলে hamburger বাটনে কাজ করা toggle state যোগ করা হয়েছে (আগে শুধু আইকন ছিল, click করলে কিছুই হতো না)।
6. **index.css** — `.nav-links.open` rule যোগ করা হয়েছে যাতে মোবাইল মেনু খোলে/বন্ধ হয়, আর `.hero-image img` সাইজিং ঠিক করা হয়েছে।
