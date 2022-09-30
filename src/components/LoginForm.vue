<template>
  <vee-form :validation-schema="login_schema">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
    </div>
    <ErrorMessage class="text-red-400" name="email" />

    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-400" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full !bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login_schema: {
        email: "required|email",
        password: "required|min:9|max:100|excluded:password",
      },
    };
  },
  mounted() {
    this.errors.clear();
  },
};
</script>

<style lang="scss" scoped></style>
