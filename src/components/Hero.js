import React from "react";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";

const Hero = ({ scrollToSection, onWhatsAppClick }) => {
  const handlePrimaryClick = () => {
    if (typeof scrollToSection === "function") {
      scrollToSection("services");
    }
  };

  const handleSecondaryClick = () => {
    if (typeof onWhatsAppClick === "function") {
      onWhatsAppClick();
    } else if (typeof scrollToSection === "function") {
      scrollToSection("contact");
    }
  };

  return (
    <section
      id="home"
      dir="rtl"
      className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Subtle tonal depth layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.28),_transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.12),_transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Copy & Actions */}
          <div className="text-start lg:col-span-7">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-wide text-amber-400">
              <span className="h-0.5 w-8 bg-amber-400" aria-hidden="true" />
              <span>شركة الحافظ للغطاسات والمعدات الصناعية</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] animate-fade-in">
              قوة تدوم وأداء موثوق
              <span className="mt-2 block text-amber-400">
                في عالم الغطاسات والطاقة
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
              نوفّر حلول الضخ والطاقة المتكاملة بأعلى معايير الكفاءة: غطاسات
              بجميع القياسات، كابلات كهربائية معتمدة، ولوحات تحكم صناعية مصممة
              للعمل بثبات في أصعب ظروف التشغيل.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="hero-cta-primary"
                type="button"
                onClick={handlePrimaryClick}
                className="group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <span>تصفح خدماتنا</span>
                <ArrowLeft
                  className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <button
                id="hero-cta-whatsapp"
                type="button"
                onClick={handleSecondaryClick}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle
                  className="h-5 w-5 text-emerald-400"
                  aria-hidden="true"
                />
                <span>اطلب استشارة عبر واتساب</span>
              </button>
            </div>

            {/* Proof Metrics */}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-lg">
              <div>
                <dt className="text-xs font-medium text-slate-400 sm:text-sm">
                  خبرة في السوق
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  +15{" "}
                  <span className="text-sm font-semibold text-amber-400">
                    سنة
                  </span>
                </dd>
              </div>
              <div className="border-s border-white/10 ps-6">
                <dt className="text-xs font-medium text-slate-400 sm:text-sm">
                  مشروع منجز
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  +1000
                </dd>
              </div>
              <div className="border-s border-white/10 ps-6">
                <dt className="text-xs font-medium text-slate-400 sm:text-sm">
                  عميل يثق بنا
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  +500
                </dd>
              </div>
            </dl>
          </div>

          {/* Product Showcase Visual */}
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/water-pumps-s.jpg"
                  alt="معرض شركة الحافظ للغطاسات والمضخات الغاطسة بجميع القياسات"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-amber-400">
                        تشكيلة متكاملة وجاهزة للتسليم
                      </p>
                      <p className="mt-1 text-base font-bold text-white sm:text-lg">
                        غطاسات • كابلات • لوحات تحكم
                      </p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 backdrop-blur-md">
                      <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
