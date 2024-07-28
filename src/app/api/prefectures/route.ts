/*
都道府県の一覧は2015年から更新されていないので，Static(あるいは，年単位でrevalidateする)でも良さそう
https://opendata.resas-portal.go.jp/docs/api/v1/update/index.html
*/
export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/prefectures`,
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
