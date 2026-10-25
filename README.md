# منصة الأمين التعليمية (Al-Ameen Educational Platform)

منصة تعليمية متخصصة في برامج وكورسات التخاطب والنطق وتنمية المهارات السريرية للطلاب والدارسين.

---

## 🚀 المميزات الرئيسية (Key Features)

- **تصميم متقن وعصري**: تم بناء الواجهات وفق معايير وتصاميم فيجما الدقيقة مع استلهام أرقى أنماط SaaS الحديثة (WorkDo.io).
- **دعم ثنائي اللغة كامل (Bilingual RTL / LTR)**:
  - دعم أصيل للغة العربية (RTL) مع خطوط `Baloo Bhaijaan 2` و `Cairo`.
  - دعم كامل للغة الإنجليزية (LTR) مع خطوط `Outfit` و `Inter`.
  - تبديل فوري للاتجاه والنصوص دون إعادة تحميل الصفحة عبر محرك `i18n.js`.
- **لوحة تحكم الطالب (Student Workspace)**:
  - لوحة متابعة تقدم الدروس ونسب المشاهدة.
  - جدول الدرجات والتقييمات السريرية (`pages/grades.html`).
  - تسليم المهام مع إرشادات ووسائط إبداعية (`pages/assignment.html`).
  - إصدار وتحميل الشهادات المعتمدة بتقنية PDF (`pages/certificates.html` و `pages/certificate.html`).
- **الصفحات العامة ودليل البرامج**:
  - الصفحة الرئيسية التفاعلية (`index.html`).
  - دليل واستكشاف الدورات التدريبية مع فلترة فورية وبحث حي (`pages/courses.html`).
  - تفاصيل الدورة وقائمة الدروس الـ 20 (`pages/course-details.html`).
  - صفحة تشغيل الفيديو والاختبارات التفاعلية (`pages/lesson.html`).
  - آراء وتقييمات الطلاب وقصص النجاح ومخطط النجوم ونموذج إضافة تقييم (`pages/reviews.html`).
  - مركز التواصل والدعم الفني وقنوات المساندة ونموذج الاستفسارات والأسئلة الشائعة (`pages/contact.html`).
  - الملف الشخصي وإعدادات الحساب والأمان والإشعارات (`pages/profile.html`).
  - صفحات الدخول والتسجيل ونتائج الاختبارات (`pages/login.html`, `pages/register.html`, `pages/result.html`).

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **HTML5** & **Semantic Markup**
- **Tailwind CSS v4** + Design Tokens (`tokens.css`)
- **Vanilla JavaScript (ES Modules)**
- **Vite** (Dev server & fast bundler)
- **Google Fonts** (`Baloo Bhaijaan 2`, `Cairo`, `Outfit`, `Inter`)

---

## 💻 التشغيل المحلي (Getting Started)

### المتطلبات:
- [Node.js](https://nodejs.org/) (الإصدار 18 أو أحدث)
- `npm`

### خطوات التثبيت والتشغيل:

```bash
# 1. استنساخ المشروع
git clone https://github.com/Abdoakram512/Alameen-center-front.git
cd Alameen-center-front

# 2. تثبيت الحزم
npm install

# 3. تشغيل السيرفر المحلي للتطوير
npm run dev

# 4. بناء نسخة الإنتاج
npm run build
```

---

## 📄 بنية المشروع (Project Structure)

```
├── index.html                   # الصفحة الرئيسية
├── pages/
│   ├── dashboard.html           # لوحة الطالب
│   ├── courses.html             # دليل الدورات واستكشافها
│   ├── course-details.html      # تفاصيل الدورة ومحتواها
│   ├── lesson.html              # مشغل الفيديو والدرس
│   ├── assignment.html          # تسليم المهام
│   ├── grades.html              # جدول الدرجات
│   ├── certificates.html        # قائمة الشهادات
│   ├── certificate.html         # معاينة الشهادة المعتمدة
│   ├── reviews.html             # آراء الطلاب والتقييمات
│   ├── contact.html             # تواصل معنا والدعم الفني
│   ├── profile.html             # الملف الشخصي وإعدادات الحساب
│   ├── login.html               # تسجيل الدخول
│   ├── register.html            # إنشاء حساب جديد
│   └── result.html              # نتيجة الاختبار
├── public/
│   ├── assets/images/           # الصور والأيقونات الأصلية
│   └── locales/                 # ملفات الترجمة (ar.json, en.json)
├── src/
│   ├── css/                     # styles.css & tokens.css
│   └── js/                      # i18n.js & main.js
└── vite.config.js               # إعدادات Vite ومسارات الصفحات
```

---

## ⚖️ حقوق الملكية (License)

جميع الحقوق محفوظة © لمنصة الأمين التعليمية ٢٠٢٦.
