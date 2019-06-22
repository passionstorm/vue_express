<template>
  <div class="checkbox">
    <input
      ref="input"
      :type="_type"
      :name="name"
      :checked="isChecked"
      :value="value"
      @change="onChange"
      :disabled="_disabled"
      :required="_required"
    >
    <div class="state" :class="{'slot-pass': slotPassed}">
      <svg class="svg svg-icon" viewBox="0 0 20 20">
        <path
          d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
          style="stroke: white; fill: white;"
        ></path>
      </svg>
      <label>
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    type: String,
    name: String,
    value: {},
    modelValue: {},
    checked: {},
    disabled: {},
    required: {}
  },
  data() {
    return {
      m_checked: undefined,
      default_mode: false
    };
  },
  watch: {
    checked(v) {
      this.m_checked = v;
    }
  },
  computed: {
    slotPassed() {
      return this.$slots.default != undefined;
    },
    _type() {
      if (this.$options.input_type) return this.$options.input_type;
      if (this.type) return this.type;
      return "checkbox";
    },
    isChecked() {
      if (this.modelValue !== undefined) {
        // radio
        if (this._type === "radio") {
          return this.modelValue === this.value;
        }
        // checkbox
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value);
        }
        if (this._trueValue) {
          return this.modelValue === this.trueValue;
        }
        return typeof this.modelValue === "string" ? true : !!this.modelValue;
      }
      // this.modelValue === undefined
      if (this.m_checked === undefined)
        return (this.m_checked =
          typeof this.checked === "string" ? true : !!this.checked);
      else return this.m_checked;
    },
    _disabled() {
      return typeof this.disabled === "string" ? true : !!this.disabled;
    },
    _required() {
      return typeof this.required === "string" ? true : !!this.required;
    },
    _trueValue() {
      return typeof this.trueValue === "string"
        ? this.trueValue
        : !!this.trueValue;
    },
    _falseValue() {
      return typeof this.falseValue === "string"
        ? this.falseValue
        : !!this.falseValue;
    },
  },
  methods: {
    onChange(event) {
      if (this._type === "radio") {
        this.$emit("change", this.value);
        return;
      }
      let isChecked = event.target.checked;
      this.m_checked = isChecked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit(
          "change",
          isChecked
            ? this._trueValue
              ? this.trueValue
              : true
            : this._falseValue
            ? this.falseValue
            : false
        );
      }
    }
  }
};
</script>
<style scoped>
.checkbox {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
}

.checkbox .state svg {
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1;
}

.checkbox .state .svg {
  position: absolute;
  font-size: 1em;
  left: 0;
  z-index: 1;
  text-align: center;
  line-height: normal;
  top: calc((0% - (100% - 1em)) - 8%);
  border: 1px solid transparent;
  opacity: 0;
}

input:checked ~ .state .svg {
  opacity: 1;
}

input:checked ~ .state label:before,
input:checked ~ .state label::after {
  background-color: #007bff;
}

.checkbox .state label:after,
.checkbox .state label:before,
.checkbox .state .svg {
  width: calc(1em + 8px);
  height: calc(1em + 8px);
  top: 0;
}

.checkbox .slot-pass label:after,
.checkbox .slot-pass label:before,
.checkbox .slot-pass .svg {
  top: calc((0% - (100% - 1em - 7px)) - 8%);
}

.checkbox .state {
  /* height: calc(1em + 8px); */
}

.checkbox .state label:after,
.checkbox .state label:before {
  content: "";
  display: block;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid transparent;
  z-index: 0;
  position: absolute;
  left: 0;

  background-color: #ccc;
}

.checkbox .state label {
  height: calc(1em + 7px);
}

.checkbox .state label:after,
.checkbox .state label:before {
  border-radius: 20%;
}

.checkbox input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 1em;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.checkbox .state label {
  position: initial;
  display: inline-block;
  font-weight: 400;
  margin: 0;
  text-indent: 1.8em;
  min-width: calc(1em + 8px);
}
</style>



