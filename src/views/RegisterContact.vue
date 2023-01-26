<template>

  <div class="register">
    
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>CONTATOS</strong>
          </a>
          <button class="navbar-toggler" type="button" aria-controls="navbarHeader">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
    
    <main>
    
      <section class="py-2 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h2 class="fw-light">Cadastrar novo contato</h2>
          </div>
        </div>
      </section>
    
      <div class="py-5 bg-light">
        <div class="container card pt-3 pb-3">
          <div class="row">

              <div class="form-group col-md-6">
                <label for="inputName" class="left">Name</label>
                <input v-model="contact.name" type="text" class="form-control" id="inputName" placeholder="Ex: Angelino Fernando">
              </div>

              <div class="form-group col-md-6">
                <label for="inputContato">Contato</label>
                <input v-model="contact.phone" type="text" class="form-control" id="inputContato" placeholder="Ex: 112 049 489">
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail">E-mail</label>
                <input v-model="contact.email" type="email" class="form-control" id="inputEmail" placeholder="Email">
              </div>

              <div class="form-group">
                <label for="inputPhoto">Foto</label>
                <input  type="file" class="form-control" id="inputPhoto" >
              </div>

              <div class="form-group col-md-6">
                <button class="btn btn-primary" @click="salvar" >Salvar </button>
                <button type="button" class="btn btn-outline-danger space-buttons">Cancelar</button>
              </div>
             

          </div>
        </div>
      </div>
    
    </main>
    
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#"><i class="fas fa-arrow-up"></i></a>
        </p>
        <p class="mb-1">Todos os direitos reservados &copy;  2023</p>
        <p class="mb-0">Angelino Fernando, <a href="#">Siga-me</a>.</p>
      </div>
    </footer>
          
  </div>

</template>

<script>

export default {
  name: 'HomeReg',
  data() {
    return {
      contacts: [],
     
      contact: {
        id: 0,
        name: '',
        phone: '',
        email: '',
        image: ''
      }
    };
  },
  methods: {
    async salvar(){
   
      if(!this.validateName()){
        await this.$swal(
          '',
          'O nome de conter string com mais de 5 caracteres!',
          'error')
        return
      }
      if(!this.validatePhone()){
        await this.$swal(
          '',
          'O contato de conter 9 dígitos numéricos!',
          'error')
        return
      }

      if(!this.validateEmail()){
        await this.$swal(
          '',
          'Email inválido!',
          'error')
          return
      }

      // var length = this.contacts.length
      this.contact.id = this.contacts.length + 1
      
      localStorage.setItem('itens', []);

      this.contacts.push(this.contact)
      // localStorage.setItem('contacts', JSON.stringify(this.contacts));
      console.log(this.contact)
      

      await this.$swal(
        '',
        'Contato inserido com sucesso!',
        'success')

      // await this.cleanForm()
    },

    validateEmail() {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.contact.email.match(validRegex)) 
        return true;
      else 
        return false;
    },

    validateName(){
      var name = this.contact.name
      if(!isNaN(name))
        return false;
      if(name.length<=5)
        return false 

      return true
    },

    validatePhone(){
      var phone = this.contact.phone
      if(isNaN(phone))
        return false;
      if(phone.length!=9)
        return false 

      return true
    },

    async cleanForm(){
      this.contact.name=''
      this.contact.phone=''
      this.contact.email=''
      this.contact.image=''
    }
  }
}
</script>
<style>
body {
  background-image: linear-gradient(180deg, #eee, #fff 100px, #f3f4f7);
}

.form-group{
  padding-top: 15px;
  text-align: left;
}

.space-buttons {
  margin-left: 5px;
}

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}
</style>

