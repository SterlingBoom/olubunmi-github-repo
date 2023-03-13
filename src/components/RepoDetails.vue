<template>
  <div class="container">
    <!-- 
    <main class="details__body-main">
        <h1>{{ repo.name }}</h1>
        <br />
        <p>
          {{ repo.description ? repo.description : "No description added yet" }}
        </p>
        <p class="dim">Primary Language: {{ repo.language }}</p>
        <p class="dim">
          Created on {{ new Date(repo.created_at).toDateString() }} ||
          Last Updated on {{ new Date(repo.updated_at).toDateString() }}
        </p>
        <div class="d-flex">
          <p>
            <span>{{ repo.stargazers_count }} Stars</span>
          </p>
          <p>
            <span>{{ repo.forks }} Forks</span>
          </p>
          <a :href="repo.homepage ? repo.homepage : '#'" target="_blank" rel="noopener noreferrer">
            Hosted Link
          </a>
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            Github Link
          </a>
        </div>
        <p>
          <span class="dim">Repo size: {{ repo.size }}kb</span>
        </p>
        <div class="d-flex">
          <template v-if="repo.topics">
            <span v-for="topic in details.topics" :key="topic" class="topic">
              {{ topic }}
            </span>
          </template>
          <template v-else>
            <span class="topic">No topic added yet</span>
          </template>
        </div>
      </main> -->

    <main class="details-card">
      <div class="details-body-right-top">
        <h3 class="detail-title">Repository Title: {{ repo.name }}</h3>
        <p class="describe"> Description: {{ repo.description }}</p>
      </div>
      <div class="details-body-right-bottom">
        <div class="details-body-right-bottom-item">
          <h3 class="language">Language: <span>{{ repo.language }}</span></h3>
          
        </div>
        <div class="details-body-right-bottom-item">
          <h3 class="stars">Stars: <span>{{ repo.stargazers_count }}</span></h3>
          
        </div>
        <div class="details-body-right-bottom-item">
          <h3 class="forks">Forks:<span>{{ repo.forks_count }}</span></h3>
          
        </div>
        <div class="details-body-right-bottom-item">
          <h3 class="issues">Issues: <span>{{ repo.open_issues_count }}</span></h3>
          
        </div>
        <div class="details-body-right-bottom-item">
          <h3 class="created">Created: <span>{{ repo.created_at }}</span></h3>
          
        </div>
        <div class="details-body-right-bottom-item">
          <h3 class="updated">Updated: <span>{{ repo.updated_at }}</span></h3>
          
          <div class="d-flex">
            <a
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              View on github
            </a>
        
          <p>
            <span class="dim"> Repo size: {{ repo.size }} KB </span>
            </p>
            <span>
              <router-link to="/Repo" class="back-link">Back to Repos</router-link>
            </span>
          
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGithubStore } from '../store/github'
import { storeToRefs } from 'pinia'
const route = useRoute()
const { repo } = storeToRefs(useGithubStore())
const { setSingleRepo } = useGithubStore()

onMounted(() => {
  setSingleRepo(route.params.id)
})

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: black; */
  height: 110vh;
  max-width: 100%;
  
}
.details-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ccc;
  /* max-width: 100%; */
  /* width: 800px; */
  /* height:  800px; */
  /* align-items: center; */
  width: 70%;
  /* height: 0%; */
  background-color: #023f47;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.1);
  padding: 20px;
  margin: 20px;
  
}
.detail-title{
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: left;
}
.describe{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: left;
}
.language{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: left;
}
.stars{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: left;
}
.forks{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: left;
}
.issues{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;
}
.created{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;
}
.updated{
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;
}
.d-flex{
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  /* margin: 20px; */
  width: 100%;
}
.btn{
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color: #072af5;
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.1);
  transition: all 0.3s ease;
}
.btn-primary{
  background-color: #02526d;
  text-decoration: none;
  color: #fff;
}
.btn:hover{
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.2);
  background-color: #ccc;
  color:#023f47;
  text-decoration: none;
}
.back-link{
 
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color:#02526d;
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
}
.back-link:hover{
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.2);
  background-color: #ccc;
  color:#023f47;
}
.dim{
  color: #ccc;
  font-size: 1.2rem;
}
</style>
