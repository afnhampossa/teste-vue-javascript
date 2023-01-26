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
            <h2 class="fw-light">Lista de contatos</h2>
            <br>
            <div class="alert alert-warning" role="alert" v-if="contacts.length==0">
               Os dados desta página, são guardados localmente.  Primeiro cadastre dados.
            </div>
          
            <button class="btn btn-primary" @click="newContact" title='Novo Contacto' data-bs-toggle="modal" data-bs-target="#newContact" >Novo Contacto </button>
          </div>
        </div>
      </section>
      
    
      <div class="album py-5 bg-light" v-if="contacts.length!=0">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Operações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in contacts" :key="item.id">
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <button type="button"  @click="getEdit(item.id)"  title='Vizualizar o contacto' data-bs-toggle="modal" data-bs-target="#viewContact" class="btn btn-outline-secondary " ><i class="fa fa-eye"></i></button>
                    <button type="button"  @click="getEdit(item.id)"  title='Editar o contacto' data-bs-toggle="modal" data-bs-target="#editContact" class="btn btn-outline-primary " ><i class="fa fa-edit"></i></button>
                    <button  style="margin-left:5px" @click="getDelete(item.id)"  data-bs-toggle="modal" data-bs-target="#delContact"  title='Eliminar o Contato' type="button" class="btn btn-outline-danger" ><i class="fas fa-times"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
            
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

    <!-- Modal cad contact-->
    <div
      class="modal fade"
      id="newContact"
      tabindex="-1"
      aria-labelledby="newContact"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newContact">
              <strong> Cadstrar Contato</strong>
            </h5>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">
              <div class="row">

                  <div class="form-group col-md-12">
                    <label for="inputName" class="left">Name</label>
                    <input v-model="contact.name" type="text" class="form-control" id="inputName" placeholder="Ex: Angelino Fernando">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="inputContato">Contato</label>
                    <input v-model="contact.phone" type="text" class="form-control" id="inputContato" placeholder="Ex: 112 049 489">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="inputEmail">E-mail</label>
                    <input v-model="contact.email" type="email" class="form-control" id="inputEmail" placeholder="Email">
                  </div>

                  <div class="form-group">
                    <label for="inputPhoto">Foto</label>
                    <input  type="file" class="form-control" id="inputPhoto" >
                  </div>

                </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-4">
                <button
                  class="btn btn-danger"
                  type="button"
                  title="Cancelar"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="col-4">
                <button @click="salvar" class="btn btn-dark" title="Confirmar">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Edit contact-->
    <div
      class="modal fade"
      id="editContact"
      tabindex="-1"
      aria-labelledby="editContact"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editContact">
              <strong> Editar Contato</strong>
            </h5>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">
              <div class="row">

                  <div class="form-group col-md-12">
                    <label for="inputName" class="left">Name</label>
                    <input v-model="contact.name" type="text" class="form-control" id="inputName" placeholder="Ex: Angelino Fernando">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="inputContato">Contato</label>
                    <input v-model="contact.phone" type="text" class="form-control" id="inputContato" placeholder="Ex: 112 049 489">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="inputEmail">E-mail</label>
                    <input v-model="contact.email" type="email" class="form-control" id="inputEmail" placeholder="Email">
                  </div>

                  <div class="form-group">
                    <label for="inputPhoto">Foto</label>
                    <input  type="file" class="form-control" id="inputPhoto" >
                  </div>

                </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-4">
                <button
                  class="btn btn-danger"
                  type="button"
                  title="Cancelar"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="col-4">
                <button @click="salvar" class="btn btn-dark" title="Confirmar">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal View contact-->
    <div
      class="modal fade"
      id="viewContact"
      tabindex="-1"
      aria-labelledby="viewContact"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewContact">
              <strong> {{ contact.name }}</strong>
            </h5>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">

              <table class="table table-sm">
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{{ contact.id }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Nome</th>
                    <td>{{ contact.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">E-mail</th>
                    <td>{{ contact.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Contato</th>
                    <td>{{ contact.phone }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-4">
                <button
                  class="btn btn-danger"
                  type="button"
                  title="Cancelar"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Delete contact-->
    <div
      class="modal fade"
      id="delContact"
      tabindex="-1"
      aria-labelledby="delContact"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="delContact">
              <strong> Deseja apagar {{contact.name }}?</strong>
            </h5>
          </div>
          <div class="modal-body">
            <div class="mb-3 row">
              <div class="row">
                  <p>Todos os dados relacionados serão perdidos!</p>

                </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <div class="col-4">
                <button
                  class="btn btn-danger"
                  type="button"
                  title="Cancelar"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="col-4">
                <button @click="setDelete" class="btn btn-dark" title="Confirmar">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
  </div>

 


</template>

<script>


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      contacts: [],
      contact: {
        id: 0,
        name: '',
        phone: '',
        email: '',
        image: ''
      },
      index: 0
    };
  },
  
  methods:{
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

      this.contact.id = this.contacts.length + 1

      this.contacts.push({
        id: this.contact.id,
        name: this.contact.name,
        phone: this.contact.phone,
        email: this.contact.email
      })
      

      await this.$swal(
        '',
        'Contato inserido com sucesso!',
        'success')

      await this.cleanForm()
    },

    getEdit(id){
      this.contact.id = this.contacts[id-1].id
      this.contact.name = this.contacts[id-1].name
      this.contact.phone = this.contacts[id-1].phone
      this.contact.email = this.contacts[id-1].email
    },


    getDelete(id){
      this.contact.id = this.contacts[id-1].id
      this.contact.name = this.contacts[id-1].name

      this.index=id-1
    },

    setDelete(){
      this.contacts.splice(this.index, 1); 

      this.$swal(
        '',
        'Contato eliminado com sucesso!',
        'success')

      this.cleanForm()
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
    newContact(){
      this.cleanForm()
    },
    async cleanForm(){
      this.contact.name=''
      this.contact.phone=''
      this.contact.email=''
      this.contact.image=''
    }
  },
  created() {
  },
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
