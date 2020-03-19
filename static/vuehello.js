Vue.component('my-counter', {
    props: ['init'],
    template: '<div>現在値は{{ current }}です！' + 
        '<input type="button" v-on:click="onclick" value="増加" /></div>',
    data: function() {
        return {
            current: this.init
        };
    },
    methods: {
        onclick: function() {
            this.current++;
        }
    }
});

Vue.component('my-hello', {
    props: ['yourName'],
    template: '<div>' +
        '<header><slot name="header"></slot></header>' +
        '<div><slot></slot></div>' +
        '<footer><slot name="footer"></slot></footer>' +
        '</div>'
})

new Vue(
    {
        el: '#app',
        data: {
            message: 'こんにちは Vue.js!',
            time: '',
            language: '',
            unit: {},
            emails: [],
            toggle: true,
            season: '',
            books:[
                {isbn: '1111-2222-3333', title: '独習C#', price: 3600},
                {isbn: '1111-2222-3334', title: 'Ruby on Rails', price: 2060},
                {isbn: '1111-2222-3335', title: 'Android', price: 2750},
                {isbn: '1111-2222-3336', title: 'MySql', price: 2480},
                {isbn: '1111-2222-3337', title: 'Visual C#', price: 2000},
            ],
            attrs: {
                size: 12,
                maxlength: 15,
                required: true,
            },
        },
        methods: {
            onclick: function() {
                this.time = new Date().toLocaleTimeString();
            },
            onchange: function() {
                console.log(this.unit.name + ':' + this.unit.size);
            }
        }
    }
);