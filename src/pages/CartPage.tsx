import CartForm from "../components/CartForm";
import ContentBlock from "../components/ContentBlock";

const CARTPAGE_CONTENT = {
  title: "Корзина",
  paragraphs: [
    "Здесь ты можешь заполнить свою корзину кучей полезных товаров из ассортимента",
  ],
};

const CartPage = () => {
  return (
    <>
      <ContentBlock
        title={CARTPAGE_CONTENT.title}
        paragraps={CARTPAGE_CONTENT.paragraphs}
      />
      <CartForm />
    </>
  );
};

export default CartPage;
