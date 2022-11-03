/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//Web api fetch
window.fetch(url)
    .then(answer => answer.json())
    .then(answerJSON => {
        const allItems = [];
        answerJSON.data.forEach(item => {
            //Create image
            const image = document.createElement('img');
            //Create tittle
            const tittle = document.createElement('h2');
            //Create price
            const price = document.createElement('div');

            const container = document.createElement('div');
            container.append(image, tittle, price);
            allItems.push(container);
        });
        document.body.append(...allItems);
    })
