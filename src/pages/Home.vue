<template>
  <div class="container">
    <main class="flex">

<div>
    <h2 class="welcome-style">
      Hi,
       Welcome To
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus}">&nbsp;</span>
    </h2>
    
</div>

    <div class ="img-style">
      <img src= "../assets/images/blue-pics.png" class= "img-size" alt="logo">
    </div>
    <div>
  <button><router-link class="link" to="/repo">Go to Repo</router-link></button>
</div>
    </main>
    
  </div>
  
  
</template>

<script>
// import Logo from '../assets/images/old-picture.jpg'
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["OLUBUNMI'S GITHUB REPOSITORIES"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Lato:wght@300&family=Open+Sans:wght@300&family=Playfair+Display:wght@500&family=Tiro+Gurmukhi&display=swap');

.container {
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
}
.flex{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 90%;
  /* height: 100%; */
  
  
} 
.type-writer{
  display: flex;
  flex-direction: column;
  justify-items: left;

}
.welcome-style{
  /* align-content: flex-start; */
  /* top: 55%; */
  /* margin-bottom: 4rem; */
  overflow: hidden; 
transition-property: background-color, border-color, color, fill, stroke; 
transition-duration: 300ms; 
font-size: 1.9rem;
line-height: 2rem; 
font-family: 'playfair Display', sans-serif;
text-align: left;

}
h1 {
  font-size: 15rem;
  font-weight: bold;
  
}

.blinking-cursor {
  font-size: 6rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
.img-style{
background-color: #2c3e50;
}
.img-size{
  /* width: 320px; */
  height: 450px;
  object-fit: cover; 
position: absolute; 
right: 5rem; 
width: 27.25rem;
top: 10%;
margin-top: 40px;


}
button{
  display: block; 
/* padding-top: 0.5rem; */
padding-bottom: 0.5rem; 
padding-left: 0.75rem;
padding-right: 0.75rem; 
margin-top: 4rem; 
background-color: #2c3e50; 
transition-property: background-color, border-color, color, fill, stroke; 
transition-duration: 500ms; 
font-size: 1.25rem;
line-height: 1.75rem; 
text-align: center; 
/* width: 100%;  */
  width: 13rem;
  position: fixed;
  left: 5rem;
  border-radius: 3%;
  /* margin-top: 70px; */
}
.typed-text{
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: left;
  color: #01101e;
}
@media screen and (max-width: 768px) {
  .container{
    height: 100vh;
  }
  button{
    margin-top: 220px;
  }
  .img-style{
    object-fit: contain;
  }
  .welcome-style{
    display: none;
  }
  .typed-text{
display: none;
  }
  .flex{
    width: 100%;
  }
  .container{
    height: 100vh;
  }
  .blinking-cursor{
    display: none;
  }
}
/* @media (min-width: 768px) { 
  .img-style{
  object-fit: contain; 
top: 16%;
  }
  
 } */

</style>