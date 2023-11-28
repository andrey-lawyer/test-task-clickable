<template>
  <FormKit
    type="form"
    use-local-storage
    id="registration"
    submit-label="Register"
    @submit="submitHandler"
    :actions="false"
    :classes="{
      messages: { 'messages-all': true }
    }"
  >
    <h3 class="title">Registration</h3>

    <FormKit
      type="text"
      id="email"
      name="email"
      v-model="emailUi"
      label="Email"
      placeholder="Email"
      validation="required|email"
      validation-visibility="blur"
      :validation-messages="{
        email: 'Provide a valid e-mail address'
      }"
      :classes="{
        input: {
          'input-form': true,
          'input-email': true,
          'success-input_email': successEmail ? true : false,
          'error-input_email': visibleCountEmail !== 0 && emailUi.trim() !== '' ? true : false
        },
        message: { 'message-email': true }
      }"
      :label-class="emailUi.trim() !== '' ? 'label-show_email' : 'label-hide_email'"
      :inner-class="'email-inner'"
      @node="countVisibleEmail"
    />

    <FormKit
      type="password"
      name="password"
      v-model="passwordUi"
      label="Password"
      validation="required|length:6"
      validation-visibility="blur"
      :validation-messages="{
        length: 'password must be at least 6 characters'
      }"
      placeholder="Your password"
      :classes="{
        input: {
          'input-form': true,
          'input-password': true,
          'success-input_password': successPassword ? true : false,
          'error-input_password':
            visibleCountPassword !== 0 && passwordUi.trim() !== '' ? true : false
        },
        messages: { 'messages-email': true }
      }"
      :label-class="passwordUi.trim() !== '' ? 'label-show_password' : 'label-hide_password'"
      :inner-class="'password-inner'"
      @node="countVisiblePassword"
    />
    <FormKit
      type="checkbox"
      label="Terms and Conditions"
      name="terms"
      validation="accepted"
      validation-visibility="dirty"
      :wrapper-class="'label-checkbox'"
      :input-class="{ 'custom-checkbox': true }"
      :messages-class="'messages-checkbox'"
      v-model="isChecked"
    >
      <template #label>
        <span v-on:keyup.enter="toggle" class="label-checkbox-span" tabindex="0">
          <input class="formkit-input" type="checkbox" name="terms" id="input_5" value="true" />
          <span for="input_5"
            >By checking this box when registering on this site, the user confirms that he is over
            18 years of age and has read, understood and accepted the</span
          >
          <span class="span-checkbox"> Terms and Conditions.</span>
        </span>
      </template>
    </FormKit>
    <FormKit
      type="submit"
      label="Create an account"
      :input-class="'button-submit'"
      :disabled="!(visibleCountEmail === 0 && visibleCountPassword === 0 && isChecked)"
    />
    <h4 class="title-links">Or register with:</h4>
    <ul class="list_links">
      <li>
        <LinkUi .href="'https://metamask.io/'" .aria_label="'link metamask'">
          <IconMetaMask />
        </LinkUi>
      </li>
      <li>
        <LinkUi .href="'https://www.apple.com/'" .aria_label="'link apple'">
          <IconApple />
        </LinkUi>
      </li>
      <li>
        <LinkUi .href="'https://www.facebook.com/'" .aria_label="'link facebook'">
          <IconFacebook />
        </LinkUi>
      </li>
      <li>
        <LinkUi .href="'https://www.google.com/'" .aria_label="'link google'">
          <IconGoogle />
        </LinkUi>
      </li>
    </ul>
  </FormKit>
</template>

<script setup lang="ts" name="FormRegister">
import { watch, defineProps, ref } from 'vue'
import type { PropType } from 'vue'
import useCountVisible from '@/hooks/useCountVisible'
import IconApple from './icons/IconApple.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconMetaMask from './icons/IconMetaMask.vue'
import IconGoogle from './icons/IconGoogle.vue'
import LinkUi from './ui/LinkUi.vue'

import type { IDataSubmit } from '@/types/IDataSubmit'

const props = defineProps({
  closeModal: {
    type: Function as PropType<() => void>,
    required: true
  }
})

const emailUi = ref('')
const passwordUi = ref('')
const successEmail = ref(false)
const successPassword = ref(false)
const isChecked = ref(false)
const toggle = () => {
  isChecked.value = !isChecked.value
}

const { countVisibleEmail, countVisiblePassword, visibleCountPassword, visibleCountEmail } =
  useCountVisible()

const submitHandler = ({ email, password }: IDataSubmit) => {
  console.log({ email, password })
  emailUi.value = ''
  passwordUi.value = ''
  props.closeModal()
}
watch([emailUi, passwordUi, visibleCountEmail, visibleCountPassword, isChecked], () => {
  if (emailUi.value.trim() !== '' && visibleCountEmail.value === 0) {
    successEmail.value = true
  } else successEmail.value = false

  if (passwordUi.value.trim() !== '' && visibleCountPassword.value === 0) {
    successPassword.value = true
  } else successPassword.value = false
})
</script>

<style>
.list_links {
  display: flex;
  justify-content: center;
  gap: 8rem;
}
.button-submit {
  cursor: pointer;
  width: 100%;
  padding: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Stolzl';
  font-size: 14rem;
  line-height: 1.14;
  letter-spacing: 0.28px;
  border: transparent;
  border-radius: 10px;
  color: var(--button-disabled);
  background-color: var(--span-color);
  margin-bottom: 32rem;
}

.button-submit:disabled {
  background-color: var(--button-disabled-background);
}

.button-submit:active:hover,
.button-submit:active:focus {
  background-color: var(--font-color);
}

.label-checkbox-span {
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-left: 26rem;
}

.label-checkbox-span {
  margin-top: 4rem;
  margin-bottom: 50rem;
}

.label-checkbox:hover .formkit-inner::before,
.label-checkbox:focus-within .formkit-inner::before {
  border: 1px solid var(--font-color);
}

.label-checkbox .formkit-input {
  visibility: hidden;
  display: none;
}

.label-checkbox .formkit-inner {
  position: relative;
}

.label-checkbox .formkit-inner::before {
  content: '';
  position: absolute;
  top: -40rem;
  left: 0;
  width: 18rem;
  height: 18rem;
  border: 1px solid var(--placeholder-color);
  border-radius: 2px;

  transition: background-color 0.3s;
}

.label-checkbox .formkit-inner::after {
  content: '';
  position: absolute;
  top: -40rem;
  left: 0;
  width: 18rem;
  height: 18rem;
  border-radius: 2px;
  background-image: url('/images/checkboks.svg');
  visibility: hidden;
}

.label-checkbox[data-checked='true'] .formkit-inner::after {
  visibility: visible;
}

.label-checkbox[data-checked='false'] .formkit-inner::before {
  visibility: hidden;
}

.formkit-form {
  position: relative;
  top: -62.21rem;
  background-color: var(--background-modal-color);
  padding-left: 16rem;
  padding-right: 16rem;
  padding-top: 32rem;
  padding-bottom: 32rem;

  width: 100%;

  font-family: 'Stolzl';
  font-size: 14rem;
  font-style: normal;

  line-height: 1;
  letter-spacing: 0.28px;

  @media screen and (min-width: 1024px) {
    top: 0;
    padding-top: 88rem;
    padding-bottom: 88rem;
  }
}

.title {
  color: var(--font-color);
  text-align: center;
  font-family: 'Stolzl';
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.4px;
  margin-bottom: 40rem;
  @media screen and (min-width: 1024px) {
    margin-bottom: 48rem;
  }
}

.title-links {
  color: var(--font-color);
  text-align: center;
  font-family: 'Stolzl';
  font-size: 12rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3333;
  letter-spacing: 0.36px;
}

.input-form {
  width: 100%;
  padding: 16rem;
  padding-left: 40rem;

  font-size: 14rem;
  line-height: 1.14;
  letter-spacing: 0.28px;
  background-color: transparent;
  border: 1px solid var(--border-input-color);
  border-radius: 8px;
  color: var(--font-color);
  transition: border 0.2s ease-in-out;
  margin-bottom: 24rem;
}

.email-inner,
.password-inner {
  position: relative;
  z-index: 0;
}

.email-inner::before {
  content: '';
  position: absolute;
  top: 16rem;
  left: 16rem;
  width: 16rem;
  height: 16rem;

  background-image: url('/images/envelope.svg');
  z-index: 1;
}

.password-inner::before {
  content: '';
  position: absolute;
  top: 16rem;
  left: 16rem;
  width: 16rem;
  height: 16rem;

  background-image: url('/images/lock.svg');
  z-index: 1;
}

.input-form::placeholder {
  color: var(--placeholder-color);
  font-family: 'Stolzl';
  font-size: 14rem;
  line-height: 1.14;
  letter-spacing: 0.28px;
}

.input-form:focus {
  outline: none;
  border: 1px solid var(--font-color);
}

.success-input_email,
.success-input_email:focus,
.success-input_password,
.success-input_password:focus {
  border: 1px solid var(--border-input-color);
  outline: none;
}

.error-input_email,
.error-input_email:focus,
.error-input_password,
.error-input_password:focus {
  border: 1px solid var(--error-color);
  outline: none;
}

.formkit-outer {
  position: relative;
}

.formkit-message {
  position: absolute;
  right: 7rem;
  bottom: 15rem;
  z-index: 1;
  color: var(--error-color);
  font-family: 'Stolzl';
  font-size: 10rem;
  line-height: 1.6;
  letter-spacing: 0.2px;
  padding-left: 5rem;
  padding-right: 5rem;
  border-radius: 15px;
  background-color: var(--background-modal-color);
}

.label-hide_email,
.label-hide_password {
  visibility: hidden;
}

.formkit-wrapper {
  position: relative;
}

.label-show_email,
.label-show_password,
.formkit-label {
  position: absolute;
  z-index: 1;
  top: -8rem;
  left: 11rem;
  font-family: 'Stolzl';
  color: var(--placeholder-color);
  font-size: 10rem;
  line-height: 1.6;
  letter-spacing: 0.2px;
  padding-left: 5rem;
  padding-right: 5rem;
  border-radius: 15px;
  background-color: var(--background-modal-color);
}

.label-checkbox {
  color: var(--placeholder-color);
  font-family: 'Stolzl';
  font-size: 10rem;
  line-height: 1.4;
  letter-spacing: 0.2px;
}

.span-checkbox {
  color: var(--span-color);
}

.messages-all {
  display: none;
}

.messages-checkbox {
  display: none;
}
</style>
