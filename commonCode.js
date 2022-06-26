function renderImageGallery (imageArray) {
    let ul = document.querySelector('.gallery');
    imageArray.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<h2 id=${element.id}>${element.title}</h2>
        <figure>
        <a href = "${element.link?element.link+'" target = "_blank"':element.filename+".jpg"}">
                <img src = '${element.filename}_min.jpg'>
            </a>
            <figcaption>
                <p>${element.info?element.info:''}</p>
                <p class='additional'>${element.instruments?element.instruments:''}</p>
                <p class='additional'>${element.date?element.date:''}</p>
            </figcaption>
        </figure>`;
        ul.append(li);
    });
}

function renderJpgMax (image){
    return document.write(`
    <li>
        <figure>
            <a href = './${image}.jpg'>
            <img src='${image}.jpg'>
            </a>
        </figure>
    </li>`);
}

function renderJpgTitle(image, title) {
    return document.write(`
    <li>
        <figure>
            <a href = './${image}.jpg'>
            <img src = './${image}.jpg'>
            </a>
            <figcaption>
            ${title}</figcaption>
        </figure>
    </li>
    `);
}

function renderJpg (image, date, animation) {
    //if(date){console.log(date)}
    return document.write(`
    <li>
        <figure>
            <a href = './${image}.jpg'>
            <img src = './${image}_min.jpg'>
            </a>
            <figcaption>
            ${date?date:''}
            ${animation?('<br><a href="'+image+'.gif">Смореть анимацию</a></figcaption>'):('</figcaption>')}
        </figure>
    </li>
    `);
}

function footer() {
    return document.write(`<footer>&copy; Максим Лёвин, ${new Date().getFullYear()}</footer>`);
}