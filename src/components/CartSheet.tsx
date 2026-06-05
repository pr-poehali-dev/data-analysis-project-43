import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function CartSheet() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}>
            КОРЗИНА
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-[#999]">
            <Icon name="ShoppingBag" size={48} />
            <p style={{ fontSize: "15px" }}>Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 70, height: 70, objectFit: "cover", borderRadius: "8px", border: "var(--border)" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p style={{ fontWeight: 800, fontSize: "14px", marginBottom: "4px" }}>{item.name}</p>
                    <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "14px" }}>
                      {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: 28, height: 28, border: "var(--border)", borderRadius: "6px", background: "white", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}
                      >
                        −
                      </button>
                      <span style={{ minWidth: 20, textAlign: "center", fontWeight: 700 }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: 28, height: 28, border: "var(--border)", borderRadius: "6px", background: "white", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa" }}>
                    <Icon name="X" size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "var(--border)", paddingTop: "20px" }}>
              <div className="flex justify-between items-center mb-4">
                <span style={{ fontWeight: 800, fontSize: "16px" }}>Итого</span>
                <span style={{ fontWeight: 900, fontSize: "20px", color: "var(--primary)" }}>
                  {totalPrice.toLocaleString("ru-RU")} ₽
                </span>
              </div>
              <button
                className="btn-cta"
                style={{ width: "100%", background: "var(--primary)", color: "white", justifyContent: "center" }}
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
