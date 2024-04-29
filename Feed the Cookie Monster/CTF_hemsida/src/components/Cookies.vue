<template>
  <div>
    <button @click="setCookie('flag->', flag)">Feed Me And I Will Give You What You Want!</button>
  </div>
</template>

<script>
export default {
    methods:{
        setCookie(id, value){
            document.cookie = id + "=" + value
        },
        
    },
    data () {
        return {
            flag: "U2FsdGVkX1/SfbmtorZZ0BD3FXGhMQDohdyjtA7D0Uua/gL4fv+HfYhfB6NYCFffSEFFnTuYA2gHUBtYjGgSNQ==",
            flag_key: "kakis"
        }
    }

}
</script>

<style>

</style>