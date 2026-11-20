SARIYAR ONLINE SHOP — শুরু করার নির্দেশিকা

১) ওয়েবসাইট চালু করে দেখা
- ZIP ফাইল Extract করুন।
- index.html ফাইলটি Chrome-এ খুলুন।
- ইন্টারনেট থাকলে Google Fonts লোড হবে; বাকি ওয়েবসাইট স্থানীয়ভাবেও দেখা যাবে।

২) নিজের WhatsApp নম্বর বসানো
- config.js ফাইল Notepad-এ খুলুন।
- whatsappNumber-এর জায়গায় বাংলাদেশের নম্বর 880 দিয়ে লিখুন।
  উদাহরণ: 01712345678 হলে লিখবেন 8801712345678
- +, স্পেস বা ড্যাশ দেবেন না।
- ফাইল Save করুন।

৩) পণ্য যোগ বা পরিবর্তন
- products.js ফাইল খুলুন।
- প্রতিটি পণ্যের name, category, price, description, image ও icon পরিবর্তন করুন।
- নতুন পণ্য যোগ করতে একটি item কপি করে id আলাদা দিন।
- image-এ ছবি দিতে হলে একই ফোল্ডারে images নামে ফোল্ডার তৈরি করে ছবি রাখুন; যেমন image: "images/shirt.jpg"
- পরিবর্তনের পর index.html আবার খুলুন বা Refresh দিন।

৪) বিনা খরচে অনলাইনে প্রকাশ
- GitHub-এ ফ্রি অ্যাকাউন্ট খুলুন।
- নতুন Public repository তৈরি করুন, নাম দিন sariyar-online-shop
- এই ফোল্ডারের সব ফাইল repository-তে Upload করুন।
- Repository Settings > Pages > Deploy from a branch নির্বাচন করুন।
- Branch হিসেবে main এবং folder হিসেবে /(root) নির্বাচন করে Save দিন।
- কিছুক্ষণ পর GitHub Pages একটি বিনামূল্যের ওয়েব ঠিকানা দেবে।
  (GitHub-এর ইন্টারফেস বদলাতে পারে।)

গুরুত্বপূর্ণ সীমাবদ্ধতা
- এটি প্রথম সংস্করণের static storefront; আলাদা secure admin panel বা database নেই।
- পণ্য পরিবর্তন করতে products.js সম্পাদনা করে আবার GitHub-এ আপলোড করতে হবে।
- অর্ডার WhatsApp-এ যাবে; ওয়েবসাইট নিজে পেমেন্ট গ্রহণ বা অর্ডার সংরক্ষণ করে না।
- GitHub Pages-এ HTTPS-সহ বিনামূল্যের hosting পাওয়া যায়; নিজস্ব .com ডোমেইন সাধারণত ফ্রি নয়।
- ক্রেতার তথ্য, পেমেন্ট বা পাসওয়ার্ড এই static website-এ সংগ্রহ করবেন না।
