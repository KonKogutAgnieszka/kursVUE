<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.mail}}</li>
        </ul>
    </li>
</template>

<script>
export default {
data(){
    return{
    detailsAreVisible: false,
    friend: {
        id: 'konik',
        name: 'Agnieszka Koń',
        phone: '723941103',
        mail: 'konagnieszka@gmail.com'
        }
    }},
methods:{
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
    }
}}</script>