'use server'
import {mailOptions, transporter} from "@/config/nodemailer";
import {ContactMessage} from "@/interfaces/Contacts";

export type FeedBackResponse = {
    success: boolean
    title: string
    message: string
}

export const sendMail = async (fields: ContactMessage): Promise<FeedBackResponse> => {
    return transporter.sendMail({
        ...mailOptions,
        subject: 'Сообщение с моего сайта',
        html: `
                    <p>Имя: ${fields.name}</p>
                    <p>Email: ${fields.email}</p>
                    <p>Сообщение: ${fields.message}</p>
            `
    })
        .then((value) => {
            console.log(value)
            return {
                success: true,
                title: 'Спасибо за обращение',
                message: 'В ближайшее время я отвечу на ваше письмо. По срочным вопросам вы можете написать мне в телеграм, ссылка находится в подвале сайта.'
            };
        })
        .catch(error => {
            console.log(error)
            return {
                success: false,
                title: 'Упс, произошла ошибка!',
                message: 'При отправке письма произошла ошибка. Попробуйте повторить попытку позже.'
            };
        })
}