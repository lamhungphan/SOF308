<template>
  <div class="text-align-center">
    <Home></Home>
    <h1>1. Event Handling</h1>
    <h3>Listen to Events</h3>
    <Parent></Parent>
    
    <h3>Method Handler</h3>
    <MethodHandler></MethodHandler>

    <h3>Key Modifier</h3>
    <KeyModifier></KeyModifier>
    <hr>

    <h1>2. Form Binding</h1>
    <h3>Text Input</h3>
    <TextInput></TextInput>

    <h3>Multiline Input</h3>
    <MultilineInput></MultilineInput>

    <h3>Checkbox</h3>
    <Checkbox></Checkbox>

    <h3>Multiple Checkbox</h3>
    <MultipleCheckbox></MultipleCheckbox>

    <h3>Select</h3>
    <Select></Select>

    <h3>Value Binding</h3>
    <ValueBinding></ValueBinding>

    <h3>v-model với Component</h3>
    <ParentInput></ParentInput>

  </div>
</template>

<script setup>
import Home from "./Home.vue"
import Parent from "./slide7/ParentComponent.vue"
import MethodHandler from "./slide7/MethodHandler.vue"
import KeyModifier from "./slide7/KeyModifier.vue"
import TextInput from "./slide7/TextInput.vue"
import MultilineInput from "./slide7/MultilineInput.vue"
import Checkbox from "./slide7/Checkbox.vue"
import MultipleCheckbox from "./slide7/MultipleCheckbox.vue"
import Select from "./slide7/Select.vue"
import ValueBinding from "./slide7/ValueBinding.vue"
import ParentInput from "./slide7/ParentInput.vue"
</script>

<style></style>