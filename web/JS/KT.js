const product = [
    {
        id: 0,
        image: 'Anh/Manga/arknights.jpg',
        title: 'ARKNIGHTS COMIC ANTHOLOGY',
        price: 1,
    },

    {
        id: 1,
        image: 'Anh/Manga/magica.jpg',
        title: 'PUELLA MAGI MADOKA MAGICA',
        price: 1,
    },
    {
        id: 2,
        image: 'Anh/Manga/smileW.webp',
        title: 'TÔI CHUYỂN SINH THÀNH SMILE',
        price: 1,
    },
    {
        id: 3,
        image: 'Anh/Manga/86.jpg',
        title: 'EIGHTY-SIX',
        price: 1,
    },
    {
        id: 4,
        image: 'Anh/Manga/black.jpeg',
        title: 'BLACK CLOVER',
        price: 1,
    },
    {
        id: 5,
        image: 'Anh/Manga/darling.jpg',
        title: 'DARLING IN THE FRANXX',
        price: 1,
    },

    {
        id: 6,
        image: 'Anh/Manga/chuthuat.jpg',
        title: 'CHÚT THUẬT HỒI CHIẾN',
        price: 1,
    },
    {
        id: 7,
        image: 'Anh/Manga/evang.jpg',
        title: 'Neon Genesis Evangelion',
        price: 1,
    },
    {
        id: 8,
        image: 'Anh/Manga/friren.jpg',
        title: 'SOUSOU NO FRIEREN',
        price: 1,
    },
    {
        id: 9,
        image: 'Anh/Manga/girls-frontline.jpg',
        title: 'GIRL FRONLINE',
        price: 1,
    },
    {
        id: 10,
        image: 'Anh/Manga/hero.jpg',
        title: 'Boku no Hero Academia',
        price: 1,
    },

    {
        id: 11,
        image: 'Anh/Manga/kight.jpg',
        title: 'KHÔ CỐT HIỆP SĨ',
        price: 1,
    },
    {
        id: 12,
        image: 'Anh/Manga/magica.jpg',
        title: 'PUELLA MAGI MADOKA MAGICA',
        price: 1,
    },
    {
        id: 13,
        image: 'Anh/Manga/mashle.jpg',
        title: 'MASHLE',
        price: 1,
    },
    {
        id: 14,
        image: 'Anh/Manga/thanhguom.jpg',
        title: 'BLACK CLOVER',
        price: 1,
    },
    {
        id: 15,
        image: 'Anh/Manga/yugioh.jpg',
        title: 'VUA CHƠI ĐỒ',
        price: 1,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
       `+
        "<button onclick='addtocart("+(i++)+")'>Thêm truyện vào kho</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    const itemExists = cart.some(item => item.id === categories[a].id);
    if (!itemExists) {
        cart.push({...categories[a]});
        displaycart();
        const buttons = document.getElementsByTagName('button');
        buttons[a].disabled = true;
        buttons[a].textContent = 'Đã thêm vào kho';
    } else {
        alert('Truyện này đã có trong kho của bạn!');
    }
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = " "+0+"";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = " "+total+"";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                `+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}