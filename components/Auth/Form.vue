<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput
        value=""
        label="Username"
        placeholder="@username"
        v-model="data.username"
      />
      <UIInput
        label="Password"
        placeholder="*********"
        v-model="data.password"
        type="password"
      />

      <div>
        <button @click="handleLogin">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  username: "",
  password: "",
});

function handleLogin() {
  alert(JSON.stringify(data));
}
</script>
