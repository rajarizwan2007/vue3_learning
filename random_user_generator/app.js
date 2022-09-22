const app = Vue.createApp({
    data(){
        return {
            firstName: "Raja",
            lastName: "Rizwan",
            email: "rajarizwan2007@example.com",
            gender:"male",
            picture: "https://avatars.githubusercontent.com/u/33256730?s=96&v=4"
        }
    },
    methods:{
        async getUser(){
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    }
})

app.mount("#app");