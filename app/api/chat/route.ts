import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Function to load and chunk
const chunkText = (text: string, chunkSize = 150): string[] => {
    const sentences = text.split(/\n+/); // split text into array on newlines with text
    const chunks: string[] = [];
    let current = "";

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        // check if bigger than chunk size add to chunks
        if ((current + sentence).length > chunkSize) {
            chunks.push(current.trim());
            current = "";
        }
        current += sentence + " ";
    }

    if (current) chunks.push(current.trim());
    return chunks;
} 

// Function to embed text
const embedText = async (text: string) => {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
    });
    return response.data[0].embedding;
}

// Function to check cosine similarity
const cosineSimilarity = (a: number[], b: number[]) => {
    let dot = 0, normA = 0, normB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// API Route
export const POST = async (req: Request) => {
    const { query } = await req.json();

    const filePath = path.join(process.cwd(), "data", "portfolio.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const chunks = chunkText(fileContent);

    const chunkEmbeddings = await Promise.all(chunks.map(embedText));
    const queryEmbedding = await embedText(query);

    // find similar embeddings
    const similarities = chunkEmbeddings.map((emb, i) => ({
        chunk: chunks[i],
        score: cosineSimilarity(queryEmbedding, emb),
    }));
    similarities.sort((a, b) => b.score - a.score);
    const topChunks = similarities.slice(0, 3).map(s => s.chunk).join("\n");
    
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [

        ]
    })
}