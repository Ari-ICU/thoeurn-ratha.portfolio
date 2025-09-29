import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, telegram, message } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN; // <-- SECRET
    const chatId = process.env.TELEGRAM_CHAT_ID;     // <-- SECRET

    if (!botToken || !chatId) {
        return NextResponse.json({ error: "Bot token or chat ID missing" }, { status: 500 });
    }

    const telegramMessage = `
📬 *New Contact Form Submission*  
👤 *Name*: ${name}  
📧 *Email*: [${email}](mailto:${email})  
🆔 *Telegram*: ${telegram ? `@[${telegram}](https://t.me/${telegram})` : "Not provided"}  
💬 *Message*:
━━━━━━━━━━━━━━━━━━━━━━━━
${message}
━━━━━━━━━━━━━━━━━━━━━━━━
🕒 *Received*: ${new Date().toLocaleString("en-US", {
        timeZone: "Asia/Phnom_Penh",
        dateStyle: "medium",
        timeStyle: "short",
    })} ICT
`;

    try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: "Markdown",
            }),
        });

        if (!res.ok) {
            const data = await res.json();
            return NextResponse.json({ error: data }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
