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
            image.className = "w-22 h-22 rounded-full";
            image.src = `${baseURL}${item.image}`;

            //Create tittle
            const tittle = document.createElement('h2');
            tittle.className = "text-yellow-700 text-sm";
            tittle.textContent = item.name;
            
            //Create price
            const price = document.createElement('div');
            price.className = "text-yellow-500 text-sm";
            price.textContent = formatPrice(item.price);

            const description = document.createElement('p');
            description.className = "w-auto h-auto text-xs indent-8 text-justify flex justify-center items-center m-2";
            description.textContent = item.attributes.description;

            const elementsLeftContainer = document.createElement('div');
            elementsLeftContainer.className = "w-auto h-50 flex flex-col justify-center items-center m-2";
            elementsLeftContainer.append(image, tittle, price);


            const descriptionContainer = document.createElement('div');
            descriptionContainer.className = "w-auto h-auto flex justify-center items-center m-2 border-l-2";
            descriptionContainer.append(description);


            const container = document.createElement('div');
            container.className = "w-2/5 h-auto flex justify-center m-10";
            container.append(elementsLeftContainer, descriptionContainer);
            

            allItems.push(container);

        });
        appNode.className = "flex flex-wrap justify-center m-5";
        appNode.append(...allItems);
    })
