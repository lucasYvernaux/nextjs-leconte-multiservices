// components/GoogleReviews.tsx (Server Component)
async function getGoogleReviews() {
  const placeId = "ChIJ4xutfT5u5kcRaJn2NkiOhPU";
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=fr`,
    { next: { revalidate: 3600 } }, // cache 1h
  );

  const data = await res.json();

  console.log("test lucas");
  console.log("STATUS:", data.status); // doit être "OK"
  console.log("NOM:", data.result?.name); // doit être "LECONTE MULTISERVICES"
  console.log("NOTE:", data.result?.rating);
  console.log("Error message:", data.error_message);
  console.log("result :", data.result);

  return data.result;
}

export default async function ReviewGoogle() {
  const data = await getGoogleReviews();

  return (
    <>
      <h2>test api</h2>
      {/* <div>
        <p>
          Note : {rating} ({user_ratings_total} avis)
        </p>
        {reviews?.map((review: any, i: number) => (
          <div key={i}>
            <p>{review.author_name}</p>
            <p>{review.rating} ⭐</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div> */}
      <h2>fin test</h2>
    </>
  );
}
