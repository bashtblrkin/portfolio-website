import type {NextApiRequest, NextApiResponse} from 'next';
import {mailOptions, transporter} from "@/config/nodemailer";

type Data = {
    success: boolean
    message: string
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method !== "POST") return res.status(404).json({
        success: false,
        message: 'Bad Request'
    });
    const fields = req.body

    try {
            transporter.sendMail({
                ...mailOptions,
                subject: 'Сообщение с моего сайта',
                html: `
                    <p>Имя: ${fields.name}</p>
                    <p>Email: ${fields.email}</p>
                    <p>Сообщение: ${fields.message}</p>
            `})
                .then((value) => {
                    console.log(value)
                })
        return res.status(200).json({
            success: true,
            message: 'Сообщение успешно отправлено'
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export default handler