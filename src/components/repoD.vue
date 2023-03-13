<template>
  <div class="details">
    <!-- <button
      type="button"
      class="details__body-toggle"
      @click="
        {
          {
            toggleSidebar
          }
        }
      "
    ></button> -->

    <router-link to="/" class="details__body-back">
      <span>&#8592;</span> Back to Repos
    </router-link>
    <div class="details__body">
      <!-- 
                        <aside class="details__body-left">
                            <div class="details__body-left-top">
                                <img src={{details.owner.avatar_url}} alt="img" />
          <div class="details__body-left-top-info">
                                    <h3>@{{details.owner.login}}</h3>
                                    <h4>Olatujoye Olubunmi</h4>
                                </div>
                            <img src={{details.owner.avatar_url}} alt="img" />
                            <div class="details__body-owner">
                                <h3>@{{details.owner.login}}</h3>
                                <h4>Olatujoye Olubunmi</h4>
                                <div class="link">

                                    <a
                                        href="http://github.com/sterlingBoom"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    Github Profile Page
                                    </a>
                                    <a
                                        href="https://sterlingboom.github.io/portfolio-page/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiOutlineLink /> Portfolio Website
                                    </a>
                                    <a
                                        href="http://twitter.com/sterlingboom_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       
                                        Twitter
                                    </a>
                                    <a
                                        href="http://linkedin.com/in/morenike-oyewole"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://wa.link/xvyhzl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                         Whatsapp Me
                                    </a>
                                    <a
                                        href="bummiecarez@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       
                                         Send a mail
                                    </a>
                                </div>
                            </div>
                        </aside> -->
      <main class="details__body-main">
        <h1>{{ details.name }}</h1>
        <br />
        <p>
          {{
            details.description
              ? details.description
              : 'No description added yet'
          }}
        </p>
        <p class="dim">Primary Language: {{ details.language }}</p>
        <p class="dim">
          Created on {{new Date(details.created_at).toDateString() }} || Last
          Updated on
          {{ new Date(details.updated_at).toDateString() }}
        </p>
        <div class="d-flex">
          <p>
            <span>{{ details.stargazers_count }} Stars</span>
          </p>
          <p>
            <AiOutlineFork /> <span>{{ details.forks }} Forks</span>
          </p>
          <!-- <a
                                    href={{details.homepage ? details.homepage : "#"}}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineLink /> Hosted Link
                                </a> -->
          <a
            href="{{details.html_url}}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </div>
        <!-- <p>
          <span class="dim">Repo size: {{ details.size }}kb</span>
        </p>
        <div class="d-flex">
         eslint-disable -->
          <!-- {{details.topics ? ( details.topics.map((topic) = (
          <span class="topic" key="{{topic}}">
            {{ topic }}
          </span>
          )) ) : (
          <span class="topic">No topic added yet</span>
          )}}
          -->
           <!-- {{details.topics ? (
                                    details.topics.map((topic) => (
                                        <span class="topic" key={{topic}}>
                                           {{topic}}
                                        </span>
                                    ))
                                ) : (
                                    <span class="topic">No topic added yet</span>
                                )}} 
        </div> -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { ref } from 'vue'

    const details = ref({})
    const username = ref('')
    const repo = ref('')

    const toggleSidebar = () => {
      document.querySelector('.details').classList.toggle('active')
    }
    onMounted(() => {
      username.value = localStorage.getItem('username')
      repo.value = localStorage.getItem('repo')
      fetch(`https://api.github.com/repos/${username.value}/${repo.value}`)
        .then((res) => res.json())
        .then((data) => {
          details.value = data
        })
    })
  
  
</script>

<style>
.details {
  height: calc(100vh - 4rem);
  max-width: 1440px;
  margin: auto;
}
.details__body {
  transition: 0.6s ease;
  display: grid;
  grid-template-columns: 21% 70%;
  grid-gap: 3%;
  padding: 2rem;
}
@media screen and (max-width: 768px) {
  .details__body {
    padding: 1rem;
    grid-template-columns: 5% 92%;
  }
  .details__body aside > * {
    display: none;
    opacity: 0;
  }
}
.details__body-back {
  padding: 1rem;
}
.details__body.show-sidebar {
  grid-template-columns: 90% 5%;
}
.details__body.show-sidebar .details__body-main > * {
  display: none;
  opacity: 0;
}
.details__body.show-sidebar aside > * {
  display: initial;
  opacity: 1;
}
.details__body aside {
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--secondary-color);
  box-shadow: var(--box-shadow);
  display: flex;
  opacity: 1;
  flex-direction: column;
}
.details__body aside img {
  width: 6rem;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
}
.details__body-main {
  padding: 1rem;
  box-shadow: inherit;
  border-radius: 5px;
  background-color: var(--secondary-color);
  box-shadow: var(--box-shadow);
}
.details__body-owner {
  margin-top: 1rem;
}
.details__body-owner h4 {
  margin-top: 0.3rem;
  opacity: 0.4;
}
.details__body-owner .link {
  margin-top: 1.4rem;
  display: flex;
  opacity: 0.4;
  flex-direction: column;
}
.details__body-owner .link a {
  align-items: center;
  justify-content: center;
  margin: 0.3rem 0;
  transition: 0.7s ease;
}
.details__body-owner .link a:hover {
  opacity: 1;
  color: var(--accent-color);
  text-decoration: underline;
}
.details__body-toggle {
  background: none;
  border: none;
  margin: 0.8rem 0 0 2rem;
  display: none;
}
@media screen and (max-width: 768px) {
  .details__body-toggle {
    margin: 0.8rem 0 0 1rem;
    display: flex;
  }
}
.details__body-toggle > * {
  font-size: 1.5rem;
}
.topic {
  background-color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  box-shadow: var(--box-shadow-sm);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.8rem;
  margin: 5px 5px 5px 0;
}

/* .dets {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
} */
/* eslint-disable */ 
/* .repo-card {
   border-radius: 10px;
   background-color: #1f1f1f;
   box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.7);
   padding: 1rem;
   cursor: pointer;
   border: 1px solid transparent;
   transition: all 0.3s ease-in-out;
   color: #ccc;
} */
.repo-list-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* .repos-list {
	 display: grid;
	 grid-template-columns: 50% 50%;
	 grid-gap: 1rem;
	 margin-top: 20px;
} */
.link{
  color: #ccc;
  text-decoration: none;
  
}
.dets{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 /* --primary-color: #131313;
  --secondary-color: #1f1f1f;
  --text-color: #f1f1f1;
  --accent-color: #00d9ff;
  --box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.7);
  --box-shadow-sm: 0 0 2px 0 rgba(0, 0, 0, 0.7);
} */

.repos-list-item {
	 border-radius: 10px;
	 background-color: #1f1f1f;
	 padding: 1rem;
   width: 100%;
	 cursor: pointer;
	 border: 1px solid transparent;
	 transition: all 0.3s ease-in-out;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-between;
}
.repos-list-item:hover {
  /* background-color: #f4f4f4; */
}
.repos-list-item .dets {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
}
.repos-list-item h2 {
  font-size: 1.2rem;
}
.repos-list-item p {
  margin: 0;
}
.repos-list-item p span {
  background-color: #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}
.repos-list-item p small {
  color: #666;
}
.repos-list-item p small span {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
}
.repos-list-item p small span:hover {
  background-color: #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}
</style>
