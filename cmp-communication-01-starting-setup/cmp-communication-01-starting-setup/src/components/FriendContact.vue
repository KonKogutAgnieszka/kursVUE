<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props: ['name', 'phoneNumber','emailAdress','isFavorite],
  props: {
    name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAdress: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
    default: false,
    //validator: function(value) {
    //  return value === true || value === false;
    //}
  },
  },
  emits:['toggle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
    this.$emit('toggle-favorite',this.id)
    },
  }
};
</script>