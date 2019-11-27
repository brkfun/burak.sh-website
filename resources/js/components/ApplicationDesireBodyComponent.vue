<template>
    <div class="realistic-container container">
        <div class="header-container">
            <div class="header">
                <header-component></header-component>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <first-component></first-component>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <second-component></second-component>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <third-component></third-component>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <fourth-component></fourth-component>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer">
                <footer-component></footer-component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('App Body Component mounted.')
        }
    }
</script>
