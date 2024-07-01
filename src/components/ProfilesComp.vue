<template>
  <div class="profiles-comp">

    <div class="profiles-full-page">
      <div class="profiles-centralizer">
        <h1>Quem está Assistindo?</h1>
        <div class="get-profile">
          <div class="get-profile-box" v-for="profile in profiles" :key="profile.id"
            @click="setProfileSelected(profile)">
            <img style="width: 85%" :src="profile.img" alt="avatar">
            <p>{{ profile.name }}</p>
          </div>
       </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  name: 'ProfilesComp',
  props: {
    profiles: Array
  },
  methods: {
    setProfileSelected(profile) {
      barramento.setProfileSelected(profile)
    }
  }
}
</script>


<style scoped>
.profiles-comp {
  height: 100vh;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  justify-content: center;
}
.profiles-full-page {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profiles-centralizer {
  width: 100%;
}
h1 {
  font-weight: 300;
  margin: 0;
}
p {
  font-weight: 100;
  margin: 0;
}

.get-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.get-profile-box {
  display:block;
  margin-top: 30px;
}

@media screen and (min-width: 25em){
  p { font-size: calc( 12px + (24 - 12) * (100vw - 335px) / (2500 - 335) ); }
  h1 { font-size: calc( 24px + (85 - 24) * (100vw - 335px) / (2500 - 335) ); }
}

</style>

