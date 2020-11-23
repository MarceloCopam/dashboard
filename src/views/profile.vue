<template>
  <div>
    <h2 class="content-block">Usuário</h2>

    <div class="content-block dx-card responsive-paddings">
      <div class="form-avatar">
        <img :src="imageSrc" />
      </div>
      <span>{{ formData.Notes }}</span>
    </div>

    <div class="content-block dx-card responsive-paddings">
      <dx-form
        id="form"
        label-location="top"
        :form-data="formData"
        :colCountByScreen="colCountByScreen"
      />
    </div>
  </div>
</template>

<script>
import DxForm from "devextreme-vue/form";

export default {
  props: {
    picture: String,
  },
  data() {
    const picture = "2014/04/28344c64-8702-49ba-807f-d72dfcef8b77.jpg";
    return {
      imageSrc: `https://media.fstatic.com/PghQZR9oQlp2np7yLIiCiOOmMwc=/full-fit-in/640x480/media/accounts/avatar/${picture}`,
      formData: {
        ID: 7,
        FirstName: "Sandra",
        teste: "teste",
        LastName: "Johnson",
        Prefix: "Mrs.",
        Position: "Controller",
        Picture: picture,
        BirthDate: new Date("1974/11/15"),
        HireDate: new Date("2005/05/11"),
        Notes:
          "Sandra is a CPA and has been our controller since 2008. " +
          "She loves to interact with staff so if you`ve not met her, be certain to say hi." +
          "\r\n\r\n" +
          "Sandra has 2 daughters both of whom are accomplished gymnasts.",
        Address: "4600 N Virginia Rd.",
      },
      colCountByScreen: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
      },
    };
  },
  components: {
    DxForm,
  },
};
</script>

<style lang="scss">
.form-avatar {
  float: left;
  height: 120px;
  width: 120px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  overflow: hidden;

  img {
    height: 120px;
    display: block;
    margin: 0 auto;
  }
}
</style>
