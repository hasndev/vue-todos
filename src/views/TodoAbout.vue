<template>
  <div class="todo-about">
    <h1>About My Todo Website</h1>
    <p>
      Welcome to my Todo website! This website helps you organize your tasks and
      stay productive. Here are some key features:
    </p>
    <ul>
      <li>Add, edit, and delete tasks.</li>
      <li>Mark tasks as completed.</li>
    </ul>
    <p>If you have any questions or feedback, feel free to reach out to us.</p>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.todo-about {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: square;
  }

  li {
    font-size: 16px;
    line-height: 1.5;
    margin-left: 20px;
  }
}
</style>
