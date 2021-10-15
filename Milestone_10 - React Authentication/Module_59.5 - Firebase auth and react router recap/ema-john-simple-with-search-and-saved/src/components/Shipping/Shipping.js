import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="shipping_form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder="Your Adress" defaultValue="" {...register("address")} />
                <input placeholder="Your City" defaultValue="" {...register("city")} />
                <input placeholder="Your Phone" defaultValue="" {...register("phone")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;