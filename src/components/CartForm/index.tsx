import { Alert, Button } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import CartItemInterface from "../../Interfaces";
import GoodItem from "../GoodItem";
import './styles.css'

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
`;

const InputWrapper = styled.div`
  input {
    min-width: 500px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 1rem;
  }
`;

const CustomLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 20px;
  font-family: "Jost", Arial, sans-serif;
  font-weight: bold;
  color: #333;
`;

const CartForm = () => {
  const [goods, setGoods] = useState<CartItemInterface[]>([]);

  const addElement: SubmitHandler<CartItemInterface> = (data) => {
    setGoods((prev) => [...prev, data]);
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, 
    reset, 
  } = useForm<CartItemInterface>({
    mode: "onBlur",
  });

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(addElement)}>
          <InputWrapper>
            <CustomLabel htmlFor="goodName">Название товара</CustomLabel>
            <input
              id="goodName"
              placeholder="Введите название товара"
              {...register("goodName", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 5,
                  message: "Имя неккоректно",
                },
              })}
            />
          </InputWrapper>
          {errors.goodName && (
            <Alert message={errors.goodName.message} type="error" showIcon />
          )}

          <InputWrapper>
            <CustomLabel htmlFor="quantity">Количество</CustomLabel>
            <input
              id="quantity"
              placeholder="Введите количество"
              type="number"
              {...register("quantity", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 1,
                  message: "Введите действительное количество",
                },
              })}
            />
          </InputWrapper>
          {errors.quantity && (
            <Alert message={errors.quantity.message} type="error" showIcon />
          )}

          <InputWrapper>
            <CustomLabel htmlFor="addInfo">
              Дополнительная информация к заказу
            </CustomLabel>
            <input
              id="addInfo"
              placeholder="Введите дополнительную информацию по заказу"
              {...register("addInfo", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 10,
                  message: "Информация неккорректна",
                },
              })}
            />
          </InputWrapper>
          {errors.addInfo && (
            <Alert message={errors.addInfo.message} type="error" showIcon />
          )}

          <Button type="primary" htmlType="submit" disabled={!isValid}>
            Добавить в корзину
          </Button>
        </form>
      </FormWrapper>
      {goods.length > 0 && (
        <div className="goods-list">
          <p className="list-title title">Список товаров</p>
          <div className="goods-container">
          {goods.map((good) => (
            <GoodItem goodName={good.goodName} quantity={good.quantity} addInfo={good.addInfo} />
          ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CartForm;
