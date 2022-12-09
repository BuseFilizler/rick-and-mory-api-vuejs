<template>
    <div class="narbar bg-yesil pt-3 pb-3 text-beyaz">
     
            <ul class=" flex flex-row gap-6 justify-evenly items-center">

                <router-link tag="li" to="/" exact>
                    <li class=" cursor-pointer text-base font-medium">Home</li>
                </router-link>

                <router-link tag="li" to="/allcaracter">
                    <li class=" cursor-pointer text-base font-medium">All Characters</li>
                </router-link>

                <router-link tag="li" to="/deadcaracter">
                    <li class=" cursor-pointer text-base font-medium">Dead</li>
                </router-link>

                <router-link tag="li" to="/livecaracter">
                    <li class=" cursor-pointer text-base font-medium">Live</li>
                </router-link>

                <router-link tag="li" to="/femalecaracter">
                    <li class=" cursor-pointer text-base font-medium">Female</li>
                </router-link>

                <router-link tag="li" to="/malecaracter">
                    <li class="cursor-pointer text-base font-medium">Male</li>
                </router-link>

            </ul>

       </div>
</template>
<script>
export default {

}
</script>
<style>

</style>