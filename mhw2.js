function ChangeShopImgDefault(event){
    const defaultImg=[
        {
            "id": "0",
            "name": "giubotto",
            "img":"\\immagini\\img-shop1\\giubotto.webp"
        },
        {
            "id":"1",
            "name": "camicia",
            "img": "\\immagini\\img-shop1\\camicia.avif"
        },
        {
            "id": "2",
            "name": "pantalone",
            "img": "\\immagini\\img-shop1\\pantalone.webp"
        },
        {
            "id":"3",
            "name":"scarpa",
            "img":"\\immagini\\img-shop1\\scarpa.webp"
        },
        {
            "id":"4",
            "name":"shoe2",
            "img": "\\immagini\\img-shop2\\shoe2.jpeg"
        },
        {
            "id":"5",
            "name":"shoe3",
            "img":"\\immagini\\img-shop2\\shoe3.jpeg"
        },
        {
            "id":"6",
            "name":"shoe4",
            "img":"\\immagini\\img-shop2\\shoe4.jpeg"
        },
        {
            "id":"7",
            "name":"shoe1",
            "img":"\\immagini\\img-shop2\\shoe1.jpeg"
        }
        
        
    ];
    const index=event.currentTarget.dataset.id;
    shop1items[index].src=defaultImg[index].img;

}



function ChangeShopImg(event) {
    const hoverImg = [
        {
            "id": "0",
            "name": "giubotto",
            "img": "\\immagini\\img-shop1\\img-hoover\\giubotto.png"
        }, 
        {
            "id":"1",
            "name": "camicia",
            "img":"\\immagini\\img-shop1\\img-hoover\\camicia.png"
        },
        {
            "id":"2",
            "name":"pantalone",
            "img":"\\immagini\\img-shop1\\img-hoover\\pantalone.png"
        },
        {
            "id":"3",
            "name":"scarpa",
            "img":"\\immagini\\img-shop1\\img-hoover\\scarpa.png"
        },
        {
            "id":"4",
            "name":"shoe2",
            "img": "\\immagini\\img-shop2\\img-hover\\shoe2.avif"
        },
        {
            "id":"5",
            "name":"shoe3",
            "img":"\\immagini\\img-shop2\\img-hover\\shoe3.avif"
        },
        {
            "id":"6",
            "name":"shoe4",
            "img":"\\immagini\\img-shop2\\img-hover\\shoe4.avif"
        },
        {
            "id":"7",
            "name":"shoe1",
            "img":"\\immagini\\img-shop2\\img-hover\\shoe1.avif"
        }
    ];
    const index= event.currentTarget.dataset.id;
    console.log(index);
    shop1items[index].src=hoverImg[index].img;
    
    
    

    


}




function addNewsItem(event) {
    const Objnews = [{
        "nome": "obj1",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj1.png",
        "title": "Thanks to Rihanna, No One Can Go Pantless Again",
        "sub-title": "(STYLE) 14 HOURS AGO"
    },
    {
        "nome": "obj2",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj2.png",
        "title": "KEEN's New Sghoe Leaves Nothin to the Immagination",
        "sub-title": "(STYLE) 17 HOURS AGO"
    },
    {
        "nome": "obj3",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj3.png",
        "title": "Ypur Favourite Perfume Could Be Used to Treat Depression",
        "sub-title": "(BEAUTY) 19 HOURS AGO"
    },
    {
        "nome": "obj4",
        "img": "\\immagini\\img-news\\img-news-more\\img-Obj4.png",
        "title": "The Gant Archive — A Shirt With History",
        "sub-title": "(STYLE, SPONSORED) 20 HOURS AGO"
    }
    ];

    const box = document.querySelector('.container-news');
    const container = document.createElement('div');
    const cntImg = document.createElement('div');
    const img = document.createElement('img');
    const cntText = document.createElement('div');
    const text = document.createElement('p');
    const subtitle = document.createElement('p');

    //qua devo usare JSON (vedi slide) per creare un oggetto Javascript.
    //All'interno dell'oggetto metto nome news, indirizzo immagine, testo titolo e testo subtitolo.


    container.classList.add('container-new');
    cntImg.classList.add('container-img-new');
    cntImg.classList.add('zoom');
    img.classList.add('img-big');
    cntText.classList.add('container-text-new');
    cntText.classList.add('font');
    text.classList.add('text-new');
    subtitle.classList.add('sub-title');

    console.log(img);



    img.src = Objnews[i].img;
    text.textContent = Objnews[i].title;
    subtitle.textContent = Objnews[i]["sub-title"];

    console.log(text);

    cntImg.appendChild(img);
    cntText.appendChild(text);
    cntText.appendChild(subtitle);

    container.appendChild(cntImg);
    container.appendChild(cntText);

    box.appendChild(container);
    console.log("hdhdhdhdh")
    i = i + 1;
}


const loadmore = document.querySelector('.box-loadmore');
loadmore.addEventListener('click', addNewsItem);
let i = 0; //indice degli oggetti della lista


const shop1items = document.getElementsByClassName('shop-img');
console.log(shop1items);


for (let y=0; y<shop1items.length; y++) {
    shop1items[y].addEventListener('mouseenter', ChangeShopImg);
    shop1items[y].addEventListener('mouseleave', ChangeShopImgDefault);
     
    
}



