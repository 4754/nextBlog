import { NextResponse } from "next/server";

import connect from "@/utils/db";
import Post from "@/model/Post";

export const GET = async (req) => {

    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    // fetch
    try {
        await connect();
        const posts = await Post.find(username && {username});
        // console.log(posts)
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (error) {
        return new NextResponse("Error", {status: 500})
    }
    
}

export const POST = async (req) => {

    const body = await req.json();
    const newPost = new Post(body)
    // fetch
    try {
        await connect();
        await newPost.save();
        // console.log(posts)
        return new NextResponse("Post has been created", {status: 201});
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
    
}