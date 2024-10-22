let form = document.querySelector("form");
let baseurl="https://opentdb.com/api.php";
console.log(baseurl)

let questionsWrapper = document.querySelector(".questionsWrapper");
// console.log(questionsWrapper)


form.addEventListener('submit',createurl);

function createurl(e)
{
  e.preventDefault();    //prevent the page from refreshing
  let formdata = new FormData(form);  //a js function which create form object (data easily server p send kar ske);
 
const playerData = Object.fromEntries(formdata);  //key value pair s object ko create karta hai.
  // console.log(playerData)

  const actualURL = `${baseurl}?${getQueryString(playerData)}`;//getQueryString url se parameter ko extract karta hai.
// console.log(actualURL);

//const actualURL = `${baseURL}?amount=${playerData.amount}&category=${playerData.category}&difficulty=${playerData.difficulty}&type=${playerData.type}`;

      console.log(actualURL);
    fetchData(actualURL);
}
function getQueryString()
{
  let querystring=""
  for(x in data)
  {
    querystring+=
    querystring.length === 0 ? `${x}=${data[x]}` : `&${x}=${data[x]}`;
  }
  return querystring;
}

function fetchData(url)
{
  fetch(url)
  .then((response) => response.json())
  .then((result) => {
      console.log(result.results);
    showData(result.results);
  });
}