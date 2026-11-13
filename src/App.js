import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import Hero from "./components/Hero";

const AlhafezCompany = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "team",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = (phoneNumber, name) => {
    const message = encodeURIComponent(
      `مرحباً ${name}, أريد الاستفسار عن منتجاتكم`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const services = [
    {
      title: "غطاسات بكافة القياسات",
      description:
        "نوفر غطاسات عالية الجودة بجميع الأحجام والقياسات لتناسب احتياجاتكم المختلفة",
      icon: "🔌",
    },
    {
      title: "كابلات كهربائية",
      description:
        "كابلات كهربائية متنوعة وعالية الجودة لجميع الاستخدامات الصناعية والمنزلية",
      icon: "⚡",
    },
    {
      title: "لوحات التحكم الصناعية",
      description:
        "لوحات تحكم صناعية متطورة ومعدات كهربائية احترافية للمشاريع الكبيرة",
      icon: "🏭",
    },
    {
      title: "صيانة وتركيب",
      description:
        "خدمات الصيانة والتركيب المتخصصة مع فريق من الخبراء المحترفين",
      icon: "🔧",
    },
  ];

  const teamMembers = [
    {
      name: "أبو وحيد",
      position: "مدير الشركة",
      phone: "+90 5388639220",
      cleanPhone: "905388639220",
      image:
        "/images/baba.jpg",
      description: "خبرة واسعة في مجال الكهرباء والمعدات الصناعية",
    },
    {
      name: "وسيم",
      position: "مدير تنفيذي ومستشار تقني",
      phone: "+90 5522722200",
      cleanPhone: "905522722200",
      image:
        "/images/waseem.jpg",
      description: "متخصص في الاستشارات الفنية والحلول المتقدمة",
    },
  ];

  const portfolioProjects = [
    {
      title: "مشروع المجمع السكني الكبير",
      category: "تركيب الغطاسات",
      description:
        "تم تركيب وتوريد غطاسات لمجمع سكني يضم أكثر من 200 وحدة سكنية",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
    },
    {
      title: "مصنع الإنتاج الصناعي",
      category: "لوحات تحكم صناعية",
      description: "تصميم وتركيب لوحات التحكم لمصنع كبير للإنتاج الصناعي",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&h=300&fit=crop",
    },
    {
      title: "شبكة الكابلات الكهربائية",
      category: "توريد الكابلات",
      description: "توريد وتركيب شبكة كابلات كاملة لمجمع تجاري كبير",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop",
    },
  ];

  return (
    <div style={{ direction: "rtl", fontFamily: '"Cairo", "Tajawal", Arial, sans-serif' }}>
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
          padding: "15px 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontSize: "28px", fontWeight: "bold", color: "#2563eb" }}
            >
              الحافظ
            </div>

            {/* Desktop Navigation */}
            <div style={{ display: "flex", gap: "30px" }}>
              {[
                { id: "home", name: "الرئيسية" },
                { id: "about", name: "من نحن" },
                { id: "services", name: "خدماتنا" },
                { id: "portfolio", name: "أعمالنا" },
                { id: "team", name: "فريقنا" },
                { id: "contact", name: "تواصل معنا" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    color: activeSection === item.id ? "#2563eb" : "#374151",
                    backgroundColor:
                      activeSection === item.id ? "#eff6ff" : "transparent",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "all 0.3s",
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        scrollToSection={scrollToSection}
        onWhatsAppClick={() => openWhatsApp("905522722200", "وسيم")}
      />

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "80px 0",
          backgroundColor: "white",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            من نحن
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            شركة الحافظ للغطاسات - خبرة وثقة في عالم المعدات الكهربائية
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                قصة نجاحنا
              </h3>
              <p
                style={{
                  marginBottom: "20px",
                  lineHeight: "1.6",
                  color: "#6b7280",
                  fontSize: "16px",
                }}
              >
                تأسست شركة الحافظ للغطاسات برؤية واضحة لتوفير أفضل المعدات
                الكهربائية والصناعية. نحن نقدم غطاسات بجميع القياسات، كابلات
                عالية الجودة، ولوحات تحكم صناعية متطورة.
              </p>
              <p
                style={{
                  marginBottom: "30px",
                  lineHeight: "1.6",
                  color: "#6b7280",
                  fontSize: "16px",
                }}
              >
                نؤمن ببناء علاقات طويلة الأمد مع عملائنا من خلال تقديم منتجات
                عالية الجودة وخدمة عملاء مميزة تلبي جميع احتياجاتهم وتتجاوز
                توقعاتهم.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#eff6ff",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#2563eb",
                    }}
                  >
                    1000+
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                    }}
                  >
                    مشروع منجز
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#f0fdf4",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#10b981",
                    }}
                  >
                    500+
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                    }}
                  >
                    عميل راضي
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#fefce8",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#eab308",
                    }}
                  >
                    15+
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                    }}
                  >
                    سنة خبرة
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/water-pumps.jpg"
                alt="معدات كهربائية"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "80px 0",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            خدماتنا
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            نقدم مجموعة شاملة من المنتجات والخدمات الكهربائية عالية الجودة
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f8fafc",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                    color: "#111827",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        style={{
          padding: "80px 0",
          backgroundColor: "white",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            أعمالنا
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            نماذج من مشاريعنا المنجزة بنجاح في مختلف القطاعات
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      backgroundColor: "#eff6ff",
                      color: "#2563eb",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "inline-block",
                      marginBottom: "15px",
                    }}
                  >
                    {project.category}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#111827",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        style={{
          padding: "80px 0",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            فريقنا
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            فريق من المختصين المحترفين في خدمتكم
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 20px",
                    border: "4px solid #dbeafe",
                  }}
                />
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#111827",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#2563eb",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {member.position}
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  {member.description}
                </p>
                <button
                  onClick={() => openWhatsApp(member.cleanPhone, member.name)}
                  style={{
                    backgroundColor: "#10b981",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: "10px",
                    transition: "all 0.3s",
                  }}
                >
                  <MessageCircle size={18} />
                  تحدث مع {member.name}
                </button>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                >
                  {member.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "80px 0",
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              color: "white",
            }}
          >
            تواصل معنا
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#d1d5db",
              marginBottom: "60px",
              maxWidth: "600px",
              margin: "0 auto 60px",
            }}
          >
            نحن هنا لخدمتكم ونسعد بالرد على جميع استفساراتكم
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  color: "white",
                }}
              >
                معلومات التواصل
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "#1f2937",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                <Phone color="#60a5fa" size={24} />
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                    أبو وحيد
                  </p>
                  <p style={{ color: "#d1d5db", fontFamily: "monospace" }}>
                    +90 5388639220
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  backgroundColor: "#1f2937",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                <Phone color="#60a5fa" size={24} />
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>وسيم</p>
                  <p style={{ color: "#d1d5db", fontFamily: "monospace" }}>
                    +90 5522722200
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "15px",
                  backgroundColor: "#1f2937",
                  padding: "20px",
                  borderRadius: "8px",
                  marginBottom: "30px",
                }}
              >
                <MapPin
                  color="#60a5fa"
                  size={24}
                  style={{ marginTop: "2px" }}
                />
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                    العنوان
                  </p>
                  <p style={{ color: "#d1d5db", lineHeight: "1.5" }}>
                    مارع - الشارع العريض - مقابل الفرن الآلي (غرب ٥٠ متر)
                  </p>
                </div>
              </div>

              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                تواصل عبر الواتساب
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "15px",
                }}
              >
                <button
                  onClick={() => openWhatsApp("905388639220", "أبو وحيد")}
                  style={{
                    backgroundColor: "#10b981",
                    color: "white",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <MessageCircle size={20} />
                  أبو وحيد
                </button>
                <button
                  onClick={() => openWhatsApp("905522722200", "وسيم")}
                  style={{
                    backgroundColor: "#10b981",
                    color: "white",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <MessageCircle size={20} />
                  وسيم
                </button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#1f2937",
                padding: "30px",
                borderRadius: "12px",
              }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                أرسل لنا رسالة
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#374151",
                      border: "1px solid #4b5563",
                      borderRadius: "6px",
                      color: "white",
                      fontSize: "16px",
                    }}
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#374151",
                      border: "1px solid #4b5563",
                      borderRadius: "6px",
                      color: "white",
                      fontSize: "16px",
                    }}
                    placeholder="رقم هاتفك"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    الرسالة
                  </label>
                  <textarea
                    rows="4"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#374151",
                      border: "1px solid #4b5563",
                      borderRadius: "6px",
                      color: "white",
                      fontSize: "16px",
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "all 0.3s",
                  }}
                >
                  إرسال الرسالة
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#60a5fa",
              marginBottom: "15px",
            }}
          >
            الحافظ
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            شركة الغطاسات
          </h3>
          <p
            style={{ color: "#9ca3af", fontSize: "16px", marginBottom: "20px" }}
          >
            غطاسات بكافة القياسات • كابلات • لوحات تحكم صناعية
          </p>
          <div style={{ borderTop: "1px solid #374151", paddingTop: "20px" }}>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              © 2025 شركة الحافظ للغطاسات. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp("905522722200", "وسيم")}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#10b981",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(16, 185, 129, 0.4)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
        }}
        title="تحدث مع وسيم عبر الواتساب"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default AlhafezCompany;
