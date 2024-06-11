import { readFile } from "fs/promises"

export async function GET(req: Request) {
    console.log(process.cwd())
    const data = await readFile("src/app/binaryFile.copyme",)
    const res = new Response(data)
    return res
}