<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <div>
          <h2 class="font-bold text-gray-800 dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex justify-between p-2 items-center">
          <div class="flex">
            <img
              class="w-10 h-10 rounded-full"
              :src="whoToFollow.image"
              :alt="whoToFollow.name"
            />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "18.8k Tweets",
  },
  {
    title: "#CodingIsFun",
    count: "8.8k Tweets",
  },
  {
    title: "#artforall",
    count: "1.8 Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@joeBiden",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
