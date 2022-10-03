import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value,
  max_value,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);

    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("min_value", min_value);
    defineRule("max_value", max_value);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    defineRule("alpha_spaces", alphaSpaces);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} required`,
          min: `the field ${ctx.field}is too short`,
          max: `the field ${ctx.field}is too long`,
          alphaSpaces: `the field ${ctx.field} may only contain alphabetical character and spaces`,
          email: `the field ${ctx.field} must be a valid email`,
          min_value: `the field ${ctx.field} is too low`,
          max_value: `the field ${ctx.field} is too high`,
          excluded: `your not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Duo the restriction, we don't accept user from this country`,
          passwords_mismatch: `The password don't match`,
          tos: `you must accept term of service`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
      validateOnMount: false,
    });
  },
};
