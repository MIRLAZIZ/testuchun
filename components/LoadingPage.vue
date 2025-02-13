<template>
    <div class="  flex flex-col justify-center items-center w-full my-32 ">
      <div class="spinner"></div>
      <p >{{store.dataTranslate["header.loading"]}}</p>
    </div>
   
  </template>
  
  <script setup>
  import { useHomeStore } from "~/store/home";
  
  const store = useHomeStore();
 
 
  </script>
  
  <style scoped>

  
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #06203D;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  