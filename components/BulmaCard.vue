<template>
  <div class="card">
    <header class="card-header">
      <slot name="header"></slot>
    </header>

    <div class="card-inner">
      <div class="card-image">
        <slot name="image"></slot>
      </div>

      <div class="card-content">
        <slot name="content"></slot>
      </div>
    </div>
  
  </div>
</template>