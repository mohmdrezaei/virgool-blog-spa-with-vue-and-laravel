<template>
    <div>
        <front-navbar></front-navbar>
    </div>
</template>

<script>
import FrontNavbar from "../FrontNavbar";
export default {
    name: "Home",
   components: {
        FrontNavbar
   }
}
</script>

<style>
.v-toolbar__content {
    padding: 0 !important;
}
</style>
