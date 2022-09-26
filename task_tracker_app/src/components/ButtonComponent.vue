<template>
    <button class="btn" @click="onClick()" :style="{background:color}">{{text}}</button>
</template>
<script>
    export default{
        name:'ButtonComponent',
        props:{
            text: String,
            color: String
        },
        methods:{
            onClick(){
                console.log("its working")
            }
        }
    }
</script>