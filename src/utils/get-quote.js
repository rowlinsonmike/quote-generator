export default async () => {
  const apiUrl = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
  //parse out quote from return of api and return
  try {
    const response = await fetch(apiUrl);
    const {
      quote: { quoteText, quoteAuthor },
    } = await response.json();
    return { quoteText, quoteAuthor };
    // return snarky quote on failure
  } catch (error) {
    console.log("no quote available", error);
    return { quoteText: "Nothing to see here.", quoteAuthor: "the Server" };
  }
};
