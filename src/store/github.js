import { defineStore } from 'pinia'

export const useGithubStore = defineStore('github', {
  state: () => ({
    repos: [],
    repoPerPage: 5,
    currentPage: 1,
    pageNumbers: [],
    repo: {},
  }),
  actions: {
    async fetchRepos() {
      const response = await fetch('https://api.github.com/users/sterlingboom/repos')
      this.repos = await response.json()
      for (
        let i = 1;
        i <= Math.ceil(this.repos.length / this.repoPerPage);
        i++
      ) {
        this.pageNumbers.push(i)
      }
    },
    setSingleRepo(id) {
      this.repo = this.repos.find((repo) => repo.id == id)
      console.log(this.repo)
    }

   
  },
  getters: {
    currentRepos() {
      const indexOfLastRepo = this.currentPage * this.repoPerPage
      const indexOfFirstRepo = indexOfLastRepo - this.repoPerPage
      return this.repos.slice(indexOfFirstRepo, indexOfLastRepo)
    },
  }
  
})
