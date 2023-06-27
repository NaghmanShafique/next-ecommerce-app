// import { db } from "@vercel/postgres"
import { NextRequest,NextResponse } from "next/server"
import { db, cartTable} from "@/lib/drizzle"
import { v4 as uuid } from 'uuid'
import { cookies } from "next/headers";

export async function GET(request:NextRequest) {
  try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({res});
  } catch (err) {
     console.log(err)
     return NextResponse.json({message:"Something went wrong."});
  }
}

export async function POST(request:NextRequest) {

  const req = await request.json();
  
  const uId = uuid();
  // const setUserCookies = cookies();
  const userId = cookies().get("user_id")

  if (!userId) {
    cookies().set("user_id",uId);   
  }
  
  try {
        const res = await db.insert(cartTable).values({
        //  id:req.id,
         user_id: cookies().get("user_id")?.value as string,
         product_id: req.product_id,
         product_qty : 1,
         product_price : 3999
        }).returning();

        return NextResponse.json({res});

  } catch (err) {
     console.log("Cart Error "+err)
     return NextResponse.json({message:"Error in Porduct Cart Post Request."});
  }
}