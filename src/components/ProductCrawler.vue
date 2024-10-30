<template>
    <div>
      <h1>Web Crawler</h1>
      <input v-model="url" type="text" placeholder="Enter URL to scrape" />
      <button @click="scrapeData">Scrape</button>
  
      <div v-if="loading">Loading...</div>
  
      <div v-if="error" class="error">{{ error }}</div>
  
      <div v-if="result">
        <h2>Scraped Data:</h2>
        <pre>{{ result }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductCrawler',
    data() {
      return {
        url: '',
        loading: false,
        result: null,
        error: null,
      };
    },
    methods: {
      async scrapeData() {
        this.loading = true;
        this.error = null;
        this.result = null;
  
        try {
          const response = await axios.post('http://localhost:3000/crawl', {
            url: this.url,
          });
          this.result = response.data;
        } catch (err) {
          this.error = 'Error scraping data: ' + err.message;
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-right: 10px;
  }
  
  .error {
    color: red;
  }
  </style>
  