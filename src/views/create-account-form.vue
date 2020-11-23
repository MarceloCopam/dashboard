<template>
  <form class="create-account-form" @submit.prevent="onSubmit">
    <dx-form :form-data="formData" :disabled="loading">
      <dx-item
        data-field="email"
        editor-type="dxTextBox"
        :editor-options="{ stylingMode: 'filled', placeholder: 'E-mail', mode: 'email' }"
      >
        <dx-required-rule message="E-mail obrigatório" />
        <dx-email-rule message="O E-mail finformado é inválido" />
        <dx-label :visible="false" />
      </dx-item>
      <dx-item
        data-field="password"
        editor-type="dxTextBox"
        :editor-options="{ stylingMode: 'filled', placeholder: 'Senha', mode: 'password' }"
      >
        <dx-required-rule message="O campo Senha é obrigatório" />
        <dx-label :visible="false" />
      </dx-item>
      <dx-item
        data-field="confirmedPassword"
        editor-type="dxTextBox"
        :editor-options="{ stylingMode: 'filled', placeholder: 'Confirmação de Senha', mode: 'password' }"
      >
        <dx-required-rule message="O campo Senha é obrigatório" />
        <dx-custom-rule
          message="A confirmação de senha não está correta"
          :validation-callback="confirmPassword"
        />
        <dx-label :visible="false" />
      </dx-item>
      <dx-item>
        <template #default>
          <div class='policy-info'>
            Antes de criar a conta leia nossos <router-link to="#">termos de serviço</router-link> e <router-link to="#">Politica de privacidade</router-link>
          </div>
        </template>
      </dx-item>
      <dx-button-item>
        <dx-button-options
          width="100%"
          type="default"
          template="createAccount"
          :use-submit-behavior="true"
        >
        </dx-button-options>
      </dx-button-item>
      <dx-item>
        <template #default>
          <div class="login-link">
            Já Possui Cadastro? <router-link to="/login">Entrar no Sistema</router-link>
          </div>
        </template>
      </dx-item>
      <template #createAccount>
        <div>
          <span class="dx-button-text">
              <dx-loadIndicator v-if="loading" width="24px" height="24px" :visible="true" />
              <span v-if="!loading">Criar Conta</span>
          </span>
        </div>
      </template>
    </dx-form>
  </form>
</template>

<script>
import DxForm, {
  DxItem,
  DxLabel,
  DxButtonItem,
  DxButtonOptions,
  DxCustomRule,
  DxRequiredRule,
  DxEmailRule
} from 'devextreme-vue/form';
import DxLoadIndicator from 'devextreme-vue/load-indicator';
import notify from 'devextreme/ui/notify';

import auth from "../auth";

export default {
  components: {
    DxForm,
    DxItem,
    DxLabel,
    DxButtonItem,
    DxButtonOptions,
    DxRequiredRule,
    DxCustomRule,
    DxEmailRule,
    DxLoadIndicator
  },
  data() {
    return {
        formData: {},
        loading: false
    }
  },
  methods: {
    onSubmit: async function() {
      const { email, password } = this.formData;
      this.loading = true;

      const result = await auth.createAccount(email, password);
      this.loading = false;

      if (result.isOk) {
        this.$router.push("/login-form");
      } else {
        notify(result.message, 'error', 2000);
      }
    },
    confirmPassword(e) {
      return e.value === this.formData.password;
    }
  }
}
</script>

<style lang="scss">
@import "../themes/generated/variables.base.scss";

.create-account-form {
  .policy-info {
    margin: 10px 0;
    color: rgba($base-text-color, alpha($base-text-color) * 0.7);
    font-size: 14px;
    font-style: normal;

    a {
      color: rgba($base-text-color, alpha($base-text-color) * 0.7);
    }
  }

  .login-link {
    color: $base-accent;
    font-size: 16px;
    text-align: center;
  }
}
</style>
