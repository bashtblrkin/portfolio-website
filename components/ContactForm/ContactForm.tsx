'use client'
import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
import {ContactMessage} from "@/interfaces/Contacts";
import {FeedBackResponse, sendMail} from "@/app/api/mail";
import Modal from "@/components/Modal/Modal";

const EMAIL_REGEX =
    '(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        setError
    } = useForm<ContactMessage>({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [modalText, setModalText] = useState<Omit<FeedBackResponse, 'success'> | null>(null)

    const onSubmit: SubmitHandler<ContactMessage> = (data) => {
        setLoading(true)
        sendMail(data)
            .then(({success, ...props}) => {
                if (success) {
                    reset()
                    setModalText(props)
                    setIsOpen(true)
                } else {
                    setModalText(props)
                    setIsOpen(true)
                }
                setLoading(false)
            })
            .catch((error: Error) => {
                console.error(error)
                setLoading(false)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white font-medium mb-4">Ваше Имя</label>
                    <input id="name" {...register("name", {required: 'Поле обязательно для заполнения!'})}
                           placeholder="Как вас зовут?"
                           className={`bg-darkBlue py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium
                           ${errors.name ? 'focus:border-red-500 border-red-500' : 'focus:border-violet'}`}
                    />
                    {errors.name && <span className='text-[14px] color-white text-red-500'>{errors.name.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white font-medium mb-4">Вашь Email</label>
                    <input id="email"
                           {...register("email", {
                               required: 'Поле обязательно для заполнения!',
                               pattern: {value: new RegExp(EMAIL_REGEX, 'g'), message: 'Введён некорректный email!'}
                           })}
                           placeholder="Куда я могу обратиться?"
                           className={`bg-darkBlue py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent font-medium
                           ${errors.email ? 'focus:border-red-500 border-red-500' : 'focus:border-violet'}`}
                    />
                    {errors.email && <span className='text-[14px] text-red-500'>{errors.email.message}</span>}
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
                <button type="submit"
                        className="bg-darkBlue py-3 px-8 outline-none w-fit text-whie fong-bold shadow-md shadow-primary rounded-xl">{loading ? 'Отправка...' : 'Отправить'}</button>
            </form>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className='sm:w-[600px]'>
                    <h3 className="text-white font-bold text-[24px]">{modalText?.title || ''}</h3>
                    <p>
                        {modalText?.message || ''}
                    </p>
                </div>
            </Modal>
        </>
    );
};

export default ContactForm;