<template>
    <div class="caracter-card flex justify-center items-center gap-4">

        <div class="flex justify-center items-center flex-col bg-acikmavi rounded-2xl ">
            <div class="name text-xxs font-bold py-1 text-lacivert items-center">{{ character.name }}</div>

            <div class="img flex flex-col items-center justify-center">
                <img class="rounded-2xl w-3/5" :src="posterPath">
            </div>

            <div class="flex flex-col gap- justify-center items-center pb-3">
                <div class=" text-center w-32 text-xxs bg-yesil mt-2 px-2 py-1 text-beyaz rounded-2xl">
                    {{ character.gender }}</div>

                <div class=" w-32 text-xxs bg-siyah mt-2 px-2 py-1 text-beyaz rounded-2xl text-center">
                    {{ character.status }}</div>

                    <div class=" w-32 text-xxs bg-lacivert mt-2 px-2 py-1 text-beyaz rounded-2xl text-center">
                        {{ character.species }}</div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    props: {
        character: {
            require: true
        },
    },
    data() {
        return {
            characterName: []
        }
    },
    computed: {
        posterPath() {
            return this.character.image
        },
    },

}
</script>
<style>

</style>