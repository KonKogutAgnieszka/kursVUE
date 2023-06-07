const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.name = confirmedName;
    },
    submitForm(event) {
      alert("Submitted");
    },
    add(number) {
      this.counter += number;
    },
    remove(number) {
      this.counter -= number;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
