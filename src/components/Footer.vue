<template>
    <footer>
        <img :alt="$appName+' '+$appVersion" src="../assets/logo.png">
        <nav id="main">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link> | 
            <router-link to="/characters">Characters</router-link>
            <!-- <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
                {{ route.name }}
            </router-link> -->
        </nav>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
