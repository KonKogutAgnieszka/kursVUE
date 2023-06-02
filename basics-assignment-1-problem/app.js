const app = Vue.createApp({
  data() {
    return {
      name: "Konik",
      age: 29,
      imgurl:
        "https://a.allegroimg.com/original/11c354/1c4feaa849e4907a7330dd408147/KUBEK-ZOLTY-PAPIEZ-PAPAJ-JAN-PAWEL-II-PREZENT",
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    favNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
