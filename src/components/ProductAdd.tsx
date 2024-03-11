import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";

type ProductAddProps = {
    onAdd: (product: IProduct) => void;
};
type Inputs = {
    name: string;
    price: number;
};
const ProductAdd = ({ onAdd }: ProductAddProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onAdd(data);
        navigate("/products");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Tên sản phẩm"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>Trường name là bắt buộc</span>}
                <input type="number" placeholder="Giá sản phẩm" {...register("price")} />
                <button>Thêm</button>
            </form>
        </div>
    );
};

export default ProductAdd;
