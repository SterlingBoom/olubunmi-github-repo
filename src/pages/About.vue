<template>
  <div class="container">
    <h1>This is the About page</h1>
    <h2 class="m-t">This project entails</h2>
    <p class="about">"Creating a new vue js application then using the GitHub API, fetched my GitHub repositories using this endpoint https://api.github.com/users/{{USERNAME}}/repos. showed a page with a list of all my repositories on GitHub(the page have some form of pagination). Then created another page showing data for a single repo clicked from the list of repos using nested routes. Implemented a wildcard route to catch 404 pages."

</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  /* padding: 0 20px; */
  max-width: 1140px;
  margin: 0 auto;
  padding-top:100px;
}

.about
{
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 400;
  color: #333;
  margin: 0 0 1.5rem;
  padding: 0;
  text-align: left;
  margin-top: 30px;
}
.m-t
{
  margin-top: 30px;
}
</style>