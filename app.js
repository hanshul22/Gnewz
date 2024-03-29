// Progression 1: create a function and fetch the api using axios
let news = [];

function getData() {
  const getBlogDetails = document.getElementById('blog');


  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&token=3f8b5d0e7f8bd4e3f08446abd1202025&lang=en'
    )
    .then((result) => {
      const listOfArticles = result.data.articles;

      listOfArticles.forEach((article) => {
        const getArticle = document.createElement('div');
        getArticle.setAttribute('id', 'article');
        getArticle.setAttribute('class', 'article');

        const title = document.createElement('h3');
        const img = document.createElement('img');
        const content = document.createElement('p');

        title.innerText = article.title;
        img.setAttribute('src', article.image);
        content.innerText = article.content;

        getArticle.append(title);
        getArticle.append(img);
        getArticle.append(content);

        news.push(getArticle);
      });

      news.forEach((ele) => {
        getBlogDetails.append(ele);
      });
    });
}

getData();
