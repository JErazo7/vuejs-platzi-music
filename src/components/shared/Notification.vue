<template lang="pug">
    .container
        .columns
            .column.is-4.is-offset-9
                .notification.is-danger
                    slot(name="body") Algo anduvo mal
</template>
<style lang="scss" scoped>
.notification {
  margin-right: 2%;
  margin-left: 2%;
}
</style>
