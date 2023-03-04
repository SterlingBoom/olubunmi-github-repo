<template>
<header>
  <nav>
    <div class="branding">
      <h2>Olubunmi</h2>
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/about">About</router-link></li>
      <li><router-link class="link" to="/repo">Repo</router-link></li>
      <li><router-link class="link" to="/notfound">404</router-link></li>
    </ul>
    <div class="icon">
      <i
        @click="toggleMobileNav"
        v-show="mobile"
        class="fa fa-bars"
        :class="{ 'icon-active': mobileNav }"
      ></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/repo">Repo</router-link></li>
        <li><router-link to="/notfound">404</router-link></li>
      </ul>
    </transition>
  </nav>
</header>
</template>

<script>
export default {}
</script>

<style>
header{
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  z-index: 99;
  position: fixed;
  transition: 0.5s ease all ;
  color: #fff;
} 
nav{
  display: flex;
  flex-direction: row;
  /* padding: 12px 0; */
  transition:.5s ease all;
  width: 100%;
  margin: 0 auto;
}
ul,
  .link {
font-weight: 500;
color: #fff;
list-style: none;
text-decoration: none;
  }
  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }
  .link{
    font-size: 16px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
  }
  .link:hover{
    color: #00afea;
    border-color: #00afea;
  }
  .branding{
    display: flex;
    align-items: center;
  }
  
@media(min-width: 1140px){
  nav{
    max-width: 1140px;
  }
}
</style>
