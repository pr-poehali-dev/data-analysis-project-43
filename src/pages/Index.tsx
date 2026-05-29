export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПОРОСЮША</div>
        <nav>
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Купить</button>
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
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Товар 1"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Розовый набор</h3>
                  <span className="price">1 490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Уютный подарочный набор в фирменном розовом стиле. Отличный выбор для себя и близких.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/5d566b12-05b8-436e-a4c3-a9444e5d714a.jpg"
                alt="Пушистый поросёнок"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пушистый друг</h3>
                  <span className="price">2 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Мягкая игрушка-поросёнок. Идеальный компаньон для хорошего настроения.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c8fb12dc-f4ad-4877-9d2a-f1d530a0076c/bucket/984a3f4a-0ea1-4790-a777-aade609ada59.jpg"
                alt="Кружка поросёнок"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кружка «Хрю»</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Фирменная кружка с милым поросёнком. Каждое утро будет розовым!
                </p>
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
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1612833603922-5b2e08c20296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПОРОСЮША</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Авторский онлайн-магазин с розовым настроением. Доставляем радость по всей России с 2024 года.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 9:00–21:00</li>
            <li>Сб–Вс: 10:00–18:00</li>
            <li style={{ marginTop: "10px", color: "var(--primary)", fontWeight: 700 }}>
              Заказы принимаем онлайн
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}