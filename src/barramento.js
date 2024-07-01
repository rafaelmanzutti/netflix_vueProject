import Vue from 'vue'

export default new Vue({
    methods: {
        setProfileSelected(profile) {
            this.$emit('profileSelected', profile)
        },
        onProfileSelected(callback){
            this.$on('profileSelected', callback)
        }
    }
})