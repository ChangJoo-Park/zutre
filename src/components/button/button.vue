<template>
  <button :class="btnClass" :disabled="isDisabled" @click="$emit('click')" v-bind:data-badge="badge">
    <slot />
  </button>
</template>

<script>
/**
 * ZButton
 *
 * Spectre: https://picturepan2.github.io/spectre/elements/buttons.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} size Values: sm, lg
 * @prop {String} color
 * @prop {Boolean} active
 * @prop {Boolean} action
 * @prop {Boolean} circle
 * @prop {Boolean} loading
 * @prop {Boolean} disabled
 * @prop {Boolean} right
 * @prop {String} badge
 */
export default {
  name: 'Button',
  props: {
    click: Function,
    size: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => ''
    },
    active: {
      type: Boolean,
      default: () => false
    },
    action: {
      type: Boolean,
      default: () => false
    },
    circle: {
      type: Boolean,
      default: () => false
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    right: {
      type: Boolean
    },
    clear: {
      type: Boolean
    },
    badge: String,
  },
  computed: {
    isDisabled: function() {
      return this.disabled
    },
    btnClass: function() {
      let css = { btn: true };

      if (this.size !== '') {
        switch (this.size) {
          case 'sm':
            css['btn-sm'] = true
            break
          case 'lg':
            css['btn-lg'] = true
            break
        }
      }

      if (this.color !== '') {
        switch (this.color) {
          case 'primary':
            css['btn-primary'] = true
            break
          case 'link':
            css['btn-link'] = true
            break
          case 'success':
            css['btn-success'] = true
            break
          case 'error':
            css['btn-error'] = true
            break
        }
      }

      if (typeof this.badge !== 'undefined') {
        css['badge'] = true
      }

      if (this.clear === true) {
        css['btn-clear'] = true
      }

      if (this.active === true) {
        css['active'] = true
      }

      if (this.action === true) {
        css['btn-action'] = true
      }

      if (this.circle === true) {
        css['s-circle'] = true
      }

      if (this.loading === true) {
        css['loading'] = true
      }

      if (this.right === true) {
        css['float-right'] = true
      }

      return css
    }
  }
}
</script>
