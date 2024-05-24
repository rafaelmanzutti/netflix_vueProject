<template>
  <div class="login-view">

    <div class="top-page">
      <div class="shadow">

        <header>
          <div class="header-item-logo">
              <span><img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix"></span>
          </div>
        </header>
        <div class="shadow2">
          <div class="top-text">
            <div>
              <h1>Entrar</h1>
            </div>
            <div class="login-email">
              <span>email</span>
            </div>
            <div class="login-senha">
              <span>senha</span>
            </div>
            <div class="enter-lg">
              <button  @click="$router.push('manageProfiles')">Entrar</button>
            </div>
            <div>
              <p>Novo por aqui? <strong>Assine Agora.</strong></p>
            </div>
          </div>
        </div>
        

      </div>
    </div>

    <footer>
      <div class="contact">
        <p>Dúvidas? https://github.com/rafaelmanzutti/</p>
      </div>
      <div class="links-container-ship">
        <div class="links-container">
          <div class="links-box">
            <p>Perguntas frequentes</p>
            <p>Formas de assistir</p>
            <p>Informações corporativas</p>
            <p>Só na Netflix</p>
          </div>
          <div class="links-box">
            <p>Central de Ajuda</p>
            <p>Carreiras</p>
            <p>Termos de uso</p>
            <p>Entre em contato</p>
          </div>
        </div>
        <div class="links-container">
          <div class="links-box">
            <p>Conta</p>
            <p>Resgatar cartão pré-pago</p>
            <p>Privacidade</p>
            <p>Teste de velocidade</p>
          </div>
          <div class="links-box">
            <p>Media Center</p>
            <p>Comprar cartão pré-pago</p>
            <p>Preferências de cookies</p>
            <p>Avisos legais</p>
          </div>
        </div>
      </div>
      <div class="network">
        <div class="social-media">
          <div class="github"><img src="" alt="github"></div>
          <div class="github-io"><img src="" alt="protifólio online"></div>
          <div class="linkedin"><img src="" alt="linkedin"></div>
          <div class="email"><img src="" alt="email"></div>
        </div>
        <div class="signature">
          <p>Clone Netflix - Rafael Manzutti</p>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>

export default {
  name: 'LoginView',
  components: {
   
  }
}
</script>

<style scoped>
h1, span, p {
  color: white;
}

h1 {
    font-size: 2rem;
  }

.shadow2 {
  background-color: rgba(0, 0, 0, 0.7);
}

</style>