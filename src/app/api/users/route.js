// import database connection

export async function GET(req, res) {
    return new Response(config)
  }

export async function POST(req, res) {
    // print the request body in the console
    return new Response(req.body);
}