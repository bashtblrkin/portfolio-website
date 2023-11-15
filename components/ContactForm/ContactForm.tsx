'use client'
import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

interface FormValues {
    name: string
    email: string
    message: string
}

const ContactForm = () => {

    const {register, handleSubmit} = useForm<FormValues>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const [loading, setLoading] = useState(false)

    const onSubmit: SubmitHandler<FormValues> = (data) => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
        </form>
    );
};

export default ContactForm;