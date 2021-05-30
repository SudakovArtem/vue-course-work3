<template>
  <h1 v-if="!tasks.length" class="text-white center">Задач пока нет</h1>
  <div v-else>
    <h3 v-if="getActiveTasks.length" class="text-white">Всего активных задач: {{ getActiveTasks.length }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :status="task.status.class" :text="task.status.text"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.deadline }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click.prevent="$router.push('/task/' + task.id)">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.getters.tasks),
      getActiveTasks: computed(() => store.getters.getActiveTasks),
    }
  },
  components: {AppStatus}
}
</script>
