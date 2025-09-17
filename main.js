const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes:[
                {id: 3301, size:'s'},
                {id: 3302, size:'m'},
                {id: 3303, size:'l'},
                {id: 3304, size:'xl'},
            ]
        }
    }
})
