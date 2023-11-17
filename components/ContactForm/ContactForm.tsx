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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
            <div className="flex flex-col">
                <label htmlFor="name" className="text-white font-medium mb-4">Ваше Имя</label>
                <input id="name" {...register("name", {required: 'Поле обязательно для заполнения!'})}
                       placeholder="Как вас зовут?"
                       className="bg-darkBlue py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:border-violet border-2 border-transparent font-medium"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-white font-medium mb-4">Вашь Email</label>
                <input id="email" {...register("email", {required: 'Поле обязательно для заполнения!'})}
                       placeholder="Куда я могу обратиться с обратной связью?"
                       className="bg-darkBlue py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:border-violet border-2 border-transparent font-medium"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-medium mb-4">Ваше Сообщение</label>
                <textarea
                    rows={7}
                    id="message" {...register("message")}
                    placeholder="Какие у вас предложения?"
                    className="bg-darkBlue py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none focus:border-violet border-2 border-transparent font-medium resize-none"
                />
            </div>
            <button type="submit" className="bg-darkBlue py-3 px-8 outline-none w-fit text-whie fong-bold shadow-md shadow-primary rounded-xl">{loading ? 'Отправка...' : 'Отправить'}</button>
        </form>
    );
};

export default ContactForm;