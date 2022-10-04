<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form
    :validation-schema="login_schema"
    :initial-values="initialValues"
    ref="form"
    @submit="login"
    v-slot="{ meta }"
  >
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
      class="block w-full !bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!(meta.valid && meta.dirty)"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";
export default {
  name: "LoginForm",
  data() {
    return {
      login_schema: {
        email: "required|email",
        password: "required|min:9|max:100|excluded:password",
      },
      initialValues: { email: "", password: "" },
      button_disabled: true,
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait! We are logging you in.",
    };
  },
  mounted() {
    console.log("closed");
  },

  methods: {
    ...mapActions(useUserStore, ["authenticate"]),
    async login(values) {
      this.button_disabled = false;
      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = "bg-blue-500";
      this.login_alert_msg = "Please wait! We are logging you in.";

      try {
        await this.authenticate(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = "bg-red-500";
        this.login_alert_msg = "Invalid login details.";
        return;
      }

      this.login_alert_variant = "bg-green-500";
      this.login_alert_msg = "Success! You are now logged in.";
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
