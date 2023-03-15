<template>
  
    <div class="container">
      <div class="repo-card">
      
      <router-link :to="{ name: 'RepoDetails', params: {id:repo.id} }" class="link-repo">
        <div class="repos-list-item">
          <div class="repo-list-header">
          <h2>
            {{ repo.name }}&nbsp;&nbsp; &nbsp;&nbsp; <small> ({{ repo.visibility }})</small>
          </h2>
          <p>
            <span>
              {{ repo.stargazers_count }}
            </span>
          </p>
        </div>
        <p class="my-1">
          {{ repo.description ? repo.description : 'No description available' }}
        </p>
        <div class="details">
      <p>
        <small>
          {{ repo.language ? repo.language : 'No language specified' }}
        </small>
      </p>
      <p>
        <small>
          last updated on
          {{ new Date(repo.updated_at).toLocaleDateString()}}
        </small>
      </p>
    </div>
    
        </div> 
        
  
      </router-link>
      </div>
      </div>
      
    
    
  
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['repo'])
</script>

<style scoped>
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;

}
.link-repo{
  text-decoration: none;
  color: #181616;
  width: 100%;
  max-width: 100%;
}
.link-repo:hover{
  text-decoration: none;
  color: #181616;
} 
.repo-list-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
.repo-card{
  width: 100%;
  max-width: 100%;
  margin: 30px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(120, 70, 70, 0.1);
  background-color: #dcb186;
}
.repo-list-item{
  display: flex;
  /* flex-wrap:wrap; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #787068; */
  /* border-radius: 10px; */
  /* box-shadow: 0 0 10px rgba(120, 70, 70, 0.1); */
  /* padding: 20px; */
  /* margin: 20px; */
}
.details{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}


</style>

