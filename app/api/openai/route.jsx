import openai from "@/app/utils/openai";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    console.log(body)

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user', content: `Translate this into spanish: ${body.message}`
            }
        ],
        max_tokens: 150,
        temperature: 0.9,
    })

    const response = completion.data.choices[0].message.content
    console.log('response', response)

    return NextResponse.json(response)
}