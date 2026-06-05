import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Delivery() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>ПОРОСЮША</div>
        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Главная</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Каталог</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>О нас</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Контакты</a>
        </nav>
        <button className="btn-cta" onClick={() => navigate("/")}>
          <Icon name="ShoppingBag" size={18} />
          Корзина
        </button>
      </header>

      <main>
        <section style={{ padding: "80px 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
          <button
            onClick={() => navigate("/")}
            style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "14px", marginBottom: "40px", color: "var(--dark)" }}
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, lineHeight: 1, marginBottom: "16px", textTransform: "uppercase" }}>
            Доставка <span style={{ color: "var(--primary)" }}>и оплата</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "48px" }}>
            Отправляем по всей России — быстро и с любовью
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {[
              { icon: "MapPin", title: "По всей России", text: "Доставляем в любой город и посёлок — от Калининграда до Владивостока." },
              { icon: "Package", title: "Упаковка с заботой", text: "Каждый заказ упаковываем вручную в фирменную розовую упаковку." },
              { icon: "Clock", title: "Сроки доставки", text: "Обычно 3–7 рабочих дней. Точные сроки зависят от региона." },
            ].map((item) => (
              <div key={item.title} style={{ border: "var(--border)", padding: "32px 24px" }}>
                <Icon name={item.icon as "MapPin"} size={32} style={{ color: "var(--primary)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 900, textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ border: "var(--border)", padding: "40px", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, textTransform: "uppercase", marginBottom: "24px" }}>
              Способы доставки
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { name: "Почта России", price: "от 250 ₽", days: "5–14 дней" },
                { name: "СДЭК", price: "от 350 ₽", days: "3–7 дней" },
                { name: "Boxberry", price: "от 300 ₽", days: "3–7 дней" },
              ].map((d) => (
                <div key={d.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #eee" }}>
                  <span style={{ fontWeight: 700, fontSize: "15px" }}>{d.name}</span>
                  <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#666" }}>
                    <span>{d.days}</span>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>{d.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--primary)", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 900, textTransform: "uppercase", color: "white" }}>
              Есть вопросы по доставке?
            </h2>
            <p style={{ fontSize: "15px", color: "white", opacity: 0.9 }}>Звоните — ответим на любой вопрос!</p>
            <a
              href="tel:867676767"
              style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", color: "var(--dark)", fontWeight: 900, fontSize: "20px", padding: "14px 28px", border: "none", cursor: "pointer", textDecoration: "none", fontFamily: "var(--font-display)" }}
            >
              <Icon name="Phone" size={20} />
              8 676 76 767
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-bottom">
          <span>© 2024 ПОРОСЮША. Все права защищены.</span>
          <span>Сделано с ❤ и розовым настроением</span>
        </div>
      </footer>
    </>
  );
}
