import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {Configuration,OpenAIApi} from 'openai'

const config = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})


const openai = new OpenAIApi(config);
//now we can write the post route 


export async function POST(
    req:Request
){
    try {
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId){
            return new NextResponse("Unautthorized",{status:401})
        }

        if(!config.apiKey){
            return new NextResponse("Open AI API key not configures",{status:500})
        }

        if(!messages){
            return new NextResponse("Messages are Required",{status:400})
        }


        const res = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages //messages model 
        })

        return NextResponse.json(res.data.choices[0].message);


    } catch (error) {
        console.log(error)
        return new NextResponse("Internal Server Error",{status:500})
        
    }
}


