<template>
  <div class>
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? '' : 'text-opacity-90'"
        class="nav-container py-1 hover:text-primary-500"
      >
        <Bars3Icon class="w-5 h-5" />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute -left-24 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl"
        >
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="relative grid gap-8 dark:bg-zinc-800 bg-white p-7 lg:grid-cols-2">
              <a
                v-for="item in examples"
                :key="item.name"
                :href="item.href"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out dark:hover:bg-zinc-700 hover:bg-gray-50 focus:outline-none focus-visible:ring"
              >
                <div class="ml-4">
                  <p class="text-sm font-medium text-primary-600">{{ item.name }}</p>
                  <p class="text-sm text-gray-500">{{ item.description }}</p>
                </div>
              </a>
            </div>
            <div class="bg-gray-50 dark:bg-zinc-700 p-4">
              <a
                href="https://docs.snipform.io/"
                target="_blank"
                class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out dark:hover:bg-zinc-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-primary-600">docs.snipform.io</span>
                </span>
                <span class="block text-sm text-gray-400">Read the SnipForm documentation</span>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
  
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/vue/20/solid";

const examples = [
  {
    name: "The Basics",
    description: "Basic example showing validation and errors",
    href: "/basics",
  },
  {
    name: "Error & valid states",
    description: "Example showing how to use error and valid states",
    href: "/error-valid-states",
  },
  {
    name: "Advanced Validation",
    description:
      "Example showing some of SnipForm's advanced validation features",
    href: "/advanced-validation",
  },
  {
    name: "Loading & Submit State",
    description:
      "Example showing how to use the loading and submit state of a form",
    href: "/loading-submit-state",
  },
  {
    name: "Custom Result",
    description:
      "Example showing how to add your own result content with input variables",
    href: "/custom-result",
  },
  {
    name: "Full example",
    description: "A full example of SnipForm's features",
    href: "/full-example",
  },
  {
    name: "Shorthand",
    description: "A full example using the shorthand syntax",
    href: "/shorthand",
  },
];
</script>
  