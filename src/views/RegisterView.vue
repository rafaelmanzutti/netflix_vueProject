<template>
  <div class="register-view">

    <div class="top-page">
      <header>
        <div class="header-item-logo">
            <span><img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix"></span>
        </div>
        <div class="header-item-login">
          <div class="enter">
            <button  @click="$router.push('login')">Entrar</button>
          </div>
        </div>
      </header>

      <div class="centralizer-top-text">
        <div class="shadow2">
          <div class="top-text">
            <div class="top-text1">
              <h1>Crie uma senha para iniciar sua assinatura</h1>
              <p>Faltam só mais alguns passos!</p>
              <p>Nós também detestamos formulários.</p>
            </div>
            <div class="login-name">
              <span>nome</span>
            </div>
            <div class="login-email">
              <span>email</span>
            </div>
            <div class="login-password">
              <span>senha</span>
            </div>
            <div class="enter-lg">
              <button  @click="$router.push('login')">Cadastrar Usuário</button>
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
  name: 'RegisterView',
  components: {
   
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px 25px 40px;
  border-bottom: solid 1px rgb(230, 228, 228);
}
.enter button {
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  padding: 11px 18px;
  font-weight: 600;
  font-size: 1.2rem;
}
.enter button:hover {
  text-decoration-line: underline;
  cursor: pointer;
}

.centralizer-top-text {
  width: 100%;
  display: flex;
  justify-content: center;
}
.shadow2 {
  display: flex;
  box-sizing: border-box;
  max-width: 550px;
  padding: 40px 60px 140px 60px;
}
.top-text {
  width: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
  text-align: left;
}
.top-text p {
  text-align: left;
  margin: 0px;
  font-size: 1.2rem;
}

.login-name {
  padding: 15px 0px;
  border: solid 1px rgb(0, 0, 0);
  border-radius: 5px;
  margin: 25px 0px 20px 0px;
}
.login-email {
  padding: 15px 0px;
  border: solid 1px rgb(0, 0, 0);
  border-radius: 5px;
  margin-bottom: 20px;
}
.login-password {
  padding: 15px 0px;
  border: solid 1px rgb(0, 0, 0);
  border-radius: 5px;
  margin-bottom: 20px;
}
.enter-lg button {
  width: 100%;
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 20px 0px;
  margin-bottom: 5px;
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
}
.enter-lg button:hover {
  background-color: rgb(196, 0, 0);
  cursor: pointer;
}

footer {
  background-color: rgb(238, 238, 238);
  box-sizing: border-box;
  padding: 30px 460px 80px 460px;
}
.contact p {
  box-sizing: border-box;
  padding: 10px 0px 20px 0px;
  margin: 0px;
  font-size: 1.1rem;
  text-align: left;
}
.links-container-ship {
  display: flex;
}
.links-container {
  width: 100%;
  display: flex;
}
.links-box {
  width: 100%;
}
.links-box p {
  font-size: 0.9rem;
  text-align: left;
  margin: 5px 5px 20px 0px;
}
.network {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0px 20px 0px;
}
.social-media {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 10px 0px 20px 0px;
}
.signature p {
text-align: left;
font-size: 0.9rem;
}

@media (max-width: 1920px){
  footer {
    padding-left: 200px;
    padding-right: 200px;
  }
}
@media (max-width: 1280px){
  footer {
    padding-left: 35px;
    padding-right: 35px;
  }
}
@media (max-width: 960px){
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
  }
  footer {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .contact p {
    font-size: 1rem;
  }
  .links-container {
    display: block;
  }
  .links-box p, .signature p {
    font-size: 0.8rem;
  }
  
}

@media (max-width: 600px) {
  h1 {
    margin: 0px;
  }
  .shadow2 {
    padding: 40px 60px 100px 60px;
  }
  .contact p {
    font-size: 0.8rem;
  }
  .social-media {
    display: block;
  }
  .github, .github-io, .linkedin, .email {
    padding: 10px;
  }
}

</style>

