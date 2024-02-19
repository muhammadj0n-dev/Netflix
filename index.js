`use strict`
movies.splice(100);

const categoryOption = $('#category')
const cardWrapper = $(`.cardwrapper`)
let  btnMode = $('.btn')
let body = document.querySelector('body');
let head = document.querySelector('header');
let aside = document.querySelector('aside');
let slect =document.querySelector('.slect');
let inpt = document.querySelector('.inpt')

btnMode.addEventListener("click" , function(e){
    body.classList.toggle('body-dark');
    head.classList.toggle(`body-dark`);
    aside.classList.toggle(`body-dark`);
    slect.classList.toggle('body-dark');
    inpt.classList.toggle('body-dark')
}) 

console.log(body);



let category =[]


// ------------- Normalize files

const allMovies=movies.map((el) =>{
    return{
        title:el.title,
        year:el.year,
        category:el.categories,
        id:el.imdbId,
        reting:`${Math.trunc(el.runtime/60)}:${Math.trunc(el.runtime%60)}:${Math.trunc(el.runtime/100)}`,
        time: el.runtime,
        language:el.language,
        youtube:`https://www.youtube.com/embed/${el.youtubeId}`,
        summary:el.summary,
        minImage: el.smallThumbnail,
        maxImage:el.bigThumbnail

    }
})



function getCategory(moviesList){
    if (moviesList.length) { // moviesList mavjud va uzunligi 0 dan katta bo'lsa
        moviesList.forEach((el) => {
           el.category.forEach((e)=> {
            if(!category.includes(e)){
                category.push(e)
            }
           }) 
        });
    }
   render(category)
}


getCategory(allMovies)


function render(data){
if(data.length){
    data.sort().forEach((el)=>{
        console.log(el);
      
        const option = createElement2('option','yogee',el)

        categoryOption.appendChild(option);

    })
}
}



//  render all  movies 

function renderAllmovies(moviesList){
if(moviesList.length){
    moviesList.forEach((el)=>{
        const card = createElement2('div' , 'card' , `
        <img src="${el.minImage}"  alt="" class="">
                <div class="card-body">
                <h2>${el.title.length > 26 ? el.title.substring(0,23)+"..." : el.title}</h2>
                    <ul>
                        <li><strong>Year:</strong>${el.year}</li>
                        <li><strong>Categories:</strong>${el.categories}</li>
                        <li><strong>Rating:</strong>${el.reting}</li>
                        <li><strong>Language:</strong>${el.language}</li>
                    </ul>
                    <div class="flex btn-wrappeer items-center gap-x-3">
                   
                    <button 
                        data-like=${el.id}
                        class="grid hover:bg-red-700 hover:text-white duration-500 text-red-700 place-content-center p-4 border w-12 h-12 rounded-full">
                        <i class="bi bi-suit-heart-fill "></i>
                    </button>

                    <a href="${el.youtube}" target="_blank" class="flex hover:bg-black hover:text-white duration-500  justify-center gap-x-2 text-xl items-center border min-w-24 px-3 h-12 rounded-full"> 
                        <i class="bi bi-play-circle-fill"></i>
                        <span>watch movie</span>
                    </a>
                </div>
                </div> `

                )
                cardWrapper.appendChild(card);
    })
}
}

renderAllmovies(allMovies);

  


