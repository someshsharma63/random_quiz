let baseurl="https://opentdb.com/api.php";
let questionsWrapper=document.querySelector(".questionsWrapper");
let newdata=category.value;
let form=document.querySelector("form");

form.addEventListener('submit',(e)=>
{
  e.preventDefault()
  let formdata=new FormData(form);
let playerData=Object.fromEntries(formdata);

console.log(playerData);
console.log(formdata);

const actualURL = `${baseurl}?amount=${playerData.amount}&category=${playerData.category}&difficulty=${playerData.difficulty}&type=${playerData.type}`;
apidata(actualURL)
console.log(actualURL)
})


function apidata(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result.results);
      showData(result.results);
    });
}

function showData(apidata)
{
  const newData=apidata.map((obj)=>{ // each obj will traverse on fetchedData(ie array of objects). 
    // inside each obj there is an array of incorrect_answers. 
    obj.incorrect_answers.push(obj.correct_answer)
    return obj;
});

  let questiondiv=document.createElement("div");
  apidata.forEach((obj)=>
  {
      let questions=document.createElement("h1");
      questions.innerHTML=obj.question

    
      let questionopt=document.createElement("div");
      for(let i=0;i<4;i++)
      {
          let option=document.createElement("p");
          option.innerHTML=obj.incorrect_answers[i];
          questionopt.append(option);
      }
      questiondiv.append(questions,questionopt);
  })
  questionsWrapper.append(questiondiv);
}










// console.log(newdata);

// for(let x in baseurl)
// {

// }



//amount=10&category=9&difficulty=easy&type=multiple