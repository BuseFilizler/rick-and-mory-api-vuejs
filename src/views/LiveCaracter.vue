<template>
    <div class="bg-mavi pb-10">
        <div class=" bg-mavi grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 py-4 px-4">
            <CaracterCard v-for="(character, index) in characters" :key="index" :character="character"></CaracterCard>
        </div>
        <div class="flex justify-center items-center gap-4">
            <button @click="currentPage--" v-if="(currentPage > 1)" class=" bg-yesil hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back</button>
            <p>-{{currentPage}}-</p>
            <button @click="currentPage++" v-if="(currentPage < 22)" class=" bg-yesil hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Next</button>
        </div>
    </div>
</template>
<script>
import { ramService } from '../services/rickAndMorty'
import CaracterCard from '../components/cards/CaracterCard.vue'
export default {
    components: {
        CaracterCard
    },
    data() {
        return {
            characters: [],
            totalPages: null,
            currentPage: 1
        }
    },

    async mounted() {
        const data = await ramService.getApiCharacter(`/?page=1&status=alive`)
        console.log(data);
        this.characters = data.results;
        this.totalPages = data.info.pages;
    },
    watch: {
        async currentPage(newcurrentPage, oldcurrentPage) {
            const data = await ramService.getApiCharacter(`/?page=${newcurrentPage}&status=alive`);
            this.characters = data.results;
            this.totalPages = data.info.pages;
        }
    }
} 
</script>
