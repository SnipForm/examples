<template>
  <div>
    <button v-if="!loading" class="nav-container py-1 hover:text-primary-500" @click="toggleMode">
      <SunIcon v-if="isDark" class="w-5 h-5" />
      <MoonIcon v-if="!isDark" class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/20/solid";

const isDark = ref(true);

const toggleMode = () => {
  isDark.value = !isDark.value;
  if (!isDark.value) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
};

onMounted(() => {
  isDark.value = localStorage.theme === "dark";
});
</script>