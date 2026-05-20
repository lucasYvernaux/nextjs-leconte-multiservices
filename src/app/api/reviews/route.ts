// // app/api/reviews/route.ts
// export async function GET() {
//   const placeId = "0xa1aa876fc35d703:0x169ed840fc402dc"; // trouvable sur Google Maps
//   const apiKey = process.env.GOOGLE_PLACES_API_KEY;

//   const res = await fetch(
//     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=fr`,
//   );

//   const data = await res.json();
//   return Response.json(data.result);
// }
