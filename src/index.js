/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {

     const newPrice = new window.Intl.NumberFormat('en-En',{
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return newPrice;
}
//Web api fetch
window.fetch(`${baseURL}/api/avo`)
    .then(answer => answer.json())
    .then(answerJSON => {
        const allItems = [];
        answerJSON.data.forEach(item => {
            //Create image
            const image = document.createElement('img');
            image.src = `${baseURL}${item.image}`;
            //Create tittle
            const tittle = document.createElement('h2');
            tittle.className = 'text-lg';
            tittle.textContent = item.name;
            
            //Create price
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);

            const container = document.createElement('div');
            container.append(image, tittle, price);
            allItems.push(container);
        });
        appNode.append(...allItems);
    })
