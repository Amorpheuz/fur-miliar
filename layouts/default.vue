<template>
  <div class="bg-pink">
    <lazy-info-dialog v-if="toggleHelp" :toggle-dialog.sync="toggleHelp">
      <template #card>
        <div
          role="dialog"
          aria-labelledby="app-info"
          aria-describedby="app-description"
          class="mx-auto max-w-3xl shadow-lg rounded-xl bg-white-dark w-full p-4 overflow-auto"
        >
          <button
            ref="closeHelp"
            aria-label="close help"
            class="float-right icon-button"
            @click="toggleHelp = !toggleHelp"
          >
            <svg
              class="h-12 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"
              />
            </svg>
          </button>

          <h2 id="app-info" class="text-4xl font-bold mb-2">
            What is Fur<span aria-hidden="true">~</span>miliar?
          </h2>
          <p id="app-description" class="mb-2">
            Fur<span aria-hidden="true">~</span>miliar is a single-page app
            (SPA) using Vue & Nuxt for searching for catbreeds. It has a search
            bar where the user can enter the cat breed’s name and the results
            are shown as cards below the search bar in a list.
          </p>
          <p>
            To get started, start by entering a search term in the input box
            below.
          </p>
        </div>
      </template>
    </lazy-info-dialog>
    <div class="container mx-auto min-h-screen px-6">
      <div class="py-3 flex justify-between">
        <Logo />
        <button
          type="button"
          class="p-2 my-2 flex text-xl items-center outline-none border-2 border-lavender-dark focus:bg-white focus:text-blue-dark bg-lavender-dark text-white rounded-xl shadow-lg"
          @click="
            toggleHelp = !toggleHelp
            $nextTick(() => {
              if (toggleHelp) $refs.closeHelp.focus()
            })
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 fill-current mr-2"
            viewBox="0 0 32 32"
          >
            <path
              d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"
            />
          </svg>
          Help
        </button>
      </div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      toggleHelp: false,
    }
  },
}
</script>
