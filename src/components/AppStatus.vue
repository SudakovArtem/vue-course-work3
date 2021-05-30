<template>
  <span :class="['badge', status]">{{ text }}</span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator(value) {
        return ['warning', 'primary', 'danger'].includes(value)
      }
    },
    text: {
      type: String,
      required: true,
      validator(value) {
        return ['Выполняется', 'Завершен', 'Отменен', 'Активен'].includes(value)
      }
    }
  }
}

</script>
