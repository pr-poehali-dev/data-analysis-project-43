import { useCart } from "@/context/CartContext";
import CartSheet from "@/components/CartSheet";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: "1",
    name: "Розовый набор",
    price: 1490,
    tag: "Хит продаж",
    tagStyle: {},
    description: "Уютный подарочный набор в фирменном розовом стиле. Отличный выбор для себя и близких.",
    image: "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/5e1da489-00fb-447b-a76b-2f1b533fc6d3.jpg",
    images: [
      "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/5e1da489-00fb-447b-a76b-2f1b533fc6d3.jpg",
      "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/66ca7b09-ef5c-45e9-b0ae-bbb0ff8b72ba.jpg",
      "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/1fcba28a-1d17-4a8e-a7ed-df66a33feaec.jpg",
    ],
  },
  {
    id: "2",
    name: "Пушистый друг",
    price: 2200,
    tag: "Новинка",
    tagStyle: { background: "var(--secondary)" },
    description: "Мягкая игрушка-поросёнок. Идеальный компаньон для хорошего настроения.",
    image: "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/5d566b12-05b8-436e-a4c3-a9444e5d714a.jpg",
  },
  {
    id: "3",
    name: "Кружка «Хрю»",
    price: 890,
    tag: "Популярное",
    tagStyle: { background: "var(--accent)", color: "var(--dark)" },
    description: "Фирменная кружка с милым поросёнком. Каждое утро будет розовым!",
    image: "https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/984a3f4a-0ea1-4790-a777-aade609ada59.jpg",
  },
];

export default function Index() {
  const { addItem, totalCount, setIsOpen } = useCart();

  return (
    <>
      <div className="grain-overlay" />
      <CartSheet />

      <header className="header">
        <div className="logo">ПОРОСЮША</div>
        <nav>
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button
          className="btn-cta"
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => setIsOpen(true)}
        >
          <Icon name="ShoppingBag" size={18} />
          Корзина
          {totalCount > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              background: "var(--primary)",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "11px",
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {totalCount}
            </span>
          )}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              МИЛОЕ,
              <br />
              СТИЛЬНОЕ <span>И НАШЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Авторские товары с характером. Только качественные вещи с самым розовым настроением — для тех, кто знает толк в милоте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                В каталог
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                О магазине
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              НОВИНКИ
              <br />
              УЖЕ ЗДЕСЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ПОРОСЮША
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ХОЧУ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * АВТОРСКИЕ ТОВАРЫ * ТОЛЬКО РОЗОВОЕ * ЛЮБИМ КАЖДОГО КЛИЕНТА * ПОРОСЮША ❤ *
            ДОСТАВКА ПО ВСЕЙ СТРАНЕ * АВТОРСКИЕ ТОВАРЫ * ТОЛЬКО РОЗОВОЕ * ЛЮБИМ КАЖДОГО КЛИЕНТА * ПОРОСЮША ❤
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ ПРОДАЖ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">{PRODUCTS[0].tag}</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "100px 100px", overflow: "hidden", maxHeight: "200px" }}>
                <img
                  src={PRODUCTS[0].images![0]}
                  alt="Бомбочка для ванны"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRight: "2px solid var(--bg)", borderBottom: "2px solid var(--bg)" }}
                />
                <img
                  src={PRODUCTS[0].images![1]}
                  alt="Кружка поросёнок"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderLeft: "2px solid var(--bg)", borderBottom: "2px solid var(--bg)" }}
                />
                <img
                  src={PRODUCTS[0].images![2]}
                  alt="Пушистый поросёнок"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", gridColumn: "span 2", borderTop: "2px solid var(--bg)" }}
                />
              </div>
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>{PRODUCTS[0].name}</h3>
                  <span className="price">{PRODUCTS[0].price.toLocaleString("ru-RU")} ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "14px" }}>{PRODUCTS[0].description}</p>
                <button
                  className="btn-cta"
                  style={{ width: "100%", background: "var(--primary)", color: "white", justifyContent: "center" }}
                  onClick={() => addItem({ id: PRODUCTS[0].id, name: PRODUCTS[0].name, price: PRODUCTS[0].price, image: PRODUCTS[0].image })}
                >
                  В корзину
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={PRODUCTS[1].tagStyle}>{PRODUCTS[1].tag}</span>
              <img src={PRODUCTS[1].image} alt="Пушистый поросёнок" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>{PRODUCTS[1].name}</h3>
                  <span className="price">{PRODUCTS[1].price.toLocaleString("ru-RU")} ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "14px" }}>{PRODUCTS[1].description}</p>
                <button
                  className="btn-cta"
                  style={{ width: "100%", background: "var(--primary)", color: "white", justifyContent: "center" }}
                  onClick={() => addItem({ id: PRODUCTS[1].id, name: PRODUCTS[1].name, price: PRODUCTS[1].price, image: PRODUCTS[1].image })}
                >
                  В корзину
                </button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={PRODUCTS[2].tagStyle}>{PRODUCTS[2].tag}</span>
              <img src={PRODUCTS[2].image} alt="Кружка поросёнок" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>{PRODUCTS[2].name}</h3>
                  <span className="price">{PRODUCTS[2].price.toLocaleString("ru-RU")} ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "14px" }}>{PRODUCTS[2].description}</p>
                <button
                  className="btn-cta"
                  style={{ width: "100%", background: "var(--primary)", color: "white", justifyContent: "center" }}
                  onClick={() => addItem({ id: PRODUCTS[2].id, name: PRODUCTS[2].name, price: PRODUCTS[2].price, image: PRODUCTS[2].image })}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЫ ДЕЛАЕМ С ЛЮБОВЬЮ.</h2>
            <p className="vibe-text">
              Поросюша — это не просто магазин. Это целый мир розового настроения. Каждый товар создан с заботой и вниманием к деталям. Мы верим, что милые вещи делают жизнь лучше — и доказываем это каждый день.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ПОРОСЮША
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/files/1defc27a-1aad-4988-906f-919850b84037.jpg" alt="Фото 1" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/files/6a7c3c16-1c1d-4a8b-a4b4-a88286ebb126.jpg" alt="Фото 2" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/files/0b6895dc-9a4c-4d48-8f08-d257c27e7663.jpg" alt="Фото 3" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/files/3347aa5e-9ec1-458a-8e79-4d44928f0dd9.jpg" alt="Фото 4" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: "15px" }}>ПОРОСЮША</div>
            <p style={{ fontSize: "14px", color: "#aaa", lineHeight: 1.6 }}>
              Авторские товары с самым розовым настроением. Делаем мир милее каждый день.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Покупателям</h4>
            <ul className="footer-links">
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Возврат</a></li>
              <li><a href="#">Гарантия</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Компания</h4>
            <ul className="footer-links">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Партнёрам</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Мы в соцсетях</h4>
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