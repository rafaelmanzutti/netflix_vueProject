<template>
  <div class="profiles-comp">

    <div class="profiles-full-page">
      <div class="profiles-centralizer">
        <h1>{{ msg }}</h1>
        <div>
          <img src="" alt="">
          <p>Rafael</p>
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ProfilesComp',
  data() {
    return {
      userProfile: ''
    }
  },
  props: {
    msg: String
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
  background-color: rgb(248, 211, 156);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profiles-centralizer {
  background-color: rgb(255, 63, 63);
  width: 100%;
  
}

h1 {
  background-color: blue;
  font-weight: 300;
  margin: 0;
}
p {
  background-color: rgb(3, 168, 31);
  font-weight: 100;
  margin: 0;
}

@media screen and (min-width: 25em){
  p { font-size: calc( 12px + (24 - 12) * (100vw - 335px) / (2500 - 335) ); }
  h1 { font-size: calc( 24px + (85 - 24) * (100vw - 335px) / (2500 - 335) ); }
}


</style>

