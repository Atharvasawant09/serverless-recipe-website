// search Bar//
let available = [
    'Red Chilli Powder',
    'Feta cheese',
    'Maharashtrain Meal',
    'Punjabi Thali',
    'Grilled Chesse Sandwich',
    'Lassi',
    'Lemonade',
    'Misal Pav',
    'Kaju Paneer'


]

const resultbox = document.querySelector(".result-box");
const searchinput = document.getElementById("search-input");

searchinput.onkeyup = function () {
    let result = [];
    let input = searchinput.value;
    if (input.length) {
        result = available.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result)

    if (!result.length) {
        resultbox.innerHTML = ''
    }

}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick = selectInput(this)>" + list + "</li>"
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
    searchinput.value = list.innerHTML;
    resultbox.innerHTML = '';
}



// Dropdown Menu//

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected')


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            selected.classList.add("text-fade-in");
            setTimeout(() => {
                selected.classList.remove("text-fade-in")

            }, 300);
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')

            options.forEach(option => {
                option.classList.remove('active')

            });

            option.classList.add('active')
        })
    })



    window.addEventListener("click", e => {
        const size = dropdown.getBoundingClientRect();

        if (
            e.clientX < size.left ||
            e.clientX > size.right ||
            e.clientY < size.top ||
            e.clientY > size.bottom
        ) {
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
        }
    });

})


//FAQ

const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
     const height = accordionTitle.nextElementSibling.scrollHeight;
     console.log(height);
     accordionTitle.classList.toggle("active-header");
     if (accordionTitle.classList.contains("active-header"))  {
       accordionTitle.nextElementSibling.style.maxHeight = `${height}px`; 
    } else {
        accordionTitle.nextElementSibling.style.maxHeight = "0px"; 
    }
  });
});

// Generating random videos

var videoUrls = [
    "https://www.youtube.com/embed/S-TmmjEN-V0",
    "https://www.youtube.com/embed/o3jtOcjoezQ",
    "https://www.youtube.com/embed/zhI7bQyTmHw",
    "https://www.youtube.com/embed/aMDV2tfY9rM",
    "https://www.youtube.com/embed/-_WE8-FwLv0"
  ];
  
 
  function getRandomVideoUrl() {
    return videoUrls[Math.floor(Math.random() * videoUrls.length)];
  }
  
  
  function changeVideo() {
    var iframe = document.getElementById("videoFrame");
    var randomUrl = getRandomVideoUrl();
    iframe.src = randomUrl;
  }

  window.onload = function() {
    changeVideo();
};
  
//   // Change video every 10 seconds (10000 milliseconds)
//   setInterval(changeVideo, 1000);



