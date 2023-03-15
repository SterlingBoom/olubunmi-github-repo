
<template>
<header :class="{'scrolledNav' : scrolledNav}">
  <nav>
    <div class="branding">
      <h2> <router-link class="name-style" to="/"> Olubunmi </router-link></h2>
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/about">About</router-link></li>
      <li><router-link class="link" to="/repo">Repo</router-link></li>
      <li><router-link class="link" to="/notfound">404</router-link></li>
    </ul>
    <div class="icon">
      <font-awesome-icon icon="bars"
        @click="toggleMobileNav"
        v-show="mobile"
        class="fa fa-bars"
        :class="{ 'icon:active': mobileNav }"
      />
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
export default {
  data() {
    return {
      scrollPosition: null,
      mobile:null,
      mobileNav: null,
      windowWidth: null,
      
      }
  },
  created() {
    window.addEventListener("resize", this.checkScreen)
    this.checkScreen()
  }, 
  mounted() {
    window.addEventListener("scroll", this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    updateScroll() {
      const scrollPosition = window.scrollY
      if(scrollPosition > 50){
        this.scrolledNav = true
        return
      } 
      this.scrolledNav = false
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750) {

        this.mobile = true
        return
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
    
    
  }
}
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
.scrolledNav{
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0,0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.branding{
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0,0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);;
}
.scrolledNav, .nav{
  padding: 8px 0;
}
nav{
  display: flex;
  /* position: relative; */
  flex-direction: row;
  padding: 12px 0;
  transition:.5s ease all;
  width: 100%;
  margin: 0 auto;
}
ul,
  .link {
font-weight: 500;
color: #f2e2e2;
list-style: none;
text-decoration: none;
  }
  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }
  .name-style{
    color: #fff;
    list-style: none;
    text-decoration: none;
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
  .navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    
  }

  .icon{
    display:flex;
    align-items: center;
    position: absolute;
    top: 0;
    right:24px;
    height: 100%;
    cursor: pointer;
    font-size: 24px;
    transition: .8s ease all;
  }
  .icon:active {
    transform:rotate(180deg)
  }

  .dropdown-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #020202;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    
  }
  .dropdown-nav li{
    margin-left: 16px;
  }
/*   
  .mobile-nav .link:after{
    
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  }
  .mobile-nav-enter-to{
    transform:  translateX(0);
  } */

  .dropdown-nav li{
    margin-left: 0;
    text-decoration: none;  
  }
  .dropdown-nav link{
    color: #000;
    
  }
  
@media(min-width: 1140px){
  nav{
    max-width: 1140px;
  }
}
</style>
