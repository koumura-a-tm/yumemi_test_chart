export async function GET(
  request: Request,
  { params }: { params: { prefCode: string } }
) {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${params.prefCode}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.RESAS_API_KEY || '',
      },
    }
  )
  const data = await res.json()

  return Response.json(data)
}
