import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='add_service'>
            <h1>Add a services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} />
                <textarea placeholder="Description" {...register("description")} />
                <input placeholder="Image url" {...register("img")} />
                <input placeholder="price" type="number" {...register("price")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;