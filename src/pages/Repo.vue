/* eslint-disable */
<template>
    <div class="container">
					<h1>Welcome to Olubunmi's  Github Repositories</h1>
      <div class="repos-list" v-for="repo in currentRepos" :key="repo.id">
        <RepoList :repo="repo" />
      </div>
      <div>
        
    </div>
				<Pagination
          :next="next"
          :prev="prev"
          :paginate="paginate"
          :pageNumbers="pageNumbers"
          :currentPage="currentPage"
          :repos="repos"
          :reposPerPage="reposPerPage"
          
        />
      </div>
</template>
<script setup>
import {onMounted } from 'vue'
import RepoList from '../components/RepoList.vue'
import Pagination from '../components/Pagination.vue'
import {useGithubStore} from '../store/github'
import {storeToRefs} from 'pinia'
const {currentRepos,repos, pageNumbers, currentPage} = storeToRefs(useGithubStore())
const {fetchRepos} = useGithubStore()
const prev=() => {
  if(currentPage.value > 1){
    currentPage.value--
  }
}
const next =() => {
  if(currentPage.value < pageNumbers.value.length){
    currentPage.value++
  

  }
  

} 
const paginate = (e) => {
  currentPage.value = Number(e.target.innerText)
}

// const handleShowUsers = (e) => {
//   showusers.value = true
//   if (e.target.innerText === '') {
//     showusers.value = false
//   }
// }

// const handleUser = (e) => {
//   user.value = e.target.innerText
//   showusers.value = false
// }

onMounted(fetchRepos)

//implementing pagination

// const currentPage = ref(1)
// const repoPerPage = ref(5)
// const indexOfLastRepo = computed(() => currentPage.value * repoPerPage.value)
// const indexOfFirstRepo = computed(
//   () => indexOfLastRepo.value - repoPerPage.value
// )
// const currentRepos = computed(() =>
//   // repos.slice(indexOfFirstRepo.value, indexOfLastRepo.value)
//   repos.value.slice(indexOfFirstRepo.value, indexOfLastRepo.value)
// )






</script>

<style>
/* eslint-disable */ 
.container {
  justify-content: left;
  align-items: center;
  /* height: 110vh; */
  max-width: 100%;
}
.repos-list {
		display: flex;
		flex-direction: row;
		justify-content: center;
		color:rgb(210, 129, 129);
		max-width: 100%;
		/* width: 800px; */
		/* height:  800px; */
		align-items: center;
}
    



</style>
