<template>
  <nav class="menu">
    <ul>
      <li>
        <!--para onde eu quero navegar-->
        <!--essas tags são do router-->
        <!--atributo tag do router link-->
        <!--active-class é usado para verificar quando o link foi acessado, assim ele fica marcado na label-->
        <!--exact serve para marcar apenas o link que foi selecionado para navegação-->
        <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
      </li>
      <li>
        <router-link to="/usuario" tag="li" active-class="active"><a>Usuário</a></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>