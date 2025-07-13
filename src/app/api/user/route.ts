import { NextResponse, NextRequest } from "next/server";

const BASE_URL = "https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/user";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
try {
    if (email) {
      const query = encodeURIComponent(`email = '${email}'`);
      const url = `${BASE_URL}?where=${query}`;

      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data[0]); 
      } else {
        return NextResponse.json({ error: "USER NOT FOUND" }, { status: 404 });
      }
    }

    const response = await fetch(BASE_URL);
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Error fetching Backendless data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
