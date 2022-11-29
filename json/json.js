const shop = {
    shopName: 'web developer zone ',
    owner: 'fahim vau',
    product: {
        webDev: 'to hire web app dev',
        appDev: ' to hire app dev ',
        hacker: ' to get hocker ',
        backend: ' backend support',
    },
    services: 'everything you need to do',
    gears: ['laptop', 'mobile', 'watch', 'desktop',],
    isOpen: true,
    isNew: false,
}
console.log(shop)
const shopString = JSON.stringify(shop)
console.log(shopString)
const shopParse = JSON.parse(shopString);
console.log(shopParse)