import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПОРОСЮША</div>
        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Главная</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Каталог</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Доставка</a>
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
            Наша <span style={{ color: "var(--primary)" }}>история</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "48px" }}>
            Как всё начиналось и зачем мы это делаем
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", marginBottom: "64px" }}>
            <img
              src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/files/96a2bb72-e1cf-4197-92fd-6a89fd168f2a.jpg"
              alt="Команда Поросюши"
              style={{ width: "100%", aspectRatio: "1", objectFit: "cover", border: "var(--border)", borderRadius: "4px" }}
            />
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", marginBottom: "20px" }}>
                Всё началось с любви к милоте
              </h2>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
                Поросюша появилась в 2022 году, когда мы поняли: в мире слишком мало розового настроения. Мы начали с маленькой мастерской и большой мечты — создавать товары, которые вызывают улыбку.
              </p>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8 }}>
                Каждый товар проходит через наши руки с любовью. Мы сами выбираем материалы, придумываем дизайн и упаковываем каждый заказ вручную.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "64px" }}>
            {[
              { num: "2022", label: "Год основания" },
              { num: "1 200+", label: "Счастливых клиентов" },
              { num: "100%", label: "Ручная работа" },
            ].map((item) => (
              <div key={item.num} style={{ border: "var(--border)", padding: "32px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: 900, color: "var(--primary)", marginBottom: "8px" }}>
                  {item.num}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", color: "#555" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--primary)", padding: "48px", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", color: "white", marginBottom: "16px" }}>
              Наша миссия
            </h2>
            <p style={{ fontSize: "16px", color: "white", lineHeight: 1.8, opacity: 0.9 }}>
              Мы верим, что маленькие радости делают жизнь лучше. Поросюша — это не просто магазин, это место, где каждая покупка приносит тепло и улыбку. Мы работаем для тех, кто ценит уют, качество и немного розового волшебства в каждом дне.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 900, textTransform: "uppercase", marginBottom: "24px" }}>
              Готовы познакомиться?
            </h2>
            <button
              className="btn-cta"
              style={{ background: "var(--primary)", color: "white" }}
              onClick={() => navigate("/")}
            >
              Смотреть товары
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: "15px" }}>ПОРОСЮША</div>
            <p style={{ fontSize: "14px", color: "#aaa", lineHeight: 1.6 }}>
              Авторские товары с самым розовым настроением.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Покупателям</h4>
            <ul className="footer-links">
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Возврат</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Компания</h4>
            <ul className="footer-links">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Соцсети</h4>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">VK</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 ПОРОСЮША. Все права защищены.</span>
          <span>Сделано с ❤ и розовым настроением</span>
        </div>
      </footer>
    </>
  );
}
